import './home.css'
import Hiking from "../../articlecomps/hiking/hiking";
import Faq from "../../articlecomps/faq/faq";
import Contacts from "../../articlecomps/contacts/contacts";
import {Routes, Route, Link} from "react-router-dom"

export default function Home() {
    return (
        <div className="home">
            <p className="title">Индивидуальные авторские туры по Крыму</p>
            <p>Настоящие приключения <br/> начинаются здесь!</p>
            <footer className="footer">
                <Link to='/hiking' className="button1">Выбрать маршрут</Link>
                <Link to='/contacts' className="button2">Оставить заявку</Link>
            </footer>
            <Routes>
                <Route path="/hiking" element={<Hiking/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <Routes>
                <Route path="/hiking" element={<Hiking/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/faq" element={<Faq/>}/>
            </Routes>
        </div>
    );
}