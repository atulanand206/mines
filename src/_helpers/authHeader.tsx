const Bearer = "Bearer "

export function authHeader() {
    return {Authorization: Bearer + sessionStorage.getItem('access_token')};
}