/* eslint-disable react/prop-types */
import { PaginationLogic } from "../Pagination/PaginationLogic";
import { JobCards } from "./JobCards";

import './Joblist.scss'

// eslint-disable-next-line react/prop-types
export function JobList () {

    // const jobsData = JobsData()

    return (
        <>
            <div className="content-container">
                <div className="white-bg">
                    <div className="jobs-list">
                        <JobCards />
                        <PaginationLogic />
                    </div>
                </div>
            </div>
        </>
    )
}