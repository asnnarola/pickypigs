import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { FACEBOOK_APP_ID, GOOGLE_CLIENT_ID, HOST_URL } from '../../shared/constant';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from "react-facebook-login";
import useAppState from '../../context/useAppState';
import showpassword from "../../assets/images/eye_icon.svg";
import closeicon from "../../assets/images/close.svg";
import { Modal } from 'react-bootstrap';
import "./Signup.scss"
import { useDispatch,useSelector} from 'react-redux';
import { facebookLogin, googleLogin,registerUser } from '../../redux/actions/generalActions';
import SocialButton from '../../components/SocialButton';
import CustomLoadingComp from '../../components/CustomLoadingComp/CustomLoadingComp';
import Tick from '../../assets/images/check.svg' 

const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);
const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name Required'),
    email: Yup.string().email('Email must be a valid email').required('Email Required'),
    password: Yup
    .string()
    .label('Password')
    .required('Password Required')
    .min(8, 'Seems a bit short(Min 8 characters)...')
    .max(24, 'Please try a shorter password(Max 24 characters)...).')
    .matches(passwordRegExp, 'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special characte'),  
    phone: Yup.string().required("Phone Number is required").matches(phoneRegex, "Invalid Phone Number").min(10, "to short").max(10, "Not More Than 10 "),
    confirmPassword: Yup
        .string().required('Confirm password Required').label('Confirm password')
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value;
        }),
});


