import '../views/App/App.scss';
import '../views/App/assets/fonts/fonts.css';

import Navbar from "../components//NavBar/Navbar";
import FilterBox from "../components/Header/FilterBox/FilterBox";
import VideosAndSurveys from '../components/Header/VideosAndSurvey/VideosAndSurveys';
import { SubSlider } from "../components/SubSlider/SubSlider";
import { CareerLevelCard } from "../components/CareerLevel/CareerLevelCard";
import { JobList } from '../components/JobList/JobList';
import HandBook from "../components/HandbookSection/Handbook";
import AuthorInfo from '../components/Form/AuthorInfo/AuthorInfo';
import BusinessInput from '../components/Form/BusinessInput/BusinessInput';
import Footer from '../components/Footer/Footer';


export default function Home () {

    return (
        <>
            <Navbar /> 
            <div className="container">
                <div id="header">
                    <div className="header-bg">
                        <div className="header-container">
                            <FilterBox />
                            <VideosAndSurveys />
                        </div>
                    </div>
                </div>

                <div id="sub-slider">
                    <div className="sub-slider-container">
                        <SubSlider />
                        <SubSlider />
                    </div>
                </div>

                <div id="career-level">
                    <CareerLevelCard/>
                    {/* <ScrollBtn /> */}
                </div>

                <div id="content">
                    <h1>List of vacant positions</h1>
                    <JobList />
                </div>

                <div id="form">
                    <h1>Recruitment Sevice Consultation</h1>
                    <div className="form-container">
                        <AuthorInfo />
                        <BusinessInput />
                    </div>
                </div>

                <div id="handbook">
                    <h1>Handbooks for candidates</h1>
                    <div className="handbook-container">
                        <HandBook />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}