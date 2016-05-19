System.register(['react', 'react-dom', 'react-select', 'query-string'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, ReactDOM, react_select_1, query_string_1;
    var users, idToName, GUI;
    function renderTableRow(data, id) {
        const hrefs = data.ranking.map(id => React.createElement("a", {href: `https://codeit.itdhosting.de:1337/profile.php?id=${id}`}, idToName.get(id)));
        return React.createElement("tr", {key: id}, [id, data.date, data.map, data.mapSize, hrefs[0], data.resources[0], hrefs[1], data.resources[1],
            React.createElement("a", {href: `https://codeit.itdhosting.de:1337/replay.php?game=${id}`}, "Show Replay")
        ].map(x => React.createElement("td", null, x)));
    }
    function serializeState(state) {
        const obj = {
            map: state.mapFilter && state.mapFilter.map(x => x.value).join("."),
            players: state.playerFilter && state.playerFilter.map(x => x.value).join("."),
            winner: state.winnerFilter && state.winnerFilter.value,
            looser: state.looserFilter && state.looserFilter.value,
            sort: state.sortColumn, reverse: state.sortReverse
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
            displayLimit: 100,
            mapFilter: obj.map ? obj.map.split(".").map((x) => ({ value: x, label: x })) : null,
            playerFilter: obj.players ? obj.players.split(".").map((x) => ({ value: +x, label: idToName.get(+x) })) : null,
            winnerFilter: obj.winner ? { value: +obj.winner, label: idToName.get(+obj.winner) } : null,
            looserFilter: obj.looser ? { value: +obj.looser, label: idToName.get(+obj.looser) } : null,
            sortColumn: obj.sort || "ID", sortReverse: typeof obj.reverse === "undefined" ? true : !!obj.reverse,
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
            }],
        execute: function() {
            idToName = new Map();
            GUI = class GUI extends React.Component {
                constructor(props) {
                    super(props);
                    const data = props.data;
                    this.maps = [...new Set(Object.keys(data).map(k => data[k]).map(game => game.map))].map(map => ({ value: map, label: map }));
                    this.players = users.map(user => ({ value: user.id, label: user.name }));
                    this.state = deserializeState(location.search);
                    this.ids = Object.keys(data).map(x => +x).sort((a, b) => b - a);
                    const mulSize = (a) => a.mapSize.split("x").reduce((a, b) => +a * +b, 1);
                    const numberCompare = (a, b) => a - b;
                    const localeCompare = (a, b) => a.localeCompare(b);
                    function comparing(extractor, comparator) {
                        return (a1, a2) => comparator(extractor(data[a1]), extractor(data[a2]));
                    }
                    this.sorters = {
                        ID: numberCompare,
                        Date: numberCompare,
                        Map: comparing(x => x.map, localeCompare),
                        "Map Size": comparing(a => a.mapSize.split("x").reduce((a, b) => +a * +b, 1), numberCompare),
                        "Winner": comparing(x => idToName.get(x.ranking[0]), localeCompare),
                        "Winner Resources": comparing(x => x.resources[0], numberCompare),
                        "Looser": comparing(x => idToName.get(x.ranking[1]), localeCompare),
                        "Looser Resources": comparing(x => x.resources[1], numberCompare),
                        "Replay": numberCompare
                    };
                }
                componentWillUpdate(props, newState) {
                    if (this.state.displayLimit == newState.displayLimit)
                        newState.displayLimit = deserializeState("").displayLimit;
                }
                setSort(event, sortColumn) {
                    event.preventDefault();
                    if (this.state.sortColumn == sortColumn)
                        this.setState({ sortReverse: !this.state.sortReverse });
                    else
                        this.setState({ sortColumn });
                }
                render() {
                    const data = this.props.data;
                    const { mapFilter, playerFilter, winnerFilter, looserFilter, displayLimit, sortColumn, sortReverse } = this.state;
                    let ids = [];
                    for (const id of this.ids) {
                        const game = data[id];
                        if ((!mapFilter || mapFilter.length == 0 || mapFilter.some(selectedMap => game.map === selectedMap.value))
                            && (!playerFilter || playerFilter.length == 0 || playerFilter.every(player => game.ranking.indexOf(+player.value) >= 0))
                            && (!winnerFilter || game.ranking[0] === winnerFilter.value)
                            && (!looserFilter || game.ranking[1] === looserFilter.value))
                            ids.push(id);
                    }
                    const count = ids.length;
                    if (this.state.sortColumn) {
                        let sorter = this.sorters[this.state.sortColumn];
                        if (this.state.sortReverse)
                            ids.sort((a, b) => -sorter(a, b));
                        else
                            ids.sort(sorter);
                    }
                    ids = ids.slice(0, displayLimit);
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
                            count, 
                            " games"), 
                        React.createElement("div", {className: "table-responsive"}, 
                            React.createElement("table", {className: "table", data: ids}, 
                                React.createElement("thead", null, 
                                    React.createElement("tr", null, "ID,Date,Map,Map Size,Winner,Winner Resources,Looser,Looser Resources,Replay".split(",").map(name => React.createElement("th", {key: name}, 
                                        React.createElement("a", {href: "#", onClick: e => this.setSort(e, name)}, 
                                            name, 
                                            this.state.sortColumn === name ? this.state.sortReverse ? "▼" : "▲" : "")
                                    )))
                                ), 
                                React.createElement("tbody", null, ids.map(id => renderTableRow(data[id], id))))
                        ), 
                        count > displayLimit ?
                            React.createElement("div", {className: "alert alert-danger"}, 
                                count - displayLimit, 
                                " more not displayed.", 
                                " ", 
                                React.createElement("a", {href: "#", onClick: e => { e.preventDefault(); this.setState({ displayLimit: displayLimit * 2 }); }}, "Show more")) : "");
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
                for (const { id, name } of users)
                    idToName.set(id, name);
            })
                .then(() => fetch("../data/games.json"))
                .then(jsonOrError)
                .then((data) => render(React.createElement(GUI, {data: data})))
                .catch((e) => { console.error(e); render(React.createElement("div", {class: "alert alert-danger"}, e.toString())); });
        }
    }
});
//# sourceMappingURL=app.js.map