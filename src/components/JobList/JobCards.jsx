import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export function JobCards ({ job }) {

    return (
        <>
            <Link
                className="job-card"
                to={`${job.company}/${job.position}`}
            >
                <div className="company-logo">
                    <img src={job.img} alt={job.alt}/>
                </div>

                <div className="job-content">
                    <div className="job-main-content">
                        <h4>{job.position}</h4>
                        <a href="#">{job.company}</a>
                        <p>Net Salary <span>{job.salary}$</span></p>
                    </div>

                    <div className="job-sub-content">
                        <p>{job.exp}</p>
                        <p>{job.location}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}