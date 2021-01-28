import React from "react";
import './FirstOverlapedCardComp.scss';

const FirstOverlapedCardComp = (props) => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row workus-wrapper position-relative justify-content-end align-items-center">
                <div className={`shadow_1 leftlist-subwrapper ${props.workslist}`}>
                    <div className="list-wrapper pl-0 mb-0">
                        <p className="pl-3 position-relative mb-3 f-15">{props.detail}</p>
                    </div>
                </div>

                <div className="rightimg-subwrapper">
                    <img src={props.img} className="img-fluid w-100" alt="icon" />
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default FirstOverlapedCardComp;