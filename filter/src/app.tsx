import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Select from 'react-select';
import query from 'query-string';

interface DataJSON {
    [id: string]: GameJSON
}
interface GameJSON {
    date: string, map: string, mapSize: string, rounds: number,
    ranking: [number, number], resources: [number, number]
}
type UsernameJSON = { id: number, name: string }[];

let users: UsernameJSON;
let idToName = new Map<number, string>();

function renderTableRow(data: GameJSON, id: number) {
    const hrefs = data.ranking.map(id => <a href={`https://codeit.itdhosting.de:1337/profile.php?id=${id}`}>{idToName.get(id) }</a>);
    return <tr key={id}>
        {[id, data.date, data.map, data.mapSize, hrefs[0], data.resources[0], hrefs[1], data.resources[1],
            <a href={`https://codeit.itdhosting.de:1337/replay.php?game=${id}`}>Show Replay</a>
            ].map(x => <td>{x}</td>)}
    </tr>;
}

interface State {
    mapFilter: ReactSelect.Option[]; playerFilter: ReactSelect.Option[];
    winnerFilter: ReactSelect.Option; looserFilter: ReactSelect.Option;
    sortColumn: string; sortReverse: boolean; displayLimit: number;
}

class GUI extends React.Component<{ data: DataJSON }, State> {
    maps: ReactSelect.Option[];
    players: ReactSelect.Option[];
    ids: number[];
    sorters: {[name: string]: (a: number, b: number) => number};
    constructor(props: { data: DataJSON }) {
        super(props);
        const data = props.data;
        this.maps = [...new Set<string>(Object.keys(data).map(k => data[k]).map(game => game.map))].map(map => ({ value: map, label: map }));
        this.players = users.map(user => ({ value: user.id, label: user.name }));
        this.state = deserializeState(location.search);
        this.ids = Object.keys(data).map(x => +x).sort((a, b) => b - a);
        const mulSize = (a: GameJSON) => a.mapSize.split("x").reduce((a,b) => +a*+b, 1);
        const numberCompare = (a: number, b: number) => a - b;
        const localeCompare = (a: string, b: string) => a.localeCompare(b);
        function comparing<B>(extractor: (a:GameJSON) => B, comparator: (b1:B, b2:B) => number) {
            return (a1:number, a2: number) => comparator(extractor(data[a1]), extractor(data[a2]));
        }
        this.sorters = {
            ID: numberCompare,
            Date: numberCompare,
            Map: comparing(x => x.map, localeCompare),
            "Map Size": comparing(a => a.mapSize.split("x").reduce((a,b) => +a*+b, 1), numberCompare),
            "Winner": comparing(x => idToName.get(x.ranking[0]), localeCompare),
            "Winner Resources": comparing(x => x.resources[0], numberCompare),
            "Looser": comparing(x => idToName.get(x.ranking[1]), localeCompare),
            "Looser Resources": comparing(x => x.resources[1], numberCompare),
            "Replay": numberCompare
        }
    }
    componentWillUpdate(props: any, newState: State) {
        if (this.state.displayLimit == newState.displayLimit) newState.displayLimit = deserializeState("").displayLimit;
    }
    setSort(event: React.MouseEvent, sortColumn: string) {
        event.preventDefault();
        if (this.state.sortColumn == sortColumn) this.setState({ sortReverse: !this.state.sortReverse });
        else this.setState({ sortColumn });
    }
    render() {
        const data = this.props.data;
        const {mapFilter, playerFilter, winnerFilter, looserFilter, displayLimit, sortColumn, sortReverse} = this.state;
        let ids: number[] = [];
        for (const id of this.ids) {
            const game = data[id];
            if ((!mapFilter || mapFilter.length == 0 || mapFilter.some(selectedMap => game.map === selectedMap.value))
                && (!playerFilter || playerFilter.length == 0 || playerFilter.every(player => game.ranking.indexOf(+player.value) >= 0))
                && (!winnerFilter || game.ranking[0] === winnerFilter.value)
                && (!looserFilter || game.ranking[1] === looserFilter.value)
            ) ids.push(id);
        }
        const count = ids.length;
        if(this.state.sortColumn) {
            let sorter = this.sorters[this.state.sortColumn];
            if(this.state.sortReverse) ids.sort((a,b) => -sorter(a,b));
            else ids.sort(sorter);
        }
        ids = ids.slice(0, displayLimit);
        return <div>
            <div className="row">
                <div className="col-sm-3">
                    <label>Filter map</label>
                    <Select multi={true} value={mapFilter} options={this.maps} onChange={v => this.setState({ mapFilter: v }) }/>
                </div>
                <div className="col-sm-3">
                    <label>Filter players</label>
                    <Select multi={true} value={playerFilter} options={this.players} onChange={v => this.setState({ playerFilter: v }) } />
                </div>
                <div className="col-sm-3">
                    <label>Filter winner</label>
                    <Select value={winnerFilter} options={playerFilter && playerFilter.length == 2 ? playerFilter : this.players} onChange={v => this.setState({ winnerFilter: v }) } />
                </div>
                <div className="col-sm-3">
                    <label>Filter looser</label>
                    <Select value={looserFilter} options={playerFilter && playerFilter.length == 2 ? playerFilter : this.players} onChange={v => this.setState({ looserFilter: v }) } />
                </div>
            </div>
            <hr/>
            <div className="alert alert-info">Found {count} games</div>

            <table className="table" data={ids}>
                <thead><tr>{"ID,Date,Map,Map Size,Winner,Winner Resources,Looser,Looser Resources,Replay".split(",").map(name =>
                    <th key={name}><a href="#" onClick={e => this.setSort(e, name) }>{name}{this.state.sortColumn === name ? this.state.sortReverse ? "▼" : "▲" : ""}</a></th>) }
                </tr></thead>
                <tbody>{ids.map(id => renderTableRow(data[id], id)) }</tbody>
            </table>
            {count > displayLimit ?
                <div className="alert alert-danger">{count - displayLimit} more not displayed.{" "}
                    <a href="#" onClick={e => { e.preventDefault(); this.setState({ displayLimit: displayLimit * 2 }) } }>Show more</a>
                </div> : ""}
        </div>;
    }
    componentDidUpdate() {
        history.replaceState(null, null, "?" + serializeState(this.state));
    }
}

