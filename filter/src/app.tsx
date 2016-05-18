import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Select from 'react-select';
import query from 'query-string';
import * as Reactable from "reactable";

var Table = Reactable.Table,
    Tr = Reactable.Tr,
    Td = Reactable.Td,
    Thead = Reactable.Thead,
    Th = Reactable.Th;

interface DataJSON {
    [id: string]: GameJSON
}
interface GameJSON {
    date: string,
    map: string,
    mapSize: string,
    rounds: number,
    ranking: [number, number],
    resources: [number, number]
}
type UsernameJSON = { id: number, name: string }[];

let users: UsernameJSON;
let idToName = new Map<number, string>(), nameToId = new Map<string, number>();

class GameRender {
    static get(data: GameJSON, id: number) {
        
        const hrefs = data.ranking.map(id => <a href={`https://codeit.itdhosting.de:1337/profile.php?id=${id}`}>{idToName.get(id) }</a>);
        return <Tr key={id}>
            <Td column="ID">{id}</Td>
            <Td column="Date">{data.date}</Td>
            <Td column="Map">{data.map}</Td>
            <Td column="Map Size">{data.mapSize}</Td>
            <Td column="Winner">{hrefs[0]}</Td>
            <Td column="WinnerRes">{data.resources[0]}</Td>
            <Td column="Looser">{hrefs[1]}</Td>
            <Td column="LooserRes">{data.resources[1]}</Td>
            <Td column="Replay"><a href={`https://codeit.itdhosting.de:1337/replay.php?game=${id}`}>Show Replay</a></Td>
        </Tr>;
    }
}

function getUnique(data: DataJSON, attribute: string) {
    return [...new Set<string>(Object.keys(data).map(k => data[k]).map(game => (game as any)[attribute]))];
}

let defaultState = { displayLimit: 200, mapFilter: [] as ReactSelect.Option[], playerFilter: [] as ReactSelect.Option[], winnerFilter: null as ReactSelect.Option, looserFilter: null as ReactSelect.Option };
class GUI extends React.Component<{ data: DataJSON }, typeof defaultState> {
    maps: ReactSelect.Option[];
    players: ReactSelect.Option[];
    ids: number[];
    constructor(props: { data: DataJSON }) {
        super(props);
        const data = props.data;
        this.maps = getUnique(data, "map").map(map => ({ value: map, label: map }));
        this.players = users.map(user => ({ value: user.id, label: user.name }));
        this.state = defaultState;
        this.ids = Object.keys(data).map(x => +x).sort((a, b) => b - a);
    }
    componentWillUpdate(props: any, newState: typeof defaultState) {
        if (this.state.displayLimit == newState.displayLimit) newState.displayLimit = defaultState.displayLimit;
    }
    render() {
        const data = this.props.data;
        const {mapFilter, playerFilter, winnerFilter, looserFilter, displayLimit} = this.state;
        let ids: number[] = [];
        for (const id of this.ids) {
            const game = data[id];
            if ((!mapFilter || mapFilter.length == 0 || mapFilter.some(selectedMap => game.map === selectedMap.value))
                && (!playerFilter || playerFilter.length == 0 || playerFilter.every(player => game.ranking.indexOf(+player.value) >= 0))
                && (!winnerFilter || game.ranking[0] === winnerFilter.value)
                && (!looserFilter || game.ranking[1] === looserFilter.value)
            ) {
                ids.push(id);
            }
        }
        
        length = ids.length;

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
            <div className="alert alert-info">Found {length} games</div>

            <Table className="table" id="table" itemsPerPage={40} pageButtonLimit={10} sortable={true}>
                <Thead>
                    <Th column="ID">ID</Th>
                    <Th column="Date">Date</Th>
                    <Th column="Map">Map</Th>
                    <Th column="Map Size">Map Size</Th>
                    <Th column="Winner">Winner</Th>
                    <Th column="WinnerRes">Winner Resources</Th>
                    <Th column="Looser">Looser</Th>
                    <Th column="LooserRes">Looser Resources</Th>
                    <Th column="Replay">Replay</Th>
                </Thead>
                {ids.map(id => GameRender.get(data[id], id)) }
            </Table>,
        </div>;
    }
    componentDidUpdate() {
        history.replaceState(null, null, "?" + serializeState(this.state));
    }
}

function serializeState(state: typeof defaultState) {
    const obj: any = {
        map: state.mapFilter && state.mapFilter.map(x => x.value).join("."),
        players: state.playerFilter && state.playerFilter.map(x => x.value).join("."),
        winner: state.winnerFilter && state.winnerFilter.value,
        looser: state.looserFilter && state.looserFilter.value
    };
    for (const x in obj) if (!obj[x]) delete obj[x];
    console.log(obj);
    return query.stringify(obj);
}
function deserializeState(state: string): typeof defaultState {
    const obj: any = query.parse(state);
    return {
        displayLimit: 200,
        mapFilter: obj.map ? obj.map.split(".").map((x: string) => ({ value: x, label: x })) : null,
        playerFilter: obj.players ? obj.players.split(".").map((x: string) => ({ value: +x, label: idToName.get(+x) })) : null,
        winnerFilter: obj.winner ? { value: +obj.winner, label: idToName.get(+obj.winner) } : null,
        looserFilter: obj.looser ? { value: +obj.looser, label: idToName.get(+obj.looser) } : null
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
        for (const {id, name} of data) {
            idToName.set(id, name); nameToId.set(name, id);
        }
    })
    .then(() => defaultState = deserializeState(location.search))
    .then(() => fetch("../data/games.json"))
    .then(jsonOrError)
    .then((data: DataJSON) => render(<GUI data={data} />))
    .catch((e: any) => { console.error(e); render(<div class="alert alert-danger">{e.toString() }</div>) });
