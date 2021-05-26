import React from 'react';
import { fetchGames } from './../Server';
import { DateRange } from './../Calculation/TimeRange';
import './Stats.scss';
import _ from 'lodash';

interface Player {
    name: string
    rating: number
}
interface Game {
    score: number
    times: DateRange[]
    player: Player
}

interface State {
    users: Player[]
    loaded: boolean
}

interface Props {
    config: string
    isVisible: boolean
}

let scheduler: NodeJS.Timeout;

class Stats extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            users: [],
            loaded: false
        };
    }

    componentDidMount() {
        this.fetchStats(this.props.config)
        // scheduler = setInterval(() => this.fetchStats(this.props.config), 10000);
    }

    componentWillUnmount() {
        clearInterval(scheduler);
    }

    fetchStats(config: string) {
        fetchGames(config, (res: Player[]) => {
            if (!_.isEmpty(res)) {
                this.setState({users: res, loaded: true});
            }
        });
    }

    render() {
        return (
            <div className={this.props.isVisible && this.state.loaded ? 'stats-container' : 'hidden'}>
                <h4>Leaderboard</h4>
                <div key={-1} className='game-container'>
                    <p>Rank</p>
                    <p>Name</p>
                    <p>Rating</p>
                </div>
                {this.state.users.map((user, i) => {
                    return (
                        <div key={i} className='game-container'>
                            <p>{i+1}</p>
                            <p>{user.name}</p>
                            <p>{user.rating}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Stats;