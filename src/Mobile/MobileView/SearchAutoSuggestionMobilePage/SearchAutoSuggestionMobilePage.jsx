import React from "react";
import {ReactComponent as Filter} from "../../../assets/images/filtershort-icon.svg"
import { Link,useHistory } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import './SearchAutoSuggestionMobilePage.scss';
import TextField from '@material-ui/core/TextField';

const options = ['The Shawshank Redemption', 'The Godfather',"The Godfather: Part II","The Dark Knight","12 Angry Men","Pulp Fiction"];

const SearchAutoSuggestionMobilePage=()=>{
    const history = useHistory();
    const [value, setValue] = React.useState();
    const [inputValue, setInputValue] = React.useState('');
    return(
        <>
        <section style={{marginTop:90}}>
            <div className="container" style={{height:'100vh'}}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button onClick={history.goBack}><Filter/></button>
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={options}
                        className="w-100 ml-3"
                        renderInput={(params) => <TextField {...params} label="search for restaurant Or receipy" variant="outlined" /> 
                    }
                    />
                </div>
            </div>
        </section>
        </>
    )
}

export default SearchAutoSuggestionMobilePage;