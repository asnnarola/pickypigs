import React, { lazy } from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AlertSystemPage from './view/AlertSystemPage/AlertSystemPage';

const Home = lazy(() => import("./view/Home/Home.jsx"));
const TheWhoPage = lazy(() => import("./view/TheWhoPage/TheWhoPage.jsx"));
const TheFaqPage = lazy(() => import("./view/TheFaqPage/TheFaqPage.jsx"));
const TermsAndConditionPage = lazy(() => import("./view/TermsAndConditionPage/TermsAndConditionPage.jsx"));
const HowItWorksPage = lazy(() => import("./view/HowItWorksPage/HowItWorksPage.jsx"));

const RestaurantList = lazy(() => import("./view/RestaurantList/RestaurantList"));
const DishtListPage = lazy(() => import("./view/DishtListPage/DishtListPage"));

const AllRestaurant = lazy(() => import("./view/AllRestaurant/AllRestaurant"));
const RestaurantDiscPage = lazy(() => import("./view/RestaurantDiscPage/RestaurantDiscPage"));
const RestaurantSingleDiscInfoPage = lazy(() => import("./view/RestaurantSingleDiscInfoPage/RestaurantSingleDiscInfoPage"));
const UserDetailPage = lazy(() => import("./view/UserDetailPage/UserDetailPage"));
const Verify = lazy(() => import("./view/Signup/verify"));
const AdminLoginPage = lazy(() => import('./view/AdminLoginPage/AdminLoginPage'));


export const routesCode = [
    { path: "/",name: "Home", exact: true, component: Home },
    { path: "/who",name: "Who", exact: true, component: TheWhoPage },
    { path: "/faq",name: "Faq", exact: true, component: TheFaqPage },
    { path: "/terms",name: "Terms", exact: true, component: TermsAndConditionPage },
    { path: "/how",name: "How", exact: true, component: HowItWorksPage },

    { path: "/restaurant_list",name: "Restaurants", exact: true, component: RestaurantList },
    { path: "/dish_list",name: "Restaurants", exact: true, component: DishtListPage },
    { path: "/allrestaurant",name: "All Restaurants", exact: true, component: AllRestaurant },
    { path: "/restaurant/:restId",name: "Restaurants Name", exact: true, component: RestaurantDiscPage },
    { path: "/restaurant_dish_info/:dishId",name: "Dish Name", exact: true, component: RestaurantSingleDiscInfoPage },
    { path: "/user_detail",name: "Profile", exact: true, component: UserDetailPage },
    { path: "/verify/:token", exact: true, component: Verify },
    { path: "/restaurant_login", exact: true, component: AdminLoginPage },

    // { path: "*", component: 404Page },
];

class Routes extends React.PureComponent {
    render() {
        return (
            <Layout>
                    <div>
                       <AlertSystemPage/>
                   </div>
                {routesCode.map((route, i) =>
                    <Route {...route} key={i} />)
                }
            </Layout>
        );
    }
}

export default Routes;

