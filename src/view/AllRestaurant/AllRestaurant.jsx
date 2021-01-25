import React,{useEffect} from 'react';
import DishBlock from '../../components/DishBlock/DishBlock';
import './AllRestaurant.scss';
import FilterList from '../../components/FilterList/FilterList'
import {Link} from 'react-router-dom';


import restaurant_P1 from "../../assets/images/restaurant/r1.png"
import restaurant_P2 from "../../assets/images/restaurant/r2.png"
import restaurant_P3 from "../../assets/images/restaurant/r3.png"
import restaurant_P4 from "../../assets/images/restaurant/r4.png"
import restaurant_P5 from "../../assets/images/restaurant/r5.png"
import restaurant_P6 from "../../assets/images/restaurant/r6.png"
import restaurant_P7 from "../../assets/images/restaurant/r7.png"
import restaurant_P8 from "../../assets/images/restaurant/r8.png"
import AllResturantNav from '../AllResturantNav/AllResturantNav';

const AllRestaurant = () => {
    let resturantData = [{ "image": restaurant_P1, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P2, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P3, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P4, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P5, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P6, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P7, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P8, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P1, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P2, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P3, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P4, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P5, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P6, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P7, "dist": 1.5, "stars": 4.5 }, { "image": restaurant_P8, "dist": 1.5, "stars": 4.5 }];
   
    useEffect(() => {
        window.addEventListener('scroll', () => {
                let ele = document.getElementById("top_navbar")
                if (window.scrollY > 170 ) {
                    ele&&ele.classList.add("allrsfilter-sticky")
                } else {
                    ele&&ele.classList.remove("allrsfilter-sticky")
                }
            });
    }, [window.scrollY])

    return (
        <>
            {/* All restaurantlist  Start */}
            <section className="fr-section allrestaurant-section">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className="col-sm-12 pt-4">
                            <h1 className="text-center brandon-Bold text-uppercase text-white allrestaurant-label">All Restaurants</h1>
                        </div>
                    </div>
                    <div className="allrestaurant-wrapper position-relative p-3">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="mb-5 allrestaurant-filter" id="top_navbar" >
                                    <AllResturantNav />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="row">
                                    {resturantData.map((data, index) => {
                                        return (
                                            <div key={index} className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                                <Link to="/restaurant_disc" style={{textDecoration:'none',color:'initial'}}>    
                                                    <DishBlock restaurant_Name={"Shasha's Kitchen"} restaurant_Pic={data.image} kmValue={data.dist} rating={data.stars} />
                                                </Link>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </section>
            {/* All restaurantlist  End */}
        </>
    )
}
export default AllRestaurant;
