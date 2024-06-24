import './head.css'
import {Link} from "react-router-dom";


export default function Head() {
    return (
        <div className="head">
            <div className="name">ТРОПЫ КРЫМА</div>
            <Link to='/' className="head-home">ГЛАВНАЯ</Link>
            <Link to='/hiking' className="head-hiking">ПОХОДЫ</Link>
            <Link to='/faq' className="head-faq">FAQ</Link>
            <Link to='/contacts' className="head-contacts button"><span className="gradient"></span>КОНТАКТЫ</Link>
        </div>
    )
}