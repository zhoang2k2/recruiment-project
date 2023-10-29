import JobsData from "../JobList/JobsData";

import './SubSlider.scss';
import './SubSliderAnimation.css';

export function SubSlider () {

    return (
        <div className="card-list">
            {JobsData.map((data, index) => (
                <div className="company-card" key={index}>
                    <img src={data.img} alt={data.alt}/>
                </div>
            ))}
        </div>
    )
}