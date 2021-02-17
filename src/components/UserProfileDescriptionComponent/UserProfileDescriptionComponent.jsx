import React, { useState } from "react";
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import './UserProfileDescriptionComponent.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import showpassword from "../../assets/images/eye_icon.svg";
import { useDispatch } from "react-redux";
import { updateUserProfileDetail } from "../../redux/actions/userProfileAction";

const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})/);
const phoneRegex = RegExp( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const UserProfileDescriptionComponent = (props) => {
    const dispatch=useDispatch();
    let {accountType,email,password,userDetail}=props.userdata
    const [type, setType] = useState("password")
    const [editForm, setEditForm] = useState(true);
    const handleCancleEdit = (e) => {
        setEditForm(true)
    }

    const initialValues = {
        name:userDetail&&userDetail.name?userDetail&&userDetail.name:'',
        password:editForm?"password":'',
        dob:userDetail&&userDetail.dob?userDetail&&userDetail.dob:'',
        gender:userDetail&&userDetail.gender?userDetail&&userDetail.gender:'',
        email:email?email:'',
        address:userDetail&&userDetail.address?userDetail&&userDetail.address:'',
        phone:userDetail&&userDetail.phone?userDetail&&userDetail.phone:'',
    }

    const validationSchema  = Yup.object().shape({
        name:Yup.string().required('Name is required'),
        password:Yup
            .string()
            .label('Password')
            .min(8, 'Seems a bit short(Min 8 characters)...')
            .max(24, 'Please try a shorter password(Max 24 characters)...).')
            .matches(passwordRegExp, 'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special characte'),
        dob:Yup.date().nullable().required('Date Is Required'),
        gender:Yup.string().required('Please Select a Gender'),
        email:Yup.string().email('Email must be a valid email').required('Email Required'),
        address:Yup.string().required('Address is required'),
        phone:Yup.string().required('Phone Number is a required field').min(10, "Min 10 Digits").max(10, "Max 10 Digits").matches(phoneRegex, "Invalid Phone Number"),
    });

    const handlePassword=()=>{
        if (type === "password") {
            setType("text")
        } else {
            setType("password")
        }
    }

    const onSubmit=(fields)=>{
        dispatch(updateUserProfileDetail(fields));
        setEditForm(true)

    }

    return (
        <>
            <section className="UserProfileDescriptionComponent">
                <React.Fragment>
                    <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ errors, touched, isSubmitting, setFieldValue,handleChange,values }) => {
                            return (
                                <Form>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="userform-btn-main d-flex justify-content-end">
                                                    {editForm
                                                        ?
                                                        <button className="btn darkgray-btn w-120 h-36 mr-5 d-inline-flex align-items-center justify-content-center" type="button" onClick={() => { setEditForm(false) }}>Edit</button>
                                                        :
                                                        <div className="mr-5">
                                                            <button className="btn graytxt-btn w-120 h-36 border-radius-20 d-inline-flex align-items-center justify-content-center" type="reset" onClick={handleCancleEdit}>Cancel</button>
                                                            <button className="btn ml-4 pinkline-btn w-120 h-36 border-radius-20 d-inline-flex align-items-center justify-content-center" type="submit">Save</button>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-12 mt-2 pl-0 pr-0 mb-2">
                                                <div className="border mt-4 mb-4">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row mb-5 pb-2">
                                            <div className="col-md-6">
                                                    <div className="form-group row align-items-start mb-1">
                                                        <label className="col-sm-2 col-form-label tabs-form-label">Full name</label>
                                                        <div className="col-sm-10 tabs-form-input">
                                                            {editForm
                                                                ?
                                                                <p className="form-control-plaintext">{userDetail&&userDetail.name}</p>
                                                                :
                                                                <React.Fragment>
                                                                    <Field name="name" placeholder="Enter Name here" className="form-control-inputtext form-control"/>
                                                                    {touched.name && errors.name && <div className="error pink-txt f-11">{errors.name}</div>}
                                                                </React.Fragment>
                                                            }
                                                        </div>
                                                    </div>
                                                    {accountType&&accountType==="email"&&
                                                    <div className="form-group row align-items-start mb-1  ">
                                                        <label className="col-sm-2 col-form-label tabs-form-label">Password</label>
                                                        <div className="col-sm-10 tabs-form-input position-relative">
                                                            {editForm
                                                                ?
                                                                <Field type="password" name="password" readOnly={true} className= "form-control-plaintext" value="Password"/>
                                                                :
                                                                <React.Fragment>
                                                                    <Field type={type} name="password"  placeholder="Password" className="form-control-inputtext form-control" />
                                                                    {!editForm&&
                                                                    <div className="showpassword-block" id="password" onClick={() => handlePassword()}>
                                                                        <img src={showpassword} className="img-fluid" alt="showpassword" />
                                                                    </div>
                                                                    }
                                                                    {touched.password && errors.password && <div className="error pink-txt f-11">{errors.password}</div>}
                                                                </React.Fragment>
                                                            }
                                                            
                                                        </div>
                                                    </div>
                                                    }
                                                    <div className="form-group row align-items-start mb-1">
                                                        <label className="col-sm-2 col-form-label tabs-form-label">Date of Birth</label>
                                                        <div className="col-sm-10 tabs-form-input datepicker-input">
                                                            {editForm
                                                                ?
                                                                <p className="form-control-plaintext">{moment(userDetail&&userDetail.dob).format('DD MMMM YYYY')}</p>
                                                                :
                                                                <React.Fragment>
                                                                <TextField id="date" type="date" onChange={e => setFieldValue("dob", e.target.value)} 
                                                                    className="form-control datepicker-control d-flex align-items-center justify-content-center" name="dob"  value ={moment(values.dob).format("YYYY-MM-DD")}
                                                                    InputLabelProps={{ shrink: true, }}
                                                                />
                                                                {touched.dob && errors.dob && <div className="error pink-txt f-11">{errors.dob}</div>}
                                                                </React.Fragment>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="form-group row align-items-start mb-1">
                                                        <label className="col-sm-2 col-form-label tabs-form-label">Gender</label>
                                                        <div className="col-sm-10 tabs-form-input">
                                                        {editForm
                                                            ?
                                                            <p className="form-control-plaintext text-capitalize">{userDetail&&userDetail.gender}</p>
                                                            :
                                                            <React.Fragment>
                                                            <Field as="select" name="gender" className="form-control-inputtext form-control text-capitalize">
                                                                <option value="">Select</option>
                                                                <option value="male">male</option>
                                                                <option value="female">female</option>
                                                                <option value="Other">Other</option>
                                                            </Field>
                                                            {touched.gender && errors.gender && <div className="error pink-txt f-11">{errors.gender}</div>}
                                                            </React.Fragment>
                                                        }
                                                        </div>
                                                    </div>
                                                
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group row align-items-start mb-1">
                                                    <label className="col-sm-2 col-form-label tabs-form-label">Email</label>
                                                    <div className="col-sm-10 tabs-form-input">
                                                    <Field name="email" type="email" readOnly={true} placeholder="Enter Name here" className="form-control-plaintext" />
                                                    </div>
                                                </div>
                                                <div className="form-group row align-items-start mb-1">
                                                    <label className="col-sm-2 col-form-label tabs-form-label">Phone number</label>
                                                    <div className="col-sm-10 tabs-form-input">
                                                    {editForm
                                                            ?
                                                                userDetail&&userDetail.phone?
                                                                <p className="form-control-plaintext text-capitalize">{userDetail&&userDetail.phone}</p>
                                                                :
                                                                <p className="form-control-plaintext text-capitalize">Not- Available</p>

                                                            :
                                                                userDetail&&userDetail.phone?
                                                                    <p className="form-control-plaintext text-capitalize">{userDetail&&userDetail.phone}</p>
                                                                :
                                                                <React.Fragment>
                                                                    <Field name="phone"  placeholder="Enter Phone Number here" className="form-control-inputtext form-control " />
                                                                    {touched.phone && errors.phone && <div className="error pink-txt f-11">{errors.phone}</div>}
                                                                </React.Fragment>
                                                        }
                                                        {/* <Field name="phone" readOnly={true} placeholder="Enter here" className="form-control-plaintext" /> */}
                                                    </div> 
                                                </div>
                                                <div className="form-group row align-items-start mb-1">
                                                    <label className="col-sm-2 col-form-label tabs-form-label">Address</label>
                                                    <div className="col-sm-10 tabs-form-input">
                                                    {editForm
                                                            ?
                                                            <p className="form-control-plaintext text-capitalize">{userDetail&&userDetail.address}</p>
                                                            :
                                                            <React.Fragment>
                                                                <Field component='textarea' rows='1' className="form-control-inputtext form-control"  name="address" placeholder="Your address" />
                                                                {touched.address && errors.address && <div className="error pink-txt f-11">{errors.address}</div>}
                                                            </React.Fragment>
                                                    }
                                                  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </React.Fragment>
            
            </section>

        </>
    )
}


export default UserProfileDescriptionComponent;