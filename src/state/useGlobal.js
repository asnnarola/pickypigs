import { useEffect, useReducer } from "react";
import jsonwebtoken from "jsonwebtoken"
import { SECRET_KEY } from "../shared/constant";
import { login } from "../services/auth";

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
    }

    const checkLogin = (input) => {
        setState({ loader: true })
        return login(input).then(resp => {
            setState({ ...state, isLoggedIn: true, isLoader: false, token: resp.data.token })
        }).catch(e => {
            setState({ ...state, isLoggedIn: false, isLoader: false })
            return e
        })
    }



    const getUser = () => {
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
