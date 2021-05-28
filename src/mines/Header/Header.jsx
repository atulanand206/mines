import React from 'react';
import './Navigation.scss';
import './Dropdown.scss';
import Logo from './Logo';
import Signout from './../../signout/Signout';
import Stats from './../Stats/Stats';
import './../Sweeper.scss';
import Base from '../Base';
import { Checkbox } from '@material-ui/core';
import classNames from 'classnames';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.configs = Base.configs
        this.state = {
            isMenuVisible: false,
            isStatsVisible: false,
            configName: "Beginner" 
        }
    }

    change(event, type) {
        if (type === 'toggle') {
            this.setState({isMenuVisible: event.target.checked})
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
                <div className='nav-slider-background'>
                    <div className={classNames('nav-slider-bkground',
                        !this.state.isMenuVisible && 'nav-slider-bkground__hidden',
                        this.state.isMenuVisible && 'nav-slider-bkground__visible')}>
                    </div>
                    <div className={classNames('nav-slider-content',
                        !this.state.isMenuVisible && 'nav-slider-content__hidden',
                        this.state.isMenuVisible && 'nav-slider-content__visible')}>
                        <div className='config-select'>
                            <select className='config-select-selection' onChange={(e) => this.handleClick(e)}>
                                {this.configs.map((config, i) => {
                                    return <option className='config-select-option' key={i}>{config.name}</option>
                                })}
                            </select>
                            <span className='config-select-arrow'></span>
                        </div>
                        <div className='nav-icon'>
                        <img src='leaderboard.svg' alt='leaderboard' onClick={() => this.onLeaderBoardClicked()}/>
                        <Stats config={this.state.configName} isVisible={this.state.isStatsVisible}/>
                        </div>
                        <Signout />
                    </div>
                    <input class='nav-slider-toggle' type="checkbox" id="toggle" name="toggle" value="toggle" onChange={(e) => this.change(e, 'toggle')}/>
                </div>
            </header>
        )
    }
}

export default Header;