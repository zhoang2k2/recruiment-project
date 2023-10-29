import careerLevels from "../components/CareerLevel/CareerLevelData"
import JobsData from "../components/JobList/JobsData";

import { useParams } from "react-router-dom";

import '../components/CareerLevel/FilterCareerLevel.scss';
import '../views/App/App.scss';

import AltNav from "../components/NavBar/AltNav";
import Footer  from "../components/Footer/Footer"

export function FilterCareerLevel () {

    const { level } = useParams(); //url

    const filteredCareerLevel = careerLevels.find(
        (careerLevel) => careerLevel.level.toLowerCase() === level.toLowerCase(),
    )

    const filteredJobsData = JobsData.filter(
        (filteredData) => filteredData.level.toLowerCase() === filteredCareerLevel.level.toLowerCase(),
    )
    
    return (
        <>
            <AltNav/>
            <div className="container fffcff-bg-color">
                <div className="filter-header">
                    <img src="/src/views/App/assets/imgs/geo-bg.jpg" alt="header picture" />
                </div>
                <div className="filter white-bg">
                    <div className="filter-title">
                        <h1>There are {level.length} vacant positions to fill at <span>{level}</span> level</h1>
                    </div>
                    <div className="filter-job">
                        <div className="filter-job-container">
                            {filteredJobsData.length !== 0 ? ( 
                                filteredJobsData.map((data, index) => {
                                    return (
                                        <div className="filter-job-card f7f1ff-bg-color" key={index}>
                                            <div className="filter-company-logo">
                                                <img src={data.img} alt={data.alt} />
                                            </div>
                                            <div className="job-info">
                                                <h3>{data.position}</h3>
                                                <h4>{data.company}</h4>
                                                <div className="job-jd">
                                                    <p>Due<span>{data.due}</span></p>

                                                    <div className="job-requirement">
                                                        <span>{data.location}</span>
                                                        <span>{data.exp}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-salary">
                                                <p>$ {data.salary}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : <p>No Jobs Recently</p>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}