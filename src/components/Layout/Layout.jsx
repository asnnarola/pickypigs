import React, { lazy } from "react";
// import Header from "./Header/Header";
import { withRouter } from "react-router-dom";
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
                <div>
                    <Header/>
                    {this.props.children}
                </div>
                    <Footer/>
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
