import { Authorize, CreateUser } from "../_helpers/interfaces";
import { postNoAuthHeader } from './../_helpers/authHeader';

const authorize = async (credentials: Authorize): Promise<Response> => {
    let status: number;
    const response = await fetch(`http://${process.env.REACT_APP_AUTH}/authorize`, {
        method: "POST",
        body: JSON.stringify(credentials)
    });
    status = response.status;
    const response_1 = await response.json();
    switch (status) {
        case 200:
            response_1.status = 200;
            if (response_1.access_token !== null)
                sessionStorage.setItem('access_token', response_1.access_token);
            if (response_1.refresh_token !== null)
                sessionStorage.setItem('refresh_token', response_1.refresh_token);
            break;
        default: ;
    }
    return response_1;
}

const clear = () => {
    sessionStorage.setItem('access_token', '');
    sessionStorage.setItem('refresh_token', '');
}

const createUser = async (credentials: CreateUser): Promise<Response> => {
    const response = await fetch(`http://${process.env.REACT_APP_AUTH}/user`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: postNoAuthHeader()
    })
    const status = response.status
    switch (status) {
        case 200:
            const response_1 = await response.json()
            response_1.status = 200
            return response_1
        case 409:
            const response_2 = await response.json()
            response_2.status = 409
            return response_2
        default: 
    }
    return response
}

export const authenticationSvc = {
    authorize,
    createUser,
    clear
}