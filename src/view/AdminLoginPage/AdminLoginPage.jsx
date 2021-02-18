import React from "react";
import SignUpSignInComponent from "../../components/SignUpSignInComponent/SignUpSignInComponent";
import FirstOverlapedCardComp from "../../components/FirstOverlapedCardComp/FirstOverlapedCardComp";
import SecondOverlapedCardComp from "../../components/SecondOverlapedCardComp/SecondOverlapedCardComp";
import img_1 from "../../assets/images/digitalise_img.svg"
import img_2 from "../../assets/images/work-img.svg"
import pattern_img from "../../assets/images/Pattern.png"

import JoinPickyPigComponent from "../../components/JoinPickyPigComponent/JoinPickyPigComponent";
import './AdminLoginPage.scss';
import PlanSectionComp from "../../components/PlanSectionComp/PlanSectionComp";
import OurVisionComponent from "../../components/OurVisionComponent/OurVisionComponent";
import { showAdminSignUpPopup } from "../../redux/actions/restaurantAdminAction";
import { useDispatch } from "react-redux";
// import LoginPageHeader from "../../components/LoginPageHeader/LoginPageHeader";
// import LoginPageFooter from "../../components/LoginPageFooter/LoginPageFooter";
// import OurVisionComponent from "../../components/OurVisionComponent/OurVisionComponent";


const detail_1 = ["Save time, money, energy and e4ort. In training hours, sta4 hours on shift, time spent communicating with the guest and back and forth to the chef. Free yourself from printing new allergy sheets and matrix every time a dish is edited or added.", "Support your teams and guests in providing all tracing, cleaning and policy information. In a concise, transparent and easily accessible way.", "Put yourself on the map for the ultimate dining out application.Bridging the gap between the diner and the restaurant. The more accurate the information, the better the guest experience.", "Provide live personalised menus to each guest and their unique needs."]
const detail_2 = ["Save time, money, energy and e4ort. In training hours, sta4 hours on shift, time spent communicating with the guest and back and forth to the chef. Free yourself from printing new allergy sheets and matrix every time a dish is edited or added.", "Support your teams and guests in providing all tracing, cleaning and policy information. In a concise, transparent and easily accessible way.", "Put yourself on the map for the ultimate dining out application.Bridging the gap between the diner and the restaurant. The more accurate the information, the better the guest experience."]

const features_1 = ["Easy upload option / recipe and dish builder", "Calculate calorie and macros of each dish", "Link to the POS for fast on-boarding", "User friendly experience", "User friendly dashboard to create dishes and your menu.", "Reporting tool to track orders, allergens, and servers", "Add multiple filters to each dish.", "Multisite capabilities."]
const features_2 = ["User friendly experience", "User friendly dashboard to create dishes and your menu.", "Reporting tool to track orders, allergens, and servers", "Add multiple filters to each dish.", "Multisite capabilities."]

const AdminLoginPage = () => {
    const dispatch = useDispatch();

    return (
        <>

            <section className="gradient-bg">
                <div className="container">
                    <SignUpSignInComponent />
                </div>
            </section>
            <section>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-sm-12 text-center mb-5">
                                <h1 className="heading-content brandon-Bold">WORK WITH US</h1>
                                <p className="f-15">Lorem ipsum dolor text dummy</p>
                            </div>
                        </div>
                        <FirstOverlapedCardComp img={img_1} heading="Digitalise Today" detail={detail_2} />
                        <SecondOverlapedCardComp img={img_1} heading="Fuss Free Food (Integrate you system)" detail={detail_1} />
                        <FirstOverlapedCardComp img={img_1} heading="The Whole Package (Showcase your menu)" detail={detail_2} />
                    </div>
                    <JoinPickyPigComponent />
                    <section className="mb-5">
                        <div className="row">
                            <div className="col-sm-12 text-center mb-5">
                                <h1 className="heading-content brandon-Bold">HOW IT WORKS</h1>
                                <p className="f-15">Lorem ipsum dolor text dummy</p>
                            </div>
                        </div>
                        <div>
                            <SecondOverlapedCardComp img={img_1} workslist="works-list" heading="Features" detail={features_1} />
                        </div>
                        <div>
                            <FirstOverlapedCardComp img={img_1} workslist="works-list" heading="Features" detail={features_2} />
                        </div>
                        <div>
                            <SecondOverlapedCardComp img={img_2} workslist="works-list" heading="Features" detail={features_1} />
                        </div>
                    </section>
                </div>
            </section>
            <section className="bg-light-pink waiting-section">
                <div className="container pl-0 pr-0">
                    <div className="bg-white waiting-wrapper d-flex align-items-center">
                        <div className="container waiting-container">
                            <div className="row align-items-center justify-content-between">
                                <div className="what-waiting-wrapper">
                                    <h4 className="brandon-Bold mb-2">What are you waiting for?</h4>
                                    <p className="f-15 darkgray-txt">Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer</p>
                                </div>
                                <button onClick={()=>{dispatch(showAdminSignUpPopup(true))}} className="signup-btn pinkbg-btn min-height-50 border-radius-25 min-width-270 shadow-light">Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <section>
                <PlanSectionComp/>
            </section>
           
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div class="patternimg-wrapper">
                                <img src={pattern_img} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <OurVisionComponent />
            </section>
        </>
    )
}

export default AdminLoginPage;