import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass , faChevronDown , faLocationDot } from "@fortawesome/free-solid-svg-icons";

import './FilterBox.scss'

function FilterBox() {
    return (
        <>
            <div className="filter-box">
                <div className="filter-container">
                    <h1><span>Discover the right job</span> for you right away.</h1>
                    <div className="job-search">
                        <i><FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} /></i>
                        <input type='text' placeholder='Search for vacancies'/>


                        <div className="location-filter">
                            <i><FontAwesomeIcon icon={faLocationDot} /></i>
                            <span>Da Nang</span>
                            <i><FontAwesomeIcon className='arrow-down-icon' icon={faChevronDown} /></i>
                        </div>

                        <button>Search</button>
                    </div>
                </div>
                
                <div className="survey">
                    <div className="business-survey">
                        <h3>Survey for <span>Business</span></h3>
                        <a target='blank' href="https://forms.gle/vhL2bFgwVZfDkdXP8">
                            <img src="https://shout.com/wp-content/uploads/2022/09/Purpose-Of-Survey.png" alt="survey img" />
                        </a>
                    </div>
                    <div className="candidate-survey">
                        <h3>Survey for <span>Candidate</span></h3>
                        <a target='blank' href="https://forms.gle/vhL2bFgwVZfDkdXP8">
                            <img src="https://shout.com/wp-content/uploads/2022/09/Purpose-Of-Survey.png" alt="survey img" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterBox;