import React from 'react';
import { Redirect } from 'react-router-dom';
import './Signout.scss';
import { authenticationSvc } from '../_services/authenticationSvc';

interface State {
    signedOut: boolean;
}

interface Props {

}

class Signout extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            signedOut: false
        }
    }

    render() {
        if (this.state.signedOut) {
            return <Redirect to='/' />
        }
        return (
            <div className='sign-out-btn' onClick={() => this.signOut()}>
                <p>Logout</p>
            </div>
        );
    }

    signOut(): void {
        this.setState({signedOut: true})
        authenticationSvc.clear()
    }
}

export default Signout;