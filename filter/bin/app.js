System.register(['react', 'react-dom', 'react-select'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, ReactDOM, react_select_1;
    var users, idToName, nameToId, GameRender, defaultState, GUI;
    function getUnique(data, attribute) {
        return [...new Set(Object.keys(data).map(k => data[k]).map(game => game[attribute]))];
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
            }],
        execute: function() {
            idToName = new Map(), nameToId = new Map();
            GameRender = class GameRender extends React.Component {
                render() {
                    const { data, id } = this.props;
                    const hrefs = data.ranking.map(id => React.createElement("a", {href: `https://codeit.itdhosting.de:1337/profile.php?id=${id}`}, idToName.get(id)));
                    return React.createElement("tr", null, 
                        React.createElement("td", null, id), 
                        React.createElement("td", null, data.date), 
                        React.createElement("td", null, data.map), 
                        React.createElement("td", null, data.mapSize), 
                        React.createElement("td", null, data.rounds), 
                        React.createElement("td", null, 
                            hrefs[0], 
                            " (", 
                            data.resources[0], 
                            ") "), 
                        React.createElement("td", null, 
                            hrefs[1], 
                            " (", 
                            data.resources[1], 
                            ") "), 
                        React.createElement("td", null, 
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
                    const length = ids.length;
                    ids = ids.slice(0, displayLimit);
                    return React.createElement("div", null, 
                        React.createElement("div", {className: "row"}, 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("label", null, "Filter map"), 
                                React.createElement(react_select_1.default, {multi: true, value: this.state.mapFilter, options: this.maps, onChange: v => this.setState({ mapFilter: v })})), 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("label", null, "Filter players"), 
                                React.createElement(react_select_1.default, {multi: true, value: this.state.playerFilter, options: this.players, onChange: v => this.setState({ playerFilter: v })})), 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("label", null, "Filter winner"), 
                                React.createElement(react_select_1.default, {value: this.state.winnerFilter, options: playerFilter.length == 2 ? playerFilter : this.players, onChange: v => this.setState({ winnerFilter: v })})), 
                            React.createElement("div", {className: "col-sm-3"}, 
                                React.createElement("label", null, "Filter looser"), 
                                React.createElement(react_select_1.default, {value: this.state.looserFilter, options: playerFilter.length == 2 ? playerFilter : this.players, onChange: v => this.setState({ looserFilter: v })}))), 
                        React.createElement("hr", null), 
                        React.createElement("div", {className: "alert alert-info"}, 
                            "Found ", 
                            length, 
                            " games"), 
                        React.createElement("table", {className: "table table-responsive"}, 
                            React.createElement("thead", null, 
                                React.createElement("tr", null, 
                                    React.createElement("th", null, "ID"), 
                                    React.createElement("th", null, "Date"), 
                                    React.createElement("th", null, "Map"), 
                                    React.createElement("th", null, "Map Size"), 
                                    React.createElement("th", null, "Rounds"), 
                                    React.createElement("th", null, "Winner (Resources) "), 
                                    React.createElement("th", null, "Looser (Resources) "), 
                                    React.createElement("th", null, "Replay"))
                            ), 
                            React.createElement("tbody", null, ids.map(id => React.createElement(GameRender, {key: id, id: +id, data: data[id]})))), 
                        length > displayLimit ?
                            React.createElement("div", {className: "alert alert-danger"}, 
                                length - displayLimit, 
                                " more not displayed.", 
                                " ", 
                                React.createElement("a", {href: "#", onClick: e => { e.preventDefault(); this.setState({ displayLimit: displayLimit * 2 }); }}, "Show more")) : "");
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
            }).then(() => fetch("../data/games.json"))
                .then(jsonOrError)
                .then((data) => render(React.createElement(GUI, {data: data})))
                .catch((e) => render(React.createElement("div", {class: "alert alert-danger"}, e.toString())));
        }
    }
});
//# sourceMappingURL=app.js.map