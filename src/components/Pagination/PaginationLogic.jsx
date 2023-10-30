/* eslint-disable no-unused-vars */
import JobsData from '../JobList/JobsData';
import Pagination from './Pagination';
import { JobList } from '../JobList/JobList';

import { useState } from 'react';


export function PaginationLogic () {

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(12);
  
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
  
    const currentPosts = JobsData.slice(firstPostIndex, lastPostIndex);

    return (
        <>
            <JobList jobsData={currentPosts}/>
            <Pagination 
                totalPost={JobsData.length} 
                postPerPage={postPerPage} 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
}