import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import CheckBoxExampleTry from "../../components/CheckBoxExampleTry/CheckBoxExampleTry";
import SingleDiscDetalDescComp from "../../components/SingleDiscDetalDescComp/SingleDiscDetalDescComp";
import SingleDiscIngredientTableComp from "../../components/SingleDiscIngredientTableComp/SingleDiscIngredientTableComp";
import RestaurentDiscAllergiesInfoModal from "../../components/RestaurentDiscAllergiesInfoModal/RestaurentDiscAllergiesInfoModal";
import RestaurentDiscCaloriesInfoModal from "../../components/RestaurentDiscCaloriesInfoModal/RestaurentDiscCaloriesInfoModal";
import './RestaurantSingleDiscInfoPage.scss';
import RestaurantCookingMethodModal from "../../components/RestaurantCookingMethodModal/RestaurantCookingMethodModal";
import { getSelectedDiscInfoData } from '../../redux/actions/dishAction'
import CustomLoadingComp from '../../components/CustomLoadingComp/CustomLoadingComp';

const RestaurantSingleDiscInfoPage = () => {
    const params=useParams();
	const  dishInfoId  = params.dishId;
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getSelectedDiscInfoData(dishInfoId));
    },[dispatch,dishInfoId]);

    let selectedDiscInfo_data = useSelector((state) => {
        return state.dishes.selectedDiscInfo_Data
    });

    let myLoading = useSelector((state) => {
        return state.dishes.isDishLoading
    });

    return (
        <>
                    {/* {JSON.stringify(selectedDiscInfo_data)} */}
            <React.Fragment>
                {myLoading&&myLoading?
                    <CustomLoadingComp/>
                :
                    null
                }
            </React.Fragment>
            <section className="rsdiscinfo-section">
                <div className="container">

                    {/*Breadcrumb Start*/}
                    <div className="breadcrumb-wrapper">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item text-capitalize"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item text-capitalize"><Link to="/restaurant_list">Restaurants</Link></li>
                                <li className="breadcrumb-item text-capitalize" aria-current="page"><Link to={'/restaurant/'+(selectedDiscInfo_data&&selectedDiscInfo_data.restaurantId?selectedDiscInfo_data.restaurantId:'')}>{selectedDiscInfo_data&&selectedDiscInfo_data.restaurantName?selectedDiscInfo_data.restaurantName:'Unknown'}</Link></li>
                                <li className="breadcrumb-item active text-capitalize" aria-current="page">{selectedDiscInfo_data&&selectedDiscInfo_data.name?selectedDiscInfo_data.name:'Unknown'}</li>
                            </ol>
                        </nav>
                    </div>
                    {/*Breadcrumb Ends*/}
                    <div className="row mt-4 pt-2 mb-4">
                        <div className="col-md-5 rsdiscinfo-leftcontent">
                            <SingleDiscDetalDescComp 
                                itemimage={selectedDiscInfo_data&&selectedDiscInfo_data.image?selectedDiscInfo_data.image:''}
                                name={selectedDiscInfo_data&&selectedDiscInfo_data.name?selectedDiscInfo_data.name:'Not Available'}
                                price={selectedDiscInfo_data&&selectedDiscInfo_data.price?selectedDiscInfo_data.price:'Not Available'}
                                priceunit={selectedDiscInfo_data&&selectedDiscInfo_data.priceUnit?selectedDiscInfo_data.priceUnit:'$'}
                                description={selectedDiscInfo_data&&selectedDiscInfo_data.description?selectedDiscInfo_data.description:'Not Available'}
                                allergydetail={selectedDiscInfo_data&&selectedDiscInfo_data.allergensDetail?selectedDiscInfo_data.allergensDetail:[]}
                                dish_new_tag={selectedDiscInfo_data&&selectedDiscInfo_data.new?selectedDiscInfo_data.new:false}
                            />
                        </div>
                        <div className="col-md-7 rsdiscinfo-rightcontent">
                            <SingleDiscIngredientTableComp ingredient={selectedDiscInfo_data&&selectedDiscInfo_data.ingredientSection&&selectedDiscInfo_data.ingredientSection.dish_ingredients?selectedDiscInfo_data.ingredientSection.dish_ingredients:[]}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <RestaurantCookingMethodModal/>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <RestaurentDiscCaloriesInfoModal />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <RestaurentDiscAllergiesInfoModal 
                                caloriesandmacrosdetail={selectedDiscInfo_data&&selectedDiscInfo_data.caloriesandmacrosDetail?selectedDiscInfo_data.caloriesandmacrosDetail:{}}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </section>
        </>
    )
}

export default RestaurantSingleDiscInfoPage;
