import React from 'react'

import pattern_img from "../../assets/images/Pattern.png"
import OurVisionComponent from '../../components/OurVisionComponent/OurVisionComponent';
import img_1 from "../../assets/images/digitalise_img.svg"
import img_2 from "../../assets/images/work-img.svg"
import "./HowItWorksPage.scss"
import SecondOverlapedCardComp from '../../components/SecondOverlapedCardComp/SecondOverlapedCardComp';
import FirstOverlapedCardComp from '../../components/FirstOverlapedCardComp/FirstOverlapedCardComp';


const detail_1 = ["Save time, money, energy and e4ort. In training hours, sta4 hours on shift, time spent communicating with the guest and back and forth to the chef. Free yourself from printing new allergy sheets and matrix every time a dish is edited or added.", "Support your teams and guests in providing all tracing, cleaning and policy information. In a concise, transparent and easily accessible way.", "Put yourself on the map for the ultimate dining out application.Bridging the gap between the diner and the restaurant. The more accurate the information, the better the guest experience.", "Provide live personalised menus to each guest and their unique needs."]
const detail_2 = ["Save time, money, energy and e4ort. In training hours, sta4 hours on shift, time spent communicating with the guest and back and forth to the chef. Free yourself from printing new allergy sheets and matrix every time a dish is edited or added.", "Support your teams and guests in providing all tracing, cleaning and policy information. In a concise, transparent and easily accessible way.", "Put yourself on the map for the ultimate dining out application.Bridging the gap between the diner and the restaurant. The more accurate the information, the better the guest experience."]


function HowItWorksPage() {
  
    return (
        <div className="how_it_works_container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* How section 1 start */}
            <section className="how-section">
                <div className="container">
                    <div>
                        <h1 className="text-center text-uppercase header-txt brandon-Bold">HOW IT WORKS</h1>
                        <p className="text-center f-15">
                            This is your ultimate food finding application for FUSS FREE FOOD. Search for the best place for you to dine based on all of your needs, add and remove filters to create a personalised digital menu and even send your own order to the kitchen to ensure you feel safe and in control.
                        </p>
                    </div>
                    <div>
                        <FirstOverlapedCardComp img={img_1}  detail={detail_2} />
                        <SecondOverlapedCardComp img={img_1} detail={detail_1} />
                        <FirstOverlapedCardComp img={img_1}  detail={detail_2} />
                    </div>
                    
                </div>
              
            </section>
            {/* Who section 1 end */}


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="patternimg-wrapper">
                                <img src={pattern_img} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <OurVisionComponent/>
            </section>
            
        </div>
    )
}

export default HowItWorksPage;
