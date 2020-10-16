import axios from "axios"
import { HOST_URL } from "../shared/constant"

export const loginCheck = async (input) => {
    return await axios.post(`${HOST_URL}/auth/login`, input)
}


export const login = async (credential) => {
    var data = await axios.post(`${HOST_URL}/auth/login`, credential).then(resp => {
        return resp.data;
    }).catch(e => {
        return e
    })
    console.log('data =>', data);
    return data;
}
