import React, { lazy } from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./view/Home/Home.jsx"));
const TheWhoPage = lazy(() => import("./view/TheWhoPage/TheWhoPage.jsx"));
const TheFaqPage = lazy(() => import("./view/TheFaqPage/TheFaqPage.jsx"));
const TermsAndConditionPage = lazy(() => import("./view/TermsAndConditionPage/TermsAndConditionPage.jsx"));
const HowItWorksPage = lazy(() => import("./view/HowItWorksPage/HowItWorksPage.jsx"));

const RestaurantList = lazy(() => import("./view/RestaurantList/RestaurantList"));
const AllRestaurant = lazy(() => import("./view/AllRestaurant/AllRestaurant"));
const RestaurantDiscPage = lazy(() => import("./view/RestaurantDiscPage/RestaurantDiscPage"));
const RestaurantSingleDiscInfoPage = lazy(() => import("./view/RestaurantSingleDiscInfoPage/RestaurantSingleDiscInfoPage"));
const UserDetailPage = lazy(() => import("./view/UserDetailPage/UserDetailPage"));
const Verify = lazy(() => import("./view/Signup/verify"));


export const routesCode = [
    { path: "/", exact: true, component: Home },
    { path: "/who", exact: true, component: TheWhoPage },
    { path: "/faq", exact: true, component: TheFaqPage },
    { path: "/terms", exact: true, component: TermsAndConditionPage },
    { path: "/how", exact: true, component: HowItWorksPage },

    { path: "/restaurant_list", exact: true, component: RestaurantList },
    { path: "/allrestaurant", exact: true, component: AllRestaurant },
    { path: "/restaurant_disc", exact: true, component: RestaurantDiscPage },
    { path: "/restaurant_disc_info", exact: true, component: RestaurantSingleDiscInfoPage },
    { path: "/user_detail", exact: true, component: UserDetailPage },
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

