import './BusinessInput.scss';
import '../../Form/Form.scss';

export default function BusinessInput () {
    return (
        <>
            <div className="business-form">
                <div className="name-hotline">
                    <div className="business-name">
                        <p>Company name:</p>
                        <input type="text" placeholder='Type your company name...'/>
                    </div>
                    <div className="business-hotline">
                        <p>Company hotline:</p>
                        <input type="text" placeholder='Type your company hotline...'/>
                    </div>
                </div>
                <div className="email">
                    <p>Your company/personal email:</p>
                    <input type="email" placeholder='Type your email...'/>
                </div>
                <div className="service-question">
                    <div className="service-concern">
                        <p>Choose your demands:</p>
                        <input type="text" placeholder='You are considering in...'/>
                    </div>
                    <div className="question">
                        <p>How can we help you?</p>
                        <input type="text" placeholder='Please type your questions'/>
                    </div>
                </div>
                <div className="additional-question">
                    <p>Addtional Question:</p>
                    <textarea type="text" placeholder='Please, type any concerns of your about our service.&#10;So we consule more details for you.'/>
                </div>

                <button>SUBMIT</button>
            </div>
        </>
    )
}