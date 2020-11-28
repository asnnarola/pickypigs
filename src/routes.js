import React, { lazy } from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Hidden from '@material-ui/core/Hidden';
import RestaurantDiscMobilePage from "./Mobile/MobileView/RestaurantDiscMobilePage/RestaurantDiscMobilePage";
import RestaurantDiscInfoMobilePage from "./Mobile/MobileView/RestaurantDiscInfoMobilePage/RestaurantDiscInfoMobilePage";
import AllergyFilterMobilePage from "./Mobile/MobileView/AllergyFilterMobilePage/AllergyFilterMobilePage";
import PreferenceDetailMobilePage from "./Mobile/MobileView/PreferenceDetailMobilePage/PreferenceDetailMobilePage";
import HomeMobilePage from "./Mobile/MobileView/HomeMobilePage/HomeMobilePage";
import UserProfileMobilePage from "./Mobile/MobileView/UserProfileMobilePage/UserProfileMobilePage";

const Home = lazy(() => import("./view/Home/Home.jsx"));
const RestaurantList = lazy(() => import("./view/RestaurantList/RestaurantList"));
const AllRestaurant = lazy(() => import("./view/AllRestaurant/AllRestaurant"));
const RestaurantDiscPage = lazy(() => import("./view/RestaurantDiscPage/RestaurantDiscPage"));
const RestaurantSingleDiscInfoPage = lazy(() => import("./view/RestaurantSingleDiscInfoPage/RestaurantSingleDiscInfoPage"));
const UserDetailPage = lazy(() => import("./view/UserDetailPage/UserDetailPage"));
const Verify = lazy(() => import("./view/Signup/verify"));

export const routesCode = [
    { path: "/", exact: true, component: Home },
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
                <Route  path="/" exact strict component={Home} />
                <Route  path="/restaurant_list" exact strict component={RestaurantList} />
                <Route  path="/allrestaurant" exact strict component={AllRestaurant} />

                <Hidden only={['xs','sm']}>
                    <Route  path="/restaurant_disc" exact strict component={RestaurantDiscPage} />
                </Hidden>
                <Hidden only={['xs','md','lg','xl']}>
                    <Route  path="/restaurant_disc" exact strict component={RestaurantDiscPage} />
                </Hidden>
                <Hidden only={['sm','md','lg','xl']}>
                    <Route  path="/restaurant_disc" exact strict component={RestaurantDiscMobilePage} />
                </Hidden>

                <Hidden only={['xs','sm']}>
                    <Route  path="/restaurant_disc_info" exact strict component={RestaurantSingleDiscInfoPage} />
                </Hidden>
                <Hidden only={['xs','md','lg','xl']}>
                    <Route  path="/restaurant_disc_info" exact strict component={RestaurantSingleDiscInfoPage} />
                </Hidden>
                <Hidden only={['sm','md','lg','xl']}>
                    <Route  path="/restaurant_disc_info" exact strict component={RestaurantDiscInfoMobilePage} />
                </Hidden>
                <Route  path="/allergy_mobile" exact strict component={AllergyFilterMobilePage} />
                <Route  path="/preference_mobile" exact strict component={PreferenceDetailMobilePage} />
                <Route  path="/mobile_home" exact strict component={HomeMobilePage} />
                <Route  path="/mobile_user" exact strict component={UserProfileMobilePage} />

                <Route  path="/user_detail" exact strict component={UserDetailPage} />
                <Route  path="/verify/:token" exact strict component={Verify} />
            </Layout>
        );
    }
}

export default Routes;
