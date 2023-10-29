// import { Link } from "react-router-dom";
import JobsData from "./JobsData";

/* eslint-disable react/prop-types */
export function JobCards () {

    return (
        <>
            {JobsData.map((data, index) => {
                if (data.position === "") {
                    return null
                } else {
                    return (
                        <div
                            className="job-card"
                            key={index}
                        >
                            <div className="company-logo">
                                <img src={data.img} alt={data.alt}/>
                            </div>
            
                            <div className="job-content">
                                <div className="job-main-content">
                                    <h4>{data.position}</h4>
                                    <a href="#">{data.company}</a>
                                    <p>Net Salary <span>{data.salary}$</span></p>
                                </div>
            
                                <div className="job-sub-content">
                                    <p>{data.exp}</p>
                                    <p>{data.location}</p>
                                </div>
                            </div>
                        </div>
                    )
                } 
            })}
        </>
    )
}