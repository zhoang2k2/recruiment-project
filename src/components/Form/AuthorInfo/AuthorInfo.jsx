import './AuthorInfo.scss';
import '../../Form/Form.scss';

/* eslint-disable react/no-unescaped-entities */
export default function AuthorInfo () {

    return (
        <div className="author-info">
            <div className="info-head">
                <h3>Let's get in touch!</h3>
                <p>Please contact us for better detailed consult on recruitment services</p>
            </div>

            <div className="info-body">
                <p>Email: nvhoang2012002@business.com</p>
                <p>Hotline: +84 905 000 000</p>
                <p>Address: Hai Chau, Da Nang</p>
            </div>

            {/* DECORATION */}
            <div className="cir-dec-bg fst-cir"></div>
            <div className="cir-dec-bg snd-cir"></div>
            <div className="cir-dec-bg thr-cir"></div>
        </div>
    )
}