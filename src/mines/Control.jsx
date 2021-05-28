import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
class Control extends React.Component {

    render() {
        return (
            <div className='control-container'>
                {!this.props.gameActive && !this.props.finished &&
                    <img src='play.svg' alt='Play Game' className='icon-container' onClick={() => this.props.play()}/>
                }
                {this.props.gameActive && !this.props.finished && 
                    <img src='pause.svg' alt='Pause Game' className='icon-container' onClick={() => this.props.pause()}/>
                }
                {this.props.finished && 
                    <FontAwesomeIcon icon={faUndo} className='icon-container' color='#fff' onClick={() => this.props.reset()} />
                }
            </div>
        )
    }
}

export default Control;