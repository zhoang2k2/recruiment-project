import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot , faEnvelope , faPhone , faCopyright} from "@fortawesome/free-solid-svg-icons";
import { FaFacebookSquare, FaLinkedin , FaGlobe } from 'react-icons/fa';

import './Footer.scss';

export default function Footer () {
    return (
        <div id="footer">
            <div className="footer-container">
                <div className="author">
                    <div className="about-author">
                        <h1>About us</h1>
                        <p>
                            With the responsibility of providing human resources and training talents in the IT industry.
                            We act as one of the main committees that bring your company to its goals
                        </p>
                    </div>

                    <div className="author-contact">
                        <h2>Contact us via</h2>

                        <div className="author-address">
                            <i><FontAwesomeIcon icon={faLocationDot} /></i>
                            Hai Chau, Da Nang
                        </div>

                        <div className="author-hotline">
                            <i><FontAwesomeIcon icon={faPhone} /></i>
                            +84 905 000 000
                        </div>

                        <div className="author-email">
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
                            nvhoang2012002@business.com
                        </div>
                    </div>

                    <div className="author-media">
                        <h2>Our social media</h2>
                        <div className="media">
                            <a href="https://www.facebook.com/profile.php?id=100013495800985">
                                <FaFacebookSquare />
                            </a>

                            <a href="https://www.linkedin.com/in/hoangnv02">
                                <FaLinkedin />
                            </a>

                            <a href="https://www.facebook.com/groups/vldn.degithatnghiep">
                                <FaGlobe />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <i><FontAwesomeIcon icon={faCopyright} /></i>
                    <p>2023 - Copyright belongs to ZHoang</p>
                </div>
            </div>
        </div>
    )
}