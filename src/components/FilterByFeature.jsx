import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import Breakfast_icon from "../assets/images/filterfeature/Accessible_icon.svg"
import Accessible_icon from "../assets/images/filterfeature/Accessible_icon.svg"
import Veg_icon from "../assets/images/filterfeature/Veg_icon.svg"
import Petlove_icon from "../assets/images/filterfeature/Petlove_icon.svg"
import Nonveg_icon from "../assets/images/filterfeature/Nonveg_icon.svg"
import ChildLove_icon from "../assets/images/filterfeature/ChildLove_icon.svg"
import Nuts_icon from "../assets/images/filterfeature/Nuts_icon.svg"
import Peanuts_icon from "../assets/images/filterfeature/Peanuts_icon.svg"
import Sesame_icon from "../assets/images/filterfeature/Sesame_icon.svg"
import Molluscs_icon from "../assets/images/filterfeature/Molluscs_icon.svg"
import Crustaceans_icon from "../assets/images/filterfeature/Crustaceans_icon.svg"
import Fish_icon from "../assets/images/filterfeature/Fish_icon.svg"
import Cereals_icon from "../assets/images/filterfeature/Cereals_icon.svg"
import Soya_icon from "../assets/images/filterfeature/Cereals_icon.svg"

function FilterByFeature() {
    var settings = {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 13,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings} className="filterfeature-wrapper">
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Accessible_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Accessible</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Veg_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Petlove_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Nonveg_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={ChildLove_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Nuts_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Peanuts_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Sesame_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Molluscs_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Crustaceans_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Fish_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Cereals_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Soya_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Breakfast_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
                <div className="filter-subwrapper">
                    <div className="filter-icon">
                        <img src={Breakfast_icon} className="img-fluid" />
                    </div>
                    <Link to="#" className="mt-1 text-dark text-link f-14">Breakfast</Link>
                </div>
            </Slider>
        </div>
    )
}

export default FilterByFeature
