import careerLevels from "./CareerLevelData";
import JobsData from "../JobList/JobsData";

import './CareerLevel.scss';
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import './SlickBtn.scss'

export function CareerLevelCard () {

    //COUNT WITHIN CAREER LEVEL
    const countLevel = (level) => {
        const filteredData = JobsData.filter(data => data.level.toLowerCase() === level.toLowerCase());
        return filteredData.length;
    };

    // SLIDER
    const settings = {
        infinite: false,
        speed: 800,
        slidesToShow: 3.5,
        slidesToScroll: 2,
    };


    return (
        <>
            <Slider {...settings} className="career-level-container">
                {careerLevels.map((careerLevel, index) => {
                    const count = countLevel(careerLevel.level);

                    return (
                        <Link 
                            to={"/career-level/" + careerLevel.level} 
                            className="career-level-card" 
                            key={index}
                        >
                            <div className="job-level-title">
                                <img src={careerLevel.img} alt={careerLevel.alt} />
                                <h2>{careerLevel.level}</h2>
                            </div>
                            <div className="total-job-level">
                                <p><span>{count}</span> jobs at the moment</p>
                            </div>
                        </Link>
                    )
                })}
            </Slider>
        </>
    )
}