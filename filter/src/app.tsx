import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Select from 'react-select';

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

class GameRender extends React.Component<{ data: GameJSON, id: number }, {}> {
    render() {
        const {data, id} = this.props;
        const hrefs = data.ranking.map(id => <a href={`https://codeit.itdhosting.de:1337/profile.php?id=${id}`}>{idToName.get(id) }</a>);
        return <tr>
            <td>{id}</td>
            <td>{data.date}</td>
            <td>{data.map}</td>
            <td>{data.mapSize}</td>
            <td>{data.rounds}</td>
            <td>{hrefs[0]} ({data.resources[0]}) </td>
            <td>{hrefs[1]} ({data.resources[1]}) </td>
            <td><a href={`https://codeit.itdhosting.de:1337/replay.php?game=${id}`}>Show Replay</a></td>
        </tr>;
    }
}
function getUnique(data: DataJSON, attribute: string) {
    return [...new Set<string>(Object.keys(data).map(k => data[k]).map(game => (game as any)[attribute]))];
}
const defaultState = { displayLimit: 200, mapFilter: [] as ReactSelect.Option[], playerFilter: [] as ReactSelect.Option[], winnerFilter: null as ReactSelect.Option, looserFilter: null as ReactSelect.Option };
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
        const length = ids.length;
        ids = ids.slice(0, displayLimit);
        return <div>
            <div className="row">
                <div className="col-sm-3">
                    <label>Filter map</label>
                    <Select multi={true} value={this.state.mapFilter} options={this.maps} onChange={v => this.setState({ mapFilter: v }) }/>
                </div>
                <div className="col-sm-3">
                    <label>Filter players</label>
                    <Select multi={true} value={this.state.playerFilter} options={this.players} onChange={v => this.setState({ playerFilter: v }) } />
                </div>
                <div className="col-sm-3">
                    <label>Filter winner</label>
                    <Select value={this.state.winnerFilter} options={playerFilter.length == 2 ? playerFilter : this.players} onChange={v => this.setState({ winnerFilter: v }) } />
                </div>
                <div className="col-sm-3">
                    <label>Filter looser</label>
                    <Select value={this.state.looserFilter} options={playerFilter.length == 2 ? playerFilter : this.players} onChange={v => this.setState({ looserFilter: v }) } />
                </div>
            </div>
            <hr/>
            <div className="alert alert-info">Found {length} games</div>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Map</th>
                        <th>Map Size</th>
                        <th>Rounds</th>
                        <th>Winner (Resources) </th>
                        <th>Looser (Resources) </th>
                        <th>Replay</th>
                    </tr>
                </thead>
                <tbody>
                    {ids.map(id =>
                        <GameRender key={id} id={+id} data={data[id]} />
                    ) }
                </tbody>
            </table>
            {length > displayLimit ?
                <div className="alert alert-danger">{length - displayLimit} more not displayed.{" "}
                    <a href="#" onClick={e => { e.preventDefault(); this.setState({ displayLimit: displayLimit * 2 }) } }>Show more</a>
                </div> : ""}
        </div>;
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
    }).then(() => fetch("../data/games.json"))
    .then(jsonOrError)
    .then((data: DataJSON) => render(<GUI data={data} />))
    .catch((e: any) => render(<div class="alert alert-danger">{e.toString() }</div>));
