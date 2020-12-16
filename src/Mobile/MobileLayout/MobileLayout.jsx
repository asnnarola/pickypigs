import React, { lazy } from "react";
import { withRouter } from "react-router-dom";
import "./MobileLayout.scss"

const Header = lazy(() => import('./MobileHeader/MobileHeader'));
const Footer = lazy(() => import('./MobileFooter/MobileFooter'));

// import { isAuth } from "../../shared/funs";
class MobileLayout extends React.PureComponent {
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

export default withRouter(MobileLayout);
