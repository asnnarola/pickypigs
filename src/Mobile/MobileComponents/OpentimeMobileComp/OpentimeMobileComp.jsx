import React,{useState} from "react";
import clockicon from "../../../assets/images/restaurant-dish/clock-icon.svg";
import moment from 'moment';
import { Button, Collapse } from "react-bootstrap";
import './OpentimeMobileComp.scss';


const OpentimeMobileComp=()=>{
    const [open, setOpen] = useState(false);
    let myDay=moment().format('dddd');
    let myTime=moment();
    const restaurantTime1=`${moment().format('MMMM Do YYYY')}, 7:00 am`;
    const restaurantTime2=`${moment().format('MMMM Do YYYY')}, 9:00 am`;
    const restaurantTime3=`${moment().format('MMMM Do YYYY')}, 12:30 am`;
    const restaurantTime4=`${moment().format('MMMM Do YYYY')}, 11:30 pm`;

    const compareData=(open,close,now)=>{
        // (moment(open, 'MMMM Do YYYY, h:mm a').isValid() && now.isAfter(moment(open, 'MMMM Do YYYY, h:mm a')) )&&(moment(close, 'MMMM Do YYYY, h:mm a').isValid() && now.isBefore(moment(close, 'MMMM Do YYYY, h:mm a')) )?"Open now":">Closed now"
        if(moment(open, 'MMMM Do YYYY, h:mm a').isValid() && now.isAfter(moment(open, 'MMMM Do YYYY, h:mm a')) ){
           if(moment(close, 'MMMM Do YYYY, h:mm a').isValid() && now.isBefore(moment(close, 'MMMM Do YYYY, h:mm a')) ){
                return "Open Now"
           }else{
                return "Closed Now"
        }
        }else{
            return "Closed Now"
        }
    }
    return(
        <>
        <section className="openTimeMobile-content">
            <div className="rs-opendropdown w-100 position-relative">
                <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} className={`d-flex rs-opendropdown-btn w-100 ${open?"active":null}`}>
                    <div className="rs-timeimg mr-3">
                        <img src={clockicon} alt={"clockicon"} className="img-fluid" />
                    </div>
                    <div className={`text-left ${open ? "" : null}`}>

                        <p className="mb-1 text-dark">
                            {
                            myDay==="Monday"
                                ?
                                compareData(restaurantTime2,restaurantTime4,myTime)
                                :
                            myDay==="Wednesday"
                                ?
                                compareData(restaurantTime2,restaurantTime4,myTime)
                                :
                            myDay==="Thursday"
                                ?
                                compareData(restaurantTime2,restaurantTime4,myTime)
                                :
                            myDay==="Friday"
                                ?
                                compareData(restaurantTime2,restaurantTime4,myTime)
                                :
                            myDay==="Saturday"
                                ?
                                compareData(restaurantTime1,restaurantTime3,myTime)
                                :
                            myDay==="Sunday"
                                ?
                                compareData(restaurantTime1,restaurantTime3,myTime)
                                : 
                                "Today Close"
                            }
                        </p>   
                        
                        <p className="txt-lightgray mb-0 brandon-Medium">{myDay==="Monday"? "Monday 9:00 am - 11:30 pm"
                            :myDay==="Tuesday"? "Tuesday Closed / Holiday"
                            :myDay==="Wednesday"? "Wednesday 9:00 am - 11:30 pm"
                            :myDay==="Thursday"? "Thursday 9:00 am - 11:30 pm"
                            :myDay==="Friday"? "Friday 9:00 am to 11:00 pm"
                            :myDay==="Saturday"? "Saturday 7:00 am to 12:00 am"
                            :"Sunday 7:00 am to 12:00 am"}
                        </p>
                    </div>
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <table>
                            <tbody>
                                <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Sunday"&&"pink-txt brandon-Medium"}`}>Sunday</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Sunday"&&"pink-txt brandon-Medium"}`}>7:00 am - 12:30 am</p></td></tr>
                                <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Monday"&&"pink-txt brandon-Medium"}`}>Monday</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Monday"&&"pink-txt brandon-Medium"}`}>9:00 am - 11:30 pm</p></td></tr>
                                <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Tuesday"&&"pink-txt brandon-Medium"}`}>Tuesday</p></td><td><p style={{color:'#f545b0'}} className={`txt-lightgray mb-2 ${myDay==="Tuesday"&&"pink-txt brandon-Medium"}`}>Closed / Holiday</p></td></tr>
                                <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Wednesday"&&"pink-txt brandon-Medium"}`}>Wednesday&nbsp;&nbsp;</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Wednesday"&&"pink-txt brandon-Medium"}`}>9:00 am - 11:30 pm</p></td></tr>
                                <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Thursday"&&"pink-txt brandon-Medium"}`}>Thursday</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Thursday"&&"pink-txt brandon-Medium"}`}>9:00 am - 11:30 pm</p></td></tr>
                                <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Friday"&&"pink-txt brandon-Medium"}`}>Friday</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Friday"&&"pink-txt brandon-Medium"}`}>9:00 am - 11:30 pm</p></td></tr>
                                <tr><td><p className={`txt-lightgray mb-2 ${myDay==="Saturday"&&"pink-txt brandon-Medium"}`}>Saturday</p></td><td><p className={`txt-lightgray mb-2 ${myDay==="Saturday"&&"pink-txt brandon-Medium"}`}>7:00 am - 12:30 am</p></td></tr>
                            </tbody>
                        </table>
                    </div>
                </Collapse>
            </div>
        </section>
        </>
    )
}

export default OpentimeMobileComp;