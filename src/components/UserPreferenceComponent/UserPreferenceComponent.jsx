import React,{useState} from "react";
import './UserPreferenceComponent.scss';
import Nonveg_icon from "../../assets/images/filterfeature/Nonveg_icon.svg"

const alergy_information=[{name:"Egg",image:Nonveg_icon},{name:"Milk",image:Nonveg_icon},{name:"Celery",image:Nonveg_icon},{name:"Mustard",image:Nonveg_icon},{name:"Lupin",image:Nonveg_icon},{name:"Nuts",image:Nonveg_icon},{name:"Peanuts",image:Nonveg_icon},{name:"Sesame",image:Nonveg_icon},{name:"Molluscs",image:Nonveg_icon},{name:"Crustaceans",image:Nonveg_icon},{name:"Fish",image:Nonveg_icon},{name:"Cereals (Wheat)",image:Nonveg_icon},{name:"Soya",image:Nonveg_icon},{name:"Sulphur dioxide",image:Nonveg_icon}];
const dietary_preference=["Pescatarian","Vegetarian","Plant Based","Low gluten","Lactose free","Halal","Kosher","Low sugar"];
const lifestyle_choice=["Organic","Vegan","Pregnant"];
const restaurant_features=["Pet Friendly","Child friendly","Live music","Outside sitting","Disabled access","Reservations needed","Bring your own","Large parties accepted","Private dining room","Table service","Bar service","Holding bar","R20","Take away"];

const UserPreferenceComponent = () => {


    let [alergy, setAlergy] = useState([]);
    let [dietary, setDietary] = useState([]);
    let [lifestyle, setLifestyle] = useState([]);
    let [restaurant, setRestaurant] = useState([]);

    const handleAlergy=(e)=>{
        e.preventDefault();
        if(alergy.indexOf(e.target.id) !== -1){
            var Index = alergy.indexOf(e.target.id);
            if(Index>-1){
                setAlergy(alergy.slice(0,Index).concat(alergy.slice(Index+ 1, alergy.length)));
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
                setDietary(dietary.slice(0,Index).concat(dietary.slice(Index+ 1, dietary.length)));
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
                setLifestyle(lifestyle.slice(0,Index).concat(lifestyle.slice(Index+ 1, lifestyle.length)));
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
                setRestaurant(restaurant.slice(0,Index).concat(restaurant.slice(Index+ 1, restaurant.length)));
            }
        }else{
            setRestaurant([...restaurant,e.target.id]);
        }
    }


    return (
        <>
            <section >
                {alergy}--{dietary}--{lifestyle}--{restaurant}
                <div>
                    <p>You don't have set your preferences</p>
                    <p>Please set your preferences, so we can show you the best results according to your preferences</p>
                </div>
                <div>
                    <p>ALLERGEN INFORMATION</p>
                    
                    <div>
                        {alergy_information&&alergy_information.map((data,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <button 
                                        id= {data.name} 
                                        onClick={handleAlergy} 
                                        className={`mr-3 ${alergy.indexOf(data.name)!==-1 && "btn btn-primary"}`}
                                    >
                                        <img src={data.image} className="img-fluid" />
                                        {data.name}
                                    </button>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <p>DIETARY PREFERENCES</p>
                    <div>
                        {dietary_preference&&dietary_preference.map((data,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <button 
                                        id={data} 
                                        onClick={handleDietaryPreference} 
                                        className={`mr-3 ${dietary.indexOf(data)!==-1 && "btn btn-primary"}`} 
                                    >
                                        {data}

                                    </button>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <p>LIFESTYLE CHOICE</p>
                    <div>
                        {lifestyle_choice&&lifestyle_choice.map((data,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <button 
                                        id={data} 
                                        onClick={handleLifestyle} 
                                        className={`mr-3 ${lifestyle.indexOf(data)!==-1 && "btn btn-primary"}`}
                                    >

                                        {data}

                                    </button>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <p>RESTAURANT FEATURES</p>
                    <div>
                        {restaurant_features&&restaurant_features.map((data,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <button 
                                        id={data} 
                                        onClick={handleRestaurant} 
                                        className={`mr-3 ${restaurant.indexOf(data)!==-1 && "btn btn-primary"}`}
                                    >

                                         {data}

                                    </button>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserPreferenceComponent;