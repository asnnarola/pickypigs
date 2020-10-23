import React from "react";
import RestaurentDiscAllergiesInfoModal from "../RestaurentDiscAllergiesInfoModal/RestaurentDiscAllergiesInfoModal";
import RestaurentDiscCaloriesInfoModal from "../RestaurentDiscCaloriesInfoModal/RestaurentDiscCaloriesInfoModal";

const SingleDiscIngredientTableComp=()=>{
    let ingredient=[{"serving":36.9,"ingredient":"raw broccoli","allergies":"","amend":"no"},{"serving":12.9,"ingredient":"cheese","allergies":"dairy","amend":"yes"},{"serving":15.5,"ingredient":"potatoes","allergies":"","amend":"yes"},{"serving":20.5,"ingredient":"lenties","allergies":"","amend":"yes"},{"serving":15.5,"ingredient":"olives","allergies":"","amend":"yes"},{"serving":50.5,"ingredient":"peanuts","allergies":"peanuts","amend":"yes"},{"serving":15.5,"ingredient":"housing dressing","allergies":"","amend":"yes"}]

    return(
        <>
        <section>
            <div className="container">
                <h1>SingleDiscIngredientTableComp</h1>
                <div className="col">
                            <div className="d-flex">
                                <p>sssss</p>
                                <h3>Ingredients</h3>
                            </div>
                            <div>
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Serving</th>
                                    <th scope="col">Ingredient</th>
                                    <th scope="col">Allergies</th>
                                    <th scope="col">Amend</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ingredient.map((data,index)=>{
                                        return(
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
                            <div>
                                <RestaurentDiscCaloriesInfoModal/>
                                <RestaurentDiscAllergiesInfoModal/>
                            </div>
                        </div>
            </div>
        </section>
        </>
    )
}

export default SingleDiscIngredientTableComp;
