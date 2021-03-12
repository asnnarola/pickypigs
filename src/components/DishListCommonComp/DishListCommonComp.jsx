import React, { useState,useEffect} from 'react'
import './DishListCommonComp.scss'
import {Link as MyLink} from 'react-router-dom';
import DiscDescriptionComp from '../DiscDescriptionComp/DiscDescriptionComp';

const DishListCommonComp=({selected_data,datatoshow,handleDataToShow})=>{
    return(
        <React.Fragment>
            <section className="dishListcommoncomp">
                                    <div className="row">
                                        {selected_data&&selected_data.data&&selected_data.data.length>0?
                                            <React.Fragment>
                                                {
                                                    selected_data&&selected_data.data&&selected_data.data.length>6?
                                                        <React.Fragment>
                                                            {selected_data&&selected_data.data&&selected_data.data.slice(0, datatoshow).map((data, index) => {
                                                                return (
                                                                    <div key={index} className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
                                                                        <MyLink to={'/restaurant_dish_info/' + data._id} style={{textDecoration:'none',color:'initial'}}>
                                                                            <DiscDescriptionComp
                                                                                dish_name={data.name?data.name:''}
                                                                                dish_image={data.dishPhoto?data.dishPhoto:''}
                                                                                dish_priceunit={data.dishPriceUnit?data.dishPriceUnit:''}
                                                                                dish_price={data.dishPrice?data.dishPrice:'-'}
                                                                                dish_description={data.description?data.description:''}
                                                                                dish_menu={data.menuList?data.menuList:[]}
                                                                                dish_allergy={data.allergensList?data.allergensList:[]}
                                                                                dish_new_tag={data.new?data.new:false}
                                                                            />
                                                                        </MyLink>
                                                                    </div>
                                                                )
                                                            })}
                                                        </React.Fragment>
                                                :
                                                    <React.Fragment>
                                                        {selected_data&&selected_data.data&&selected_data.data.map((data, index) => {
                                                            return (
                                                                <div key={index} className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
                                                                    <MyLink to={'/restaurant_dish_info/' + data._id} style={{textDecoration:'none',color:'initial'}}>
                                                                        <DiscDescriptionComp
                                                                            dish_name={data.name?data.name:''}
                                                                            dish_image={data.dishPhoto?data.dishPhoto:''}
                                                                            dish_priceunit={data.dishPriceUnit?data.dishPriceUnit:''}
                                                                            dish_price={data.dishPrice?data.dishPrice:'-'}
                                                                            dish_description={data.description?data.description:''}
                                                                            dish_menu={data.menuList?data.menuList:[]}
                                                                            dish_allergy={data.allergensList?data.allergensList:[]}
                                                                            dish_new_tag={data.new?data.new:false}
                                                                        />
                                                                    </MyLink>
                                                                </div>
                                                            )
                                                        })}
                                                    </React.Fragment>
                                                }
                                                {selected_data&&selected_data.totalRecords>(datatoshow+1) ?
                                                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                                        <button onClick={()=>handleDataToShow(datatoshow+3)} className="btn filter-morebtn w-100" style={{ maxHeight: 270 }}>
                                                            <h4 className="brandon-Bold"><b>+{selected_data&&selected_data.totalRecords&&selected_data.totalRecords - datatoshow} MORE</b></h4>
                                                        </button>
                                                    </div>
                                                    :
                                                    null
                                                }
                                            </React.Fragment>
                                        :
                                            <p>No Data Available</p>
                                        }
                                       
                                    </div>
            </section>
        </React.Fragment>
    )
}

export default DishListCommonComp;
