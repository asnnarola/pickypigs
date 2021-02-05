import React from "react";
import { useSelector } from "react-redux";
import CustomLoadingComp from "../../components/CustomLoadingComp/CustomLoadingComp";
import ResetPasswordComp from "../../components/ResetPasswordComp/ResetPasswordComp";
import './ResetPasswordPage.scss';



const ResetPasswordPage = () => {

    let loading = useSelector((state)=>{
        return state.general.isLoading
    });

    return (
        <>
            <React.Fragment>
            {loading?
            <CustomLoadingComp/>
            :
            <section className="resetPasswordPage-container gradient-bg">
                <div className="container">
                    <ResetPasswordComp />
                </div>
            </section>
          }
          </React.Fragment>
    
        </>
    )
}

export default ResetPasswordPage;