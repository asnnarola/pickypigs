import React, { lazy } from "react";
import { Route } from "react-router-dom";
import MobileLayout from "./Mobile/MobileLayout/MobileLayout";

const HomeMobilePage = lazy(() => import("./Mobile/MobileView/HomeMobilePage/HomeMobilePage"));
// const RestaurantList = lazy(() => import("./view/RestaurantList/RestaurantList"));
// const AllRestaurant = lazy(() => import("./view/AllRestaurant/AllRestaurant"));
const RestaurantDiscMobilePage = lazy(() => import("./Mobile/MobileView/RestaurantDiscMobilePage/RestaurantDiscMobilePage"));
const RestaurantDiscInfoMobilePage = lazy(() => import("./Mobile/MobileView/RestaurantDiscInfoMobilePage/RestaurantDiscInfoMobilePage"));
const UserProfileMobilePage = lazy(() => import("./Mobile/MobileView/UserProfileMobilePage/UserProfileMobilePage"));
const AllergyFilterMobilePage = lazy(() => import("./Mobile/MobileView/AllergyFilterMobilePage/AllergyFilterMobilePage"));
const PreferenceDetailMobilePage = lazy(() => import("./Mobile/MobileView/PreferenceDetailMobilePage/PreferenceDetailMobilePage"));
const SearchAutoSuggestionMobilePage = lazy(() => import("./Mobile/MobileView/SearchAutoSuggestionMobilePage/SearchAutoSuggestionMobilePage"));
const SignupMobilePage = lazy(() => import("./Mobile/MobileView/SignupMobilePage/SignupMobilePage"));
// const Verify = lazy(() => import("./view/Signup/verify"));

export const routesCode = [
    // { path: "/", exact: true, component: HomeMobilePage },
    // { path: "/restaurant_list", exact: true, component: RestaurantList },
    // { path: "/allrestaurant", exact: true, component: AllRestaurant },
    { path: "/restaurant_disc", exact: true, component: RestaurantDiscMobilePage },
    { path: "/restaurant_disc_info", exact: true, component: RestaurantDiscInfoMobilePage },
    { path: "/user_detail", exact: true, component: UserProfileMobilePage },
    { path: "/allergy_mobile", exact: true, component: AllergyFilterMobilePage },
    { path: "/preference_mobile", exact: true, component: PreferenceDetailMobilePage },
    { path: "/mobile_search", exact: true, component: SearchAutoSuggestionMobilePage },
    { path: "/mobile_signup", exact: true, component: SignupMobilePage },

    // { path: "/verify/:token", exact: true, component: Verify }
    // { path: "*", component: 404Page },
];

class MobileRoutes extends React.PureComponent {
    render() {
        return (
            <React.Fragment>


            <MobileLayout>
            <Route  path="/" exact strict component={HomeMobilePage} />

                {routesCode.map((route, i) =>
                    <Route {...route} key={i} />)
                }
            </MobileLayout>
            </React.Fragment>
        );
    }
}

export default MobileRoutes;
