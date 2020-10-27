import React from "react";
import RestaurentDiscAllergiesInfoModal from "../RestaurentDiscAllergiesInfoModal/RestaurentDiscAllergiesInfoModal";
import RestaurentDiscCaloriesInfoModal from "../RestaurentDiscCaloriesInfoModal/RestaurentDiscCaloriesInfoModal";
import './SingleDiscIngredientTableComp.scss';
import Ingredientsicon from "../../assets/images/dishinfo_img/Ingredients-icon.svg";

const SingleDiscIngredientTableComp = () => {
    let ingredient = [{ "serving": 36.9, "ingredient": "raw broccoli", "allergies": "", "amend": "no" }, { "serving": 12.9, "ingredient": "cheese", "allergies": "dairy", "amend": "yes" }, { "serving": 15.5, "ingredient": "potatoes", "allergies": "", "amend": "yes" }, { "serving": 20.5, "ingredient": "lenties", "allergies": "", "amend": "yes" }, { "serving": 15.5, "ingredient": "olives", "allergies": "", "amend": "yes" }, { "serving": 50.5, "ingredient": "peanuts", "allergies": "peanuts", "amend": "yes" }, { "serving": 15.5, "ingredient": "housing dressing", "allergies": "", "amend": "yes" }]

    return (
        <>
            <div className="Ingredients-wrapper mb-4">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="Ingredients-head d-flex align-items-start mb-3">
                            <div className="Ingredients-img position-absolute">
                                <img src={Ingredientsicon} alt="" className="img-fluid " />
                            </div>
                            <h4 class="pl-4 ml-3 mb-0 txt-darkgreen mb-0">Ingredients</h4>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" className="txt-lightgray fw-400">Serving</th>
                                <th scope="col" className="txt-lightgray fw-400">Ingredient</th>
                                <th scope="col" className="txt-lightgray fw-400">Allergies</th>
                                <th scope="col" width="50px" className="txt-lightgray fw-400">Amend</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingredient.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{data.serving}</th>
                                        <td>{data.ingredient}</td>
                                        <td>{data.allergies}</td>
                                        <td>{data.amend}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
                <RestaurentDiscCaloriesInfoModal />
                <RestaurentDiscAllergiesInfoModal />
            </div>

        </>
    )
}

export default SingleDiscIngredientTableComp;
