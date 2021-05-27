import * as State from './State/State';

const Bearer = "Bearer "

export async function login(credentials) {
    var response = await fetch(`http://${process.env.REACT_APP_AUTH}/authorize`, {
        method: "POST",
        body: JSON.stringify(credentials)
    })
    console.log(response.status)
    switch (response.status) {
        case 200: response = response.json(); break;
        case 500: response = {status: response.status, body: "Request failed"}; break;
        default: ;
    }
    console.log(response)
    const json = response;
    console.log(json);
    if (json.access_token !== null)
        sessionStorage.setItem('access_token', json.access_token);
    if (json.refresh_token !== null)
        sessionStorage.setItem('refresh_token', json.refresh_token);
    return json;
}

export function fetchGames(config, callback) {
    fetch(`http://${process.env.REACT_APP_URL}/games?config=${config}`, {
            headers: {Authorization: Bearer + sessionStorage.getItem('access_token')}
        })
        .then(response => response.json())
        .then(data => {
            callback(data);
        });
}

class Server {
    fetchBoard(config, callback) {
        fetch(`http://${process.env.REACT_APP_URL}/game/new?rows=${config.row}&columns=${config.col}&mines=${config.mines}`, {
            headers: {Authorization: Bearer + sessionStorage.getItem('access_token')}
        })
        .then(response => response.json())
        .then(data => {
            callback(data.map(row => row.map(item => { return {disabled: false, value: item, state: State.HIDDEN } } )));
        });
    }

    saveGame(game) {
        fetch(`http://${process.env.REACT_APP_URL}/game/save`, {
            method: "POST", 
            body: JSON.stringify(game),
            headers: {Authorization: Bearer + sessionStorage.getItem('access_token')}
        }).then(res => {
            console.log("Request complete! response:", res);
        });
    }
}

export default Server;