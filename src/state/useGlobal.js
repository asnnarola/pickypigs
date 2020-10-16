import { useEffect, useReducer } from "react";
import jsonwebtoken from "jsonwebtoken"
import { HOST_URL, SECRET_KEY } from "../shared/constant";
import { login } from "../services/auth";
import Axios from "axios";

function reducer(state, action) {
    return { ...state, ...action };
}

const initialArgs = {
    token: null,
    user: null,
    error: null
};

const useGlobal = (appState) => {
    const [state, setState] = useReducer(reducer, initialArgs);


    useEffect(() => {
        let token = localStorage.getItem("token")
        setState({ token: token })
    }, [])

    const setLogin = (data) => {
        setState({ token: data })
        console.log('data => ',data);

        localStorage.setItem("token", data)
    }

    const checkLogin = (input) => {
        setState({ loader: true })

        return login(input).then(resp => {
            console.log('resp => ',resp);
            localStorage.setItem('token', resp.data.token)
            setState({ ...state, isLoggedIn: true, isLoader: false, token: resp.data.token })
        }).catch(e => {
            setState({ ...state, isLoggedIn: false, isLoader: false })
            return e
        })
    }



    const getUser = () => {
        //    let token = localStorage.getItem("token")
        try {
            return jsonwebtoken.verify(state.token, SECRET_KEY)
        } catch (error) {
            return false
        }
    }

    return {
        setLogin,
        getUser,
        checkLogin,
        ...state,
    };
};

export default useGlobal;
