import React,{useState,useEffect} from "react";
import RestaurentDiscAllergiesInfoModal from "../RestaurentDiscAllergiesInfoModal/RestaurentDiscAllergiesInfoModal";
import RestaurentDiscCaloriesInfoModal from "../RestaurentDiscCaloriesInfoModal/RestaurentDiscCaloriesInfoModal";
import './SingleDiscIngredientTableComp.scss';
import Ingredientsicon from "../../assets/images/dishinfo_img/Ingredients-icon.svg";
import { useDispatch,useSelector } from "react-redux";
import { getNutritionData } from "../../redux/actions/generalActions";

const SingleDiscIngredientTableComp = () => {
    let ingredient = [{ "serving": 36.9, "ingredient": "raw broccoli", "allergies": "", "amend": "no" }, { "serving": 12.9, "ingredient": "cheese", "allergies": "dairy", "amend": "yes" }, { "serving": 15.5, "ingredient": "potatoes", "allergies": "", "amend": "yes" }, { "serving": 20.5, "ingredient": "lenties", "allergies": "", "amend": "yes" }, { "serving": 15.5, "ingredient": "olives", "allergies": "", "amend": "yes" }, { "serving": 50.5, "ingredient": "peanuts", "allergies": "peanuts", "amend": "yes" }, { "serving": 15.5, "ingredient": "housing dressing", "allergies": "", "amend": "yes" }]
    const dispatch=useDispatch();

    const title="Fresh Ham Roasted With Rye Bread and Dried Fruit Stuffing";
    const ingr=[
        "1 fresh ham, about 18 pounds, prepared by your butcher (See Step 1)",
        "7 cloves garlic, minced",
        "1 tablespoon caraway seeds, crushed",
        "4 teaspoons salt",
        "Freshly ground pepper to taste",
        "1 teaspoon olive oil",
        "1 medium onion, peeled and chopped",
        "3 cups sourdough rye bread, cut into 1/2-inch cubes",
        "1 1/4 cups coarsely chopped pitted prunes",
        "1 1/4 cups coarsely chopped dried apricots",
        "1 large tart apple, peeled, cored and cut into 1/2-inch cubes",
        "2 teaspoons chopped fresh rosemary",
        "1 egg, lightly beaten",
        "1 cup chicken broth, homemade or low-sodium canned"
      ];

    useEffect(()=>{
        dispatch(getNutritionData({title,ingr}))
    },[dispatch]);

   
    const selectedNutritionInfo = useSelector((state) => state.general);

    let {isLoading,nutrition_Data}=selectedNutritionInfo;
    

    return (
        <>
        {/* {JSON.stringify(nutrition_Data)} */}
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
