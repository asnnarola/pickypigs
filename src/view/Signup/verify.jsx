import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { HOST_URL } from '../../shared/constant';

function Verify(props) {
    console.log('props => ', props);
    useEffect(() => {
        axios.post(`${HOST_URL}/auth/verification`, { token: props.match.params.token }).then((res) => {
            console.log('Hi in verify res', res)
            if (res.data.isVerified) {
                alert("You are verified")
            }
        }).catch(err => console.log('err =>', err))
    }, [])
    return (
        <div>
            <h1>Verification !</h1>
            <Link to="/">Go to Home page.</Link>
        </div>
    )
}

export default Verify
