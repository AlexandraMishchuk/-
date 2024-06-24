import './contacts.css'

export default function Contacts() {
    return (
        <div className="contacts">
            <div className="form">
                <p>Заполните заявку</p>
                <form className="contact" action="" method="post">
                    <fieldset>
                        <input placeholder="Имя" type="text" tabIndex="1" required autoFocus></input>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Email" type="email" tabIndex="2" required></input>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Телефон" type="tel" tabIndex="3" required></input>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Когда с Вами можно связаться" type="text" tabIndex="4" required></input>
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Комментарий" tabIndex="5" required></textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" className="contact-submit">Отправить</button>
                    </fieldset>
                </form>
            </div>
            <div className="call">
                <p>Или свяжитесь с нами самостоятельно</p>
                <br/>
                <img className="contact_img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"></img>
                <p className="small_text">+7 928 608 43 25</p>
                <img className="contact_img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"></img>
                <p className="small_text">mishchuk@sfedu.ru</p>
                <img className="contact_img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"></img>
                <p className="small_text">Республика Крым, город Ялта, пгт Гурзуф, ул. Подвойского, дом 52</p>
            </div>
        </div>
    );
}