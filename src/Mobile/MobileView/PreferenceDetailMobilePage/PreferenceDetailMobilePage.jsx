import React,{useState} from "react";
import useWindowDimensions from "../../MobileComponents/useWindowDimensions";
import './PreferenceDetailMobilePage.scss';

const alergy_information=["Egg","Milk","Celery","Mustard","Lupin","Nuts","Peanuts","Sesame","Molluscs","Crustaceans","Fish","Cereals (Wheat)","Soya","Sulphur dioxide"];
const dietary_preference=["Gluten Free","Dairy Free","Meat Lover","Fodmap","Low Sugar","Low Carb","Plant Based","Vegetarian","Pescatarian","Keto"];
const lifestyle_choice=["Pregnant","Vegan","Halal","Kosher","Organic","Locally Sourced"];
const restaurant_features=["Pet Friendly","Child friendly","Live music","Outside sitting","Disabled access","Reservations needed","Bring your own","Large parties accepted","Private dining room","Table service","Bar service","Holding bar","R20","Take away"];

const PreferenceDetailMobilePage=()=>{
    const [alergy, setAlergy] = useState([]);
    const [dietary, setDietary] = useState([]);
    const [lifestyle, setLifestyle] = useState([]);
    const [restaurant, setRestaurant] = useState([]);
    const [distance, setDistance] = useState(5);
    const { height, width } = useWindowDimensions();

    const handleAlergy=(e)=>{
        e.preventDefault();
        if(alergy.indexOf(e.target.id) !== -1){
            var Index = alergy.indexOf(e.target.id);
            if(Index>-1){
                setAlergy(alergy.filter(myallergy=>myallergy!==e.target.id));
            }
        }else{
            setAlergy([...alergy,e.target.id]);
        }
    }
    const handleDietaryPreference=(e)=>{
        e.preventDefault();
        if(dietary.indexOf(e.target.id) !== -1){
            var Index = dietary.indexOf(e.target.id);
            if(Index>-1){
                setDietary(dietary.filter(myallergy=>myallergy!==e.target.id));
            }
        }else{
            setDietary([...dietary,e.target.id]);
        }
    }

    const handleLifestyle=(e)=>{
        e.preventDefault();
        if(lifestyle.indexOf(e.target.id) !== -1){
            var Index = lifestyle.indexOf(e.target.id);
            if(Index>-1){
                setLifestyle(lifestyle.filter(myallergy=>myallergy!==e.target.id));
            }
        }else{
            setLifestyle([...lifestyle,e.target.id]);
        }
    }

    const handleRestaurant=(e)=>{
        e.preventDefault();
        if(restaurant.indexOf(e.target.id) !== -1){
            var Index = restaurant.indexOf(e.target.id);
            if(Index>-1){
                setRestaurant(restaurant.filter(myallergy=>myallergy!==e.target.id));
            }
        }else{
            setRestaurant([...restaurant,e.target.id]);
        }
    }

    return(
        <>
        <section style={{marginTop:90}}>
            <div className="container" style={{position:'relative'}}>
                <div>
                    <h4>My Preference</h4>
                </div>
                <div className="accordion" id="accordionExample1">
                    <div className="border-bottom  pb-3 mb-3">
                        <div className="p-0" id="headingOne">
                            <div className="mb-0">
                                <button  className="btn btn-block text-left d-flex justify-content-between pl-0 pr-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h5>I'am allergic to <p><small>select your allergy</small></p></h5>
                                    <div className="accordian-arrow ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="8.031" viewBox="0 0 14.063 8.031">
                                            <path id="Path_389" data-name="Path 389" d="M-7-4.687h0l5.438-5.219a.313.313,0,0,1,.5,0l.969.938a.313.313,0,0,1,0,.5L-6.75-2.094A.338.338,0,0,1-7-2a.338.338,0,0,1-.25-.094l-6.656-6.375a.312.312,0,0,1,0-.5l.969-.937a.313.313,0,0,1,.5,0Z" transform="translate(14.031 10.031)" fill="#232323" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample1">
                            {alergy_information&&alergy_information.map((data,index)=>{
                                return(
                                    <React.Fragment key={index}>
                                        <button 
                                            id= {data} 
                                            onClick={handleAlergy} 
                                            className={`m-0 mr-3 mb-3 rounded-pill pl-3 pr-3 ${alergy.indexOf(data)!==-1 && "btn btn-primary"}`}
                                        >
                                            {data}
                                        </button>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample2">
                    <div className="border-bottom pb-3 mb-3">
                        <div className="p-0" id="headingTwo">
                            <div className="mb-0">
                                <button  className="btn btn-block text-left d-flex justify-content-between pl-0 pr-0" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    <h5>My diet is <p><small>select your dietry preference</small></p></h5>
                                    <div className="accordian-arrow ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="8.031" viewBox="0 0 14.063 8.031">
                                            <path id="Path_389" data-name="Path 389" d="M-7-4.687h0l5.438-5.219a.313.313,0,0,1,.5,0l.969.938a.313.313,0,0,1,0,.5L-6.75-2.094A.338.338,0,0,1-7-2a.338.338,0,0,1-.25-.094l-6.656-6.375a.312.312,0,0,1,0-.5l.969-.937a.313.313,0,0,1,.5,0Z" transform="translate(14.031 10.031)" fill="#232323" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample2">
                            {dietary_preference&&dietary_preference.map((data,index)=>{
                                return(
                                    <React.Fragment key={index}>
                                        <button 
                                            id={data} 
                                            onClick={handleDietaryPreference} 
                                            className={`m-0 mr-3 mb-3 rounded-pill pl-3 pr-3 ${dietary.indexOf(data)!==-1 && "btn btn-primary"}`} 
                                        >
                                            {data}

                                        </button>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample3">
                    <div className="border-bottom pb-3 mb-3">
                        <div className="p-0" id="headingThree">
                            <div className="mb-0">
                                <button  className="btn btn-block text-left d-flex justify-content-between pl-0 pr-0" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    <h5>My Lifestyle is <p><small>select your Lifestyle choice</small></p></h5>
                                    <div className="accordian-arrow ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="8.031" viewBox="0 0 14.063 8.031">
                                            <path id="Path_389" data-name="Path 389" d="M-7-4.687h0l5.438-5.219a.313.313,0,0,1,.5,0l.969.938a.313.313,0,0,1,0,.5L-6.75-2.094A.338.338,0,0,1-7-2a.338.338,0,0,1-.25-.094l-6.656-6.375a.312.312,0,0,1,0-.5l.969-.937a.313.313,0,0,1,.5,0Z" transform="translate(14.031 10.031)" fill="#232323" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample3">
                            {lifestyle_choice&&lifestyle_choice.map((data,index)=>{
                                return(
                                    <React.Fragment key={index}>
                                        <button 
                                            id={data} 
                                            onClick={handleLifestyle} 
                                            className={`m-0 mr-3 mb-3 rounded-pill pl-3 pr-3 ${lifestyle.indexOf(data)!==-1 && "btn btn-primary"}`}
                                        >

                                            {data}

                                        </button>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample4">
                    <div className="border-bottom pb-3 mb-3">
                        <div className="p-0" id="headingFour">
                            <div className="mb-0">
                                <button  className="btn btn-block text-left d-flex justify-content-between pl-0 pr-0" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    <h5>My Restaurant is <p><small>select the type of Restaurant you are looking for</small></p></h5>
                                    <div className="accordian-arrow ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="8.031" viewBox="0 0 14.063 8.031">
                                            <path id="Path_389" data-name="Path 389" d="M-7-4.687h0l5.438-5.219a.313.313,0,0,1,.5,0l.969.938a.313.313,0,0,1,0,.5L-6.75-2.094A.338.338,0,0,1-7-2a.338.338,0,0,1-.25-.094l-6.656-6.375a.312.312,0,0,1,0-.5l.969-.937a.313.313,0,0,1,.5,0Z" transform="translate(14.031 10.031)" fill="#232323" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div id="collapseFour" className="collapse show" aria-labelledby="headingFour" data-parent="#accordionExample4">
                            {restaurant_features&&restaurant_features.map((data,index)=>{
                                return(
                                    <React.Fragment key={index}>
                                        <button 
                                            id={data} 
                                            onClick={handleRestaurant} 
                                            className={`m-0 mr-3 mb-3 rounded-pill pl-3 pr-3 ${restaurant.indexOf(data)!==-1 && "btn btn-primary"}`}
                                        >

                                            {data}

                                        </button>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample5">
                    <div className=" pb-3 mb-3">
                        <div className="p-0" id="headingFive">
                            <div className="mb-0">
                                <button  className="btn btn-block text-left d-flex justify-content-between pl-0 pr-0" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    <h5>Restaurant Distance<p><small>select Restaurant Distance</small></p></h5>
                                    <div className="accordian-arrow ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14.063" height="8.031" viewBox="0 0 14.063 8.031">
                                            <path id="Path_389" data-name="Path 389" d="M-7-4.687h0l5.438-5.219a.313.313,0,0,1,.5,0l.969.938a.313.313,0,0,1,0,.5L-6.75-2.094A.338.338,0,0,1-7-2a.338.338,0,0,1-.25-.094l-6.656-6.375a.312.312,0,0,1,0-.5l.969-.937a.313.313,0,0,1,.5,0Z" transform="translate(14.031 10.031)" fill="#232323" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div id="collapseFive" className="collapse show" aria-labelledby="headingFive" data-parent="#accordionExample5">
                            <div>
                                <input  type="checkbox" className="mr-1"/>
                                <label>Near You (Optional)</label>
                            </div>
                            <div className="pl-0">
                                <input type="range" value={distance} onChange={(e)=>{setDistance(e.target.value)}}  className="form-control-range" id="formControlRange"/>
                                <label htmlFor="formControlRange" className="ranage-txt" style={{position:'absolute',left:distance*(width/115)}}>{distance}mi</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mb-3" style={{position:'sticky',bottom:10}}>
                    <button className="p-2 pl-4 pr-4 rounded-pill mr-3">Cancel</button>
                    <button className="p-2 pl-4 pr-4 rounded-pill">Save</button>
                </div>

            </div>
        </section>
        </>
    )
}

export default PreferenceDetailMobilePage;