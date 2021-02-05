import React from 'react'
import { Form } from 'react-bootstrap';
import { Picky } from 'react-picky';
import "./CustomDropdown.scss"

const CustomDropdown = ({ placeholder,clearAll, labelKey = "name", valueKey = "_id", options, value, onChangeData, className = "" }) => {
    // const [state, setstate] = useState(false)
    // const addClass = () => {
    //     console.log('Hiiiiiiiiiii', state);
    //     setstate(true)
    // }
    // console.log('Hiiiiiiiiiii out', state);
    return (
        <div>
        <Picky
            buttonProps={{
                className: 'testing'
            }}
            placeholder={placeholder}
            numberDisplayed={0}
            options={options}
            labelKey={labelKey}
            valueKey={valueKey}
            multiple={true}
            includeFilter={false}
            includeSelectAll={false}
            value={value}
            onChange={onChangeData}
            className={`filterdropdown ${className}`}
            render={({
                style,
                isSelected,
                item,
                selectValue,
                labelKey,
                valueKey,
                multiple,
                getIsSelected 
            }) => {
                return (
                    <div key={item} className="filter-listcheck">
                        
                        {value&&value.length>0?
                       <div className="clearall-link mr-3">
                       <button onClick={clearAll}>
                           Clear all
                       </button>
                   </div>
                        :null}
                        <Form>
                                <div className="mb-2">
                                    <Form.Check
                                        key={item[valueKey]} // required
                                        onChange={() => selectValue(item)}
                                        custom
                                        inline
                                        checked={isSelected}
                                        label={item}
                                        className="filterdrop-checkbox"
                                        type="checkbox"
                                        id={item}
                                    />
                                </div>
                        </Form>

                    </div>
                );
            }}
        />
        </div>
    )
}

export default CustomDropdown
