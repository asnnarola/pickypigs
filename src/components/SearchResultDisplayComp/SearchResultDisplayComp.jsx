import React, { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getAllAllergyData } from '../../redux/actions/allergyAction';
import './SearchResultDisplayComp.scss';

const SearchResultDisplayComp=(props)=>{
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getAllAllergyData())
    },[dispatch])
    let allAllergy_data = useSelector((state)=>{
        return state.allergy.allergy_Data
    });
    let myData=[];
    if(allAllergy_data.data){
    myData =allAllergy_data.data.filter( function (data) {
        return data.name ==props.searchtext
      });
    }
    return(
        <React.Fragment>
            <section className="SearchResultDisplayComp-comp">
                <div className="autoSearch-outline">
                    {/* Default ErrorMessage */}
                    <div className="default-text">
                        <p className="mb-0 oop-text">Oops!</p>
                        <p className="mb-0 desc-text">We could not understand what you mean, try rephrasing the query.</p>

                    </div>
                    <button>ssss</button>
                    <div>
                        {
                            myData&&myData.map((data,index)=>{
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