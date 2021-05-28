import React from 'react';

import './Logo.scss';

class Logo extends React.Component {

    render() {
        return (
            <div className='logo-container'>
                <div className='logo-wrapper'></div>
                <h1 className='logo'><span className='logo__left'>Mine</span>sweeper</h1>
            </div>
        );
    }
}

export default Logo;