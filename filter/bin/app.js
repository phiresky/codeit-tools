System.register(['react', 'react-dom', 'react-select', 'query-string', "reactable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, ReactDOM, react_select_1, query_string_1, Reactable;
    var Table, Tr, Td, Thead, Th, users, idToName, nameToId, GameRender, defaultState, GUI;
    function getUnique(data, attribute) {
        return [...new Set(Object.keys(data).map(k => data[k]).map(game => game[attribute]))];
    }
    function serializeState(state) {
        const obj = {
            map: state.mapFilter && state.mapFilter.map(x => x.value).join("."),
            players: state.playerFilter && state.playerFilter.map(x => x.value).join("."),
            winner: state.winnerFilter && state.winnerFilter.value,
            looser: state.looserFilter && state.looserFilter.value
        };
        for (const x in obj)
            if (!obj[x])
                delete obj[x];
        console.log(obj);
        return query_string_1.default.stringify(obj);
    }
    function deserializeState(state) {
        const obj = query_string_1.default.parse(state);
        return {
            displayLimit: 200,
            mapFilter: obj.map ? obj.map.split(".").map((x) => ({ value: x, label: x })) : null,
            playerFilter: obj.players ? obj.players.split(".").map((x) => ({ value: +x, label: idToName.get(+x) })) : null,
            winnerFilter: obj.winner ? { value: +obj.winner, label: idToName.get(+obj.winner) } : null,
            looserFilter: obj.looser ? { value: +obj.looser, label: idToName.get(+obj.looser) } : null
        };
    }
    function render(stuff) {
        window.root = ReactDOM.render(stuff, document.querySelector("#root"));
    }
    function jsonOrError(resp) {
        if (resp.ok)
            return resp.json();
        else
            throw resp.status + " " + resp.statusText;
    }
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (react_select_1_1) {
                react_select_1 = react_select_1_1;
            },
            function (query_string_1_1) {
                query_string_1 = query_string_1_1;
            },
            function (Reactable_1) {
                Reactable = Reactable_1;
            }],
        execute: function() {
            Table = Reactable.Table, Tr = Reactable.Tr, Td = Reactable.Td, Thead = Reactable.Thead, Th = Reactable.Th;
            idToName = new Map(), nameToId = new Map();
            GameRender = class GameRender {
                static get(data, id) {
                    const hrefs = data.ranking.map(id => React.createElement("a", {href: `https://codeit.itdhosting.de:1337/profile.php?id=${id}`}, idToName.get(id)));
                    return React.createElement(Tr, {key: id}, 
                        React.createElement(Td, {column: "ID"}, id), 
                        React.createElement(Td, {column: "Date"}, data.date), 
                        React.createElement(Td, {column: "Map"}, data.map), 
                        React.createElement(Td, {column: "Map Size"}, data.mapSize), 
                        React.createElement(Td, {column: "Winner"}, hrefs[0]), 
                        React.createElement(Td, {column: "WinnerRes"}, data.resources[0]), 
                        React.createElement(Td, {column: "Looser"}, hrefs[1]), 
                        React.createElement(Td, {column: "LooserRes"}, data.resources[1]), 
                        React.createElement(Td, {column: "Replay"}, 
                            React.createElement("a", {href: `https://codeit.itdhosting.de:1337/replay.php?game=${id}`}, "Show Replay")
                        ));
                }
            };
            defaultState = { displayLimit: 200, mapFilter: [], playerFilter: [], winnerFilter: null, looserFilter: null };
            GUI = class GUI extends React.Component {
                constructor(props) {
                    super(props);
                    const data = props.data;
                    this.maps = getUnique(data, "map").map(map => ({ value: map, label: map }));
                    this.players = users.map(user => ({ value: user.id, label: user.name }));
                    this.state = defaultState;
                    this.ids = Object.keys(data).map(x => +x).sort((a, b) => b - a);
                }
                componentWillUpdate(props, newState) {
                    if (this.state.displayLimit == newState.displayLimit)
                        newState.displayLimit = defaultState.displayLimit;
                }
                render() {
                    const data = this.props.data;
                    const { mapFilter, playerFilter, winnerFilter, looserFilter, displayLimit } = this.state;
                    let ids = [];
                    for (const id of this.ids) {
                        const game = data[id];
                        if ((!mapFilter || mapFilter.length == 0 || mapFilter.some(selectedMap => game.map === selectedMap.value))
                            && (!playerFilter || playerFilter.length == 0 || playerFilter.every(player => game.ranking.indexOf(+player.value) >= 0))
                            && (!winnerFilter || game.ranking[0] === winnerFilter.value)
                            && (!looserFilter || game.ranking[1] === looserFilter.value)) {
                            ids.push(id);
                        }
                    }
                    length = ids.length;
                    return React.createElement("div", null, 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("label", null, "Filter map"), 
                                React.createElement(react_select_1.default, {multi: true, value: mapFilter, options: this.maps, onChange: v => this.setState({ mapFilter: v })})), 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("label", null, "Filter players"), 
                                React.createElement(react_select_1.default, {multi: true, value: playerFilter, options: this.players, onChange: v => this.setState({ playerFilter: v })})), 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("label", null, "Filter winner"), 
                                React.createElement(react_select_1.default, {value: winnerFilter, options: playerFilter && playerFilter.length == 2 ? playerFilter : this.players, onChange: v => this.setState({ winnerFilter: v })})), 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("label", null, "Filter looser"), 
                                React.createElement(react_select_1.default, {value: looserFilter, options: playerFilter && playerFilter.length == 2 ? playerFilter : this.players, onChange: v => this.setState({ looserFilter: v })}))), 
                        React.createElement("hr", null), 
                        React.createElement("div", {className: "alert alert-info"}, 
                            "Found ", 
                            length, 
                            " games"), 
                        React.createElement(Table, {className: "table", id: "table", itemsPerPage: 40, pageButtonLimit: 10, sortable: true}, 
                            React.createElement(Thead, null, 
                                React.createElement(Th, {column: "ID"}, "ID"), 
                                React.createElement(Th, {column: "Date"}, "Date"), 
                                React.createElement(Th, {column: "Map"}, "Map"), 
                                React.createElement(Th, {column: "Map Size"}, "Map Size"), 
                                React.createElement(Th, {column: "Winner"}, "Winner"), 
                                React.createElement(Th, {column: "WinnerRes"}, "Winner Resources"), 
                                React.createElement(Th, {column: "Looser"}, "Looser"), 
                                React.createElement(Th, {column: "LooserRes"}, "Looser Resources"), 
                                React.createElement(Th, {column: "Replay"}, "Replay")), 
                            ids.map(id => GameRender.get(data[id], id))), 
                        ",");
                }
                componentDidUpdate() {
                    history.replaceState(null, null, "?" + serializeState(this.state));
                }
            };
            render(React.createElement("div", null, "Loading json..."));
            fetch("../data/usernames.json")
                .then(jsonOrError)
                .then((data) => {
                users = data;
                for (const { id, name } of data) {
                    idToName.set(id, name);
                    nameToId.set(name, id);
                }
            })
                .then(() => defaultState = deserializeState(location.search))
                .then(() => fetch("../data/games.json"))
                .then(jsonOrError)
                .then((data) => render(React.createElement(GUI, {data: data})))
                .catch((e) => { console.error(e); render(React.createElement("div", {class: "alert alert-danger"}, e.toString())); });
        }
    }
});
//# sourceMappingURL=app.js.map