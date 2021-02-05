import React, { lazy } from "react";
// import Header from "./Header/Header";
import { withRouter } from "react-router-dom";
import loaderlogo_bg from "../../assets/images/Pattern.png"
// import logo_loader from "../../assets/images/logo2.svg"
import logo_loader from "../../assets/images/logo-white.svg"
import "./Layout.scss"

const Header = lazy(() => import('./Header/Header'));
const Footer = lazy(() => import('./Footer/Footer'));

// import { isAuth } from "../../shared/funs";
class Layout extends React.PureComponent {
    // state = {
    //     open: false,
    //     isLogin: true
    // };
    render() {
        return (
            <div className="layout main-layout d-flex flex-column h-100">
                <div className="loader-mainwrapper d-none align-items-center justify-content-center">
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
                <div>
                    <Header />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
    // componentDidUpdate() {
    //     if (!isAuth()) {
    //         this.props.history.push("/login");
    //     }
    // }
    // componentDidMount() {
    //     document.body.classList.add("body-main");
    //     if (!isAuth()) {
    //         this.props.history.push("/login");
    //     }
    // }
}

export default withRouter(Layout);