const Signup = (props) => {
    const dispatch=useDispatch();
    const history=useHistory();
    const { setLogin } = useAppState("useGlobal")
    const [type, setType] = useState("password")
    const [confirmType, setConfirmType] = useState("password")

    const [error, setError] = useState(false)
 


    
    const handleForm = (input ,{ setStatus,resetForm}) => {
        let obj = {
            email: input.email,
            name: input.name,
            phone: input.phone,
            password: input.password,
            confirmPassword: input.confirmPassword,
            role:"user"
        }
        dispatch(registerUser(obj,history))
    }
   
    const handleSocialLogin = (user) => {
        if (user._provider === "facebook") {
            let obj = {
                email: user._profile.email,
                facebookId: user._profile.id,
                name: user._profile.name,
                // token: user._token.accessToken,
            }
            dispatch(facebookLogin(obj,history,props.show,"signUp"))
        }
        if (user._provider === "google") {
            // console.log(user);
            let obj = {
                email: user._profile.email,
                googleId: user._profile.id,
                name: user._profile.name,
                // token: user._token.accessToken,
            }
            dispatch(googleLogin(obj,history,props.show,"signUp"))
        }
       
      };
      const handleSocialLoginFailure = (err) => {
        console.error(err);
      };


    const googleResponse = response => {
        axios.post(`${HOST_URL}/auth/google`, response.profileObj).then(res => {
            setLogin(res.data.token)
            props.onHide()
        }).catch(err => console.log('err => ', err.response))
    }

    const facebookResponse = async response => {
        axios.post(`${HOST_URL}/auth/facebook`, response).then(res => {
            setLogin(res.data.token)
            props.onHide()
        }).catch(err => console.log('err => ', err.response))
    }

    const onFailure = error => {
        console.log("error login", error)
        // alert(error)
    }
    const handlePassword = () => {
        let ele = document.getElementById("password")
        if (type === "password") {
            ele.classList.add("show")
            setType("text")
        } else {
            ele.classList.remove("show")
            setType("password")
        }
    }

    const handleConfirmPassword=()=>{
        if (confirmType === "password") {
            setConfirmType("text")
        } else {
            setConfirmType("password")
        }
    }
    let loading = useSelector((state)=>{
        return state.general.isLoading
    });
    
    
    return (
        
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-left">
                <div className="hello-msg">
                    <h1 className="text-uppercase text-white brandon-Bold">Hello<br />Fuzz</h1>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-right">
                <div className="row">
                    <div className="col-sm-12">
                        <button className="btn modalclose-icon" onClick={()=>{props.onHide()} }>
                            <img src={closeicon} alt="signup modal close icon" className="img-fluid" />
                        </button>
                    </div>
                </div>
              
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                            <h3 className="brandon-Bold">Sign up</h3>
                            <p className="f-15"><span className="pr-2">Have an account?</span>
                                <button className="pink-txt brandon-Medium trans_button" onClick={()=>{props.gotoLogin()}} >Sign In</button>
                            </p>
                        </div>
                    </div>
              
                    <Formik
                        initialValues={{ name: '', email: '', password: '',phone:'', confirmPassword: '' }}
                        validationSchema={validationSchema}  onSubmit={handleForm}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <Field name="name" className="form-control signup-input" placeholder="Name or Full name" />
                                                {touched.name && errors.name && <div className="error pink-txt f-11">{errors.name}</div>}
                                            </div>
                                            <div className="form-group">
                                                <Field name="email" placeholder="Email" className="form-control signup-input" />
                                                {/* {touched.email && errors.email &&
                                                <div className="error pink-txt f-11">{errors.email}</div>} */}
                                                <div className="error pink-txt f-11">{(touched.email && errors.email && errors.email)}</div>
                                            </div>
                                            <div className="form-group">
                                                <Field name="phone" placeholder="Phone" className="form-control signup-input" />
                                                {touched.phone && errors.phone && <div className="error pink-txt f-11">{errors.phone}</div>}
                                            </div>
                                            <div className="form-group position-relative">
                                                <Field type={type} name="password" placeholder="Password" className="form-control signup-input"
                                                />
                                                <div className="showpassword-block" id="password" onClick={() => handlePassword()}>
                                                    <img src={showpassword} className="img-fluid" />
                                                </div>
                                                {touched.password && errors.password && <div className="error pink-txt f-11">{errors.password}</div>}
                                            </div>
                                            {/* <div className="form-group">
                                                <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control signup-input" />
                                                {touched.confirmPassword && errors.confirmPassword && <div className="error pink-txt f-11">{errors.confirmPassword}</div>}
                                            </div> */}
                                            <div className="form-group position-relative">
                                                <Field type={confirmType} name="confirmPassword" placeholder="Confirm new password" className="form-control signup-input"
                                                />
                                                <div className={`showpassword-block ${confirmType=== "password"?null:"show"}`} id="confirmPassword" onClick={handleConfirmPassword}>
                                                    <img src={showpassword} className="img-fluid" alt="showpassword" />
                                                </div>
                                                <div className="error pink-txt f-11">{(touched.confirmPassword && errors.confirmPassword && errors.confirmPassword) || error}</div>
                                            </div>
                                            
                                            <div className="form-group">
                                                <button className="pinkline-btn signup-btn btn mt-4 w-100 text-uppercase border-radius-25" type="submit" >
                                                    Sign up
                                                </button>
                                                <React.Fragment>
                                                    {loading?
                                                        <CustomLoadingComp/>
                                                    :
                                                        null
                                                    }
                                                </React.Fragment>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                    </Formik>
                  
                    <React.Fragment>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group mt-2 pt-2">
                                    <div className="border-separate">
                                    </div>
                                </div>
                                <div className="or-txt f-15">
                                    <span>or</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 pl-xl-4 pr-xl-4">
                                <div className="socail-login d-flex justify-content-between align-items-center mt-3">
                                    <GoogleLogin
                                        clientId={GOOGLE_CLIENT_ID}
                                        onSuccess={googleResponse}
                                        className="btnApple socail-btn"
                                        icon={false}
                                    >
                                        {/* <span>Google</span> */}
                                        <span></span>
                                    </GoogleLogin>
                                    <SocialButton
                                        style={{backgroundColor:'transparent',border:'none'}}
                                        provider={"facebook"}
                                        appId={FACEBOOK_APP_ID}
                                        onLoginSuccess={handleSocialLogin}
                                        onLoginFailure={handleSocialLoginFailure}
                                        >
                                            <div className="btnFacebook socail-btn"></div>
                                        </SocialButton>
                                        <SocialButton
                                            style={{backgroundColor:'transparent',border:'none'}}
                                            provider={"google"}
                                            appId={GOOGLE_CLIENT_ID}
                                            onLoginSuccess={handleSocialLogin}
                                            onLoginFailure={handleSocialLoginFailure}
                                        >
                                            <div className="btnGoogle socail-btn"></div>
                                        </SocialButton>
                                </div>
                                <div className="terms-block text-center mt-4 txt-lightgray">
                                    <p>By proceeding you agree to the<br />
                                        <Link to="/#" className="pink-txt pr-1 brandon-Medium">Terms</Link>and
                                        <Link to="/#" className="pink-txt pl-1 brandon-Medium">Privacy Policy</Link>
                                    </p>
                                </div>
                                {/* <Modal show={popup} onHide={handlePopup} className="signup-modal">
                                    <Modal.Body className="p-0">
                                                <p>Signup successfully !</p>
                                    </Modal.Body>
                                </Modal> */}
                            </div>
                        </div>
                    </React.Fragment>
                
            </div>
        </div>
        
    )
}

export default Signup
