import React from 'react';
import './Navigation.scss';
import Logo from './Logo';
import Stats from './../Stats/Stats';
import './../Sweeper.scss';
import Base from '../Base';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.configs = Base.configs
        this.state = {
            isStatsVisible: false,
            configName: "Beginner" 
        }
    }

    handleClick(event) {
        const config = this.configs[event.target.selectedIndex]
        this.props.onConfigChanged(config);
        this.setState({configName: config.name});
    }

    onLeaderBoardClicked() {
        const visible = !this.state.isStatsVisible;
        this.setState({isStatsVisible: visible});
    }

    render() {
        return (
            <header className='above-all'>
                <Logo />
                <div className='config-select'>
                    <select className='config-select-selection' onChange={(e) => this.handleClick(e)}>
                        {this.configs.map((config, i) => {
                            return <option className='config-select-option' key={i}>{config.name}</option>
                        })}
                    </select>
                    <span className='config-select-arrow'></span>
                    <img className='nav-icon' src='leaderboard.svg' alt='leaderboard' onClick={() => this.onLeaderBoardClicked()}/>
                </div>
                <Stats config={this.state.configName} isVisible={this.state.isStatsVisible}/>
            </header>
        )
    }
}

export default Header;