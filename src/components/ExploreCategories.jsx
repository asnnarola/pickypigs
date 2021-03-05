import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Breakfast_icon from "../assets/images/category_icon/Breakfast_icon.svg"
import Lunch_icon from "../assets/images/category_icon/Lunch_icon.svg"
import Dinner_icon from "../assets/images/category_icon/Dinner_icon.svg"
import Drinks_icon from "../assets/images/category_icon/Drinks_icon.svg"

const ExploreCategories = () => {
  var settings = {
    focusOnSelect: true,
    arrows: true,
    centerMode: true,
    centerPadding: '15px',
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          focusOnSelect: true,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          focusOnSelect: true,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  // function NextArrow(props) {
  //   const { className, style, onClick } = props;
  //   console.log('img props => ',props);

  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function PrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  return (
    <section className="mt-5 pt-4 mb-5 pb-5 categories-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 ml-auto mr-auto mt-3">
            <h1 className="sectionhead-txt text-center mb-4">EXPLORE OUR CATEGORIES</h1>
            <div>
              <Slider {...settings} className="categories-wrapper">
                <div className="categories-subwrapper">
                  <div className="categories-icon">
                    <img src={Breakfast_icon} alt={"Breakfast_icon"} className="img-fluid" />
                  </div>
                    <Link to={{
                        pathname: "/allrestaurant",
                        search: `?menu=${"breakfast"}`,
                      }} 
                    className="mt-3 text-dark text-link">
                    Breakfast
                  </Link>
                </div>
                <div className="categories-subwrapper">
                  <div className="categories-icon">
                    <img src={Lunch_icon} alt={"Lunch_icon"} className="img-fluid" />
                  </div>
                  <Link to={{
                        pathname: "/allrestaurant",
                        search: `?menu=${"lunch"}`,
                      }} 
                    className="mt-3 text-dark text-link">
                    Lunch
                  </Link>
                </div>
                <div className="categories-subwrapper">
                  <div className="categories-icon">
                    <img src={Dinner_icon} alt={"Dinner_icon"} className="img-fluid" />
                  </div>
                  <Link to={{
                        pathname: "/allrestaurant",
                        search: `?menu=${"dinner"}`,
                      }} 
                    className="mt-3 text-dark text-link">
                    Dinner
                  </Link>
                </div>
                <div className="categories-subwrapper">
                  <div className="categories-icon">
                    <img src={Drinks_icon} alt={"Drinks_icon"} className="img-fluid" />
                  </div>
                  <Link to={{
                        pathname: "/allrestaurant",
                        search: `?menu=${"dessert"}`,
                      }} 
                    className="mt-3 text-dark text-link">
                    Dessert
                  </Link>
                </div>
                <div className="categories-subwrapper">
                  <div className="categories-icon">
                    <img src={Lunch_icon} alt={"Lunch_icon"} className="img-fluid" />
                  </div>
                  <Link to={{
                        pathname: "/allrestaurant",
                        search: `?menu=${"buffet"}`,
                      }} 
                    className="mt-3 text-dark text-link">
                    Buffet
                  </Link>
                </div>
                <div className="categories-subwrapper">
                  <div className="categories-icon">
                    <img src={Lunch_icon} alt={"Lunch_icon"} className="img-fluid" />
                  </div>
                  <Link to={{
                        pathname: "/allrestaurant",
                        search: `?menu=${"drinks"}`,
                      }} 
                    className="mt-3 text-dark text-link">
                    Drinks
                  </Link>
                </div>
                <div className="categories-subwrapper">
                  <div className="categories-icon">
                    <img src={Lunch_icon} alt={"Lunch_icon"} className="img-fluid" />
                  </div>
                  <Link to={{
                        pathname: "/allrestaurant",
                        search: `?menu=${"nibble"}`,
                      }} 
                    className="mt-3 text-dark text-link">
                    Nibble
                  </Link>
                </div>
                <div className="categories-subwrapper">
                  <div className="categories-icon">
                    <img src={Lunch_icon} alt={"Lunch_icon"} className="img-fluid" />
                  </div>
                  <Link to={{
                        pathname: "/allrestaurant",
                        search: `?menu=${"setmenu"}`,
                      }} 
                    className="mt-3 text-dark text-link">
                    Set Menu
                  </Link>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default ExploreCategories
