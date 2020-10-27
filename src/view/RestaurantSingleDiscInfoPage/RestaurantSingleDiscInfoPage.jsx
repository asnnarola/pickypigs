import React from "react";
import CheckBoxExampleTry from "../../components/CheckBoxExampleTry/CheckBoxExampleTry";
import SingleDiscDetalDescComp from "../../components/SingleDiscDetalDescComp/SingleDiscDetalDescComp";
import SingleDiscIngredientTableComp from "../../components/SingleDiscIngredientTableComp/SingleDiscIngredientTableComp";
import './RestaurantSingleDiscInfoPage.scss';

const RestaurantSingleDiscInfoPage = () => {
    return (
        <>
            <section className="rsdiscinfo-section">
                <div className="container">

                    {/*Breadcrumb Start*/}
                    <div className="breadcrumb-wrapper">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                    </div>
                    {/*Breadcrumb Ends*/}
                    <div className="row row mt-4 pt-2">
                        <div className="col-md-5 rsdiscinfo-leftcontent">
                            <SingleDiscDetalDescComp />
                        </div>
                        <div className="col-md-7 rsdiscinfo-rightcontent">
                            <SingleDiscIngredientTableComp />
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
