import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from 'formik';

const data = [
    {
        title: 'Pricing plans',
        category: ["Celery", "Egg", "Fish", "Milk", "Soya", "Mustard", "Fish", "Tree Nuts"],
    },
    {
        title: 'How to apply',
        category: ["aaaa", "bbbb", "cccc", "dddd", "eeee", "ffff", "gggg", "hhhh Nuts"],
    },
    {
        title: 'Purchasing process',
        category: ["Celery", "Egg", "Fish", "Milk", "Soya", "Mustard", "Fish", "Tree Nuts"],
    },
    {
        title: 'Usage guides',
        category: ["Celery", "Egg", "Fish", "Milk", "Soya", "Mustard", "Fish", "Tree Nuts"],
    }
]
const CheckBoxExampleTry = (e) => {
   const  category= ["aaaa", "bbbb", "cccc", "dddd", "eeee", "ffff", "gggg", "hhhh Nuts"];
    return(
        <>
            <div className="container">
                <h1>Sign Up</h1>
                <Formik
                initialValues={{
                    // checked: [],
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                    console.log(values.checked)
                }}
                >
                {({ values }) => (
                    <Form>
                   
                    {data.map((singleData)=>{
                        return(
                            <div>
                                <div id={singleData.title}>{singleData.title}</div>
                                <div role="group" aria-labelledby={singleData.title}>
                                    <div className="row">
                                    {singleData.category.map((boxdata)=>{
                                        return(
                                            <div className="col-md-1">
                                                <label>
                                                    <Field type="checkbox" name={singleData.title} value={boxdata} />
                                                    {boxdata}
                                                </label>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                    

                    <button type="submit">Submit</button>
                    </Form>
                )}
                </Formik>
            </div>
        </>
    )
}

export default CheckBoxExampleTry;