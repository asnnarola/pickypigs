import React from 'react';
import './SearchResultDisplayComp.scss';

const SearchResultDisplayComp=(props)=>{

    return(
        <React.Fragment>
            <section className="SearchResultDisplayComp-comp">
                <div className="autoSearch-outline">
                    {/* Default ErrorMessage */}
                    <div className="default-text">
                        <p className="mb-0 oop-text">Oops!</p>
                        <p className="mb-0 desc-text">We could not understand what you mean, try rephrasing the query.</p>
                    </div>
                    <div>
                        {
                            props.data.map((data,index)=>{
                                return(
                                    <React.Fragment key={index}>
                                        {data.name}
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}

export default SearchResultDisplayComp;