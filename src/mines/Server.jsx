import * as State from './State/State';
import { getHeader, postHeader } from './../_helpers/authHeader';

export function fetchGames(config, callback) {
    fetch(`http://${process.env.REACT_APP_URL}/games?config=${config}`, {
            headers: getHeader()
        })
        .then(response => response.json())
        .then(data => {
            callback(data);
        });
}

class Server {
    fetchBoard(config, callback) {
        fetch(`http://${process.env.REACT_APP_URL}/game/new?rows=${config.row}&columns=${config.col}&mines=${config.mines}`, {
            headers: getHeader()
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
            headers: postHeader()
        }).then(res => {
            console.log("Request complete! response:", res);
        });
    }
}

export default Server;