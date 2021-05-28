import { Authorize } from "../_helpers/interfaces";

export const authenticationSvc = {
    authorize,
    clear
}

function authorize(credentials: Authorize): Promise<Response> {
    let status;
    return fetch(`http://${process.env.REACT_APP_AUTH}/authorize`, {
        method: "POST",
        body: JSON.stringify(credentials)
    })
    .then(response => {
        status = response.status;
        return response.json()
    })
    .then((response) => {
        switch (status) {
            case 200: 
                response.status = 200;
                if (response.access_token !== null)
                    sessionStorage.setItem('access_token', response.access_token);
                if (response.refresh_token !== null)
                    sessionStorage.setItem('refresh_token', response.refresh_token);
            break;
            default: ;
        }
        return response;
    })
}

function clear() {
    sessionStorage.setItem('access_token', '');
    sessionStorage.setItem('refresh_token', '');
}