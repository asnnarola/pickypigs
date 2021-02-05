import React from "react";
import './CustomLoadingComp.scss';
import logo_loader from "../../assets/images/logo-white.svg"
import loaderlogo_bg from "../../assets/images/Pattern.png"

const CustomLoadingComp=()=>{
    return(
        <>
        <section className="customLoadingComp-container ">
            <div className=" d-flex flex-column h-100 loader-mainwrapper d-block align-items-center justify-content-center">
                    <div className="loader">
                        <div className="loader-logo ml-auto mr-auto">
                            <img src={logo_loader} className="img-fluid" />
                        </div>
                        <div class="text-center mt-3">
                            <p class="text-white">Fuss Free Food</p>
                        </div>
                        <div class="loading d-flex">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>  
                    </div>
                </div>
        </section>
        </>
    )
}

export default CustomLoadingComp;