function serializeState(state: State) {
    const obj: any = {
        map: state.mapFilter && state.mapFilter.map(x => x.value).join("."),
        players: state.playerFilter && state.playerFilter.map(x => x.value).join("."),
        winner: state.winnerFilter && state.winnerFilter.value,
        looser: state.looserFilter && state.looserFilter.value,
        sort: state.sortColumn, reverse: state.sortReverse
    };
    for (const x in obj) if (!obj[x]) delete obj[x];
    console.log(obj);
    return query.stringify(obj);
}
function deserializeState(state: string): State {
    const obj: any = query.parse(state);
    return {
        displayLimit: 100,
        mapFilter: obj.map ? obj.map.split(".").map((x: string) => ({ value: x, label: x })) : null,
        playerFilter: obj.players ? obj.players.split(".").map((x: string) => ({ value: +x, label: idToName.get(+x) })) : null,
        winnerFilter: obj.winner ? { value: +obj.winner, label: idToName.get(+obj.winner) } : null,
        looserFilter: obj.looser ? { value: +obj.looser, label: idToName.get(+obj.looser) } : null,
        sortColumn: obj.sort || "ID", sortReverse: typeof obj.reverse === "undefined" ? true : !!obj.reverse,
    }
}

function render(stuff: any) {
    (window as any).root = ReactDOM.render(stuff, document.querySelector("#root"));
}
render(<div>Loading json...</div>);
function jsonOrError(resp: Response) {
    if (resp.ok) return resp.json();
    else throw resp.status + " " + resp.statusText;
}

fetch("../data/usernames.json")
    .then(jsonOrError)
    .then((data: UsernameJSON) => {
        users = data;
        for (const {id, name} of users) idToName.set(id, name);
    })
    .then(() => fetch("../data/games.json"))
    .then(jsonOrError)
    .then((data: DataJSON) => render(<GUI data={data} />))
    .catch((e: any) => { console.error(e); render(<div class="alert alert-danger">{e.toString() }</div>) });
