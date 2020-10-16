import React, { lazy } from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./view/Home/Home.jsx"));
const RestaurantList = lazy(() => import("./view/RestaurantList/RestaurantList"));
const Verify = lazy(() => import("./view/Signup/verify"));

export const routesCode = [
    { path: "/", exact: true, component: Home },
    { path: "/restaurant_list", exact: true, component: RestaurantList },
    { path: "/verify/:token", exact: true, component: Verify }
    // { path: "*", component: 404Page },
];

class Routes extends React.PureComponent {
    render() {
        return (
            <Layout>
                {routesCode.map((route, i) =>
                    <Route {...route} key={i} />)
                }
            </Layout>
        );
    }
}

export default Routes;
