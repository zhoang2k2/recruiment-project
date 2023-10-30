/* eslint-disable react/prop-types */
import { JobCards } from "./JobCards";
import './Joblist.scss'


// eslint-disable-next-line react/prop-types
export function JobList ({jobsData}) {

    return (
        <>
            <div className="jobs-list">
                {
                    jobsData.map((item, index) => (
                        <JobCards job={item} key={index} />
                    ))
                }
            </div>
        </>
    )
}