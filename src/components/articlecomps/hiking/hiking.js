import './hiking.css'
export default function Hiking(){
    return (
        <div className="hiking">
            <ul className="cards">
                <li>
                    <div className="card">
                        <img src="https://www.gur-gur.ru/mt-content/uploads/2019/07/botkinskaya-tropa.jpg" className="card_image" alt="Боткинская тропа" />
                        <div className="card_overlay">
                            <div className="card_header">
                                <p className="card_title">Боткинская тропа</p>
                                <p className="card_status">от 1 700 руб</p>
                            </div>
                            <button>Подробнее</button>
                            <p className="card_description">Маршрут начинается с «Поляны Сказок» и тянется до скалы Ставри-Кая. На Боткинской тропе путь пролегает в тени реликтовых деревьев. Маршрут легкий и подходит для новичков.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src="https://avatars.dzeninfra.ru/get-zen_doc/5231775/pub_623f48ee81af7b0dd94cbeec_623f5fbf18cfc01044f66caa/scale_1200" className="card_image" alt="Таракташская тропа" />
                        <div className="card_overlay">
                            <div className="card_header">
                                <p className="card_title">Таракташская тропа</p>
                                <p className="card_status">от 2 900 руб</p>
                            </div>
                            <button>Подробнее</button>
                            <p className="card_description">Таракташская тропа берет начало у водопада Учан-Су, проходит по Ялтинской яйле вдоль скального гребня и заканчивается у плато Ай-Петри. Маршрут нелегкий.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src="https://sudak-tok.ru/templates/yootheme/cache/tropa-golitsyina-a90e2fbb.jpeg" className="card_image" alt="Тропа Голицина" />
                        <div className="card_overlay">
                            <div className="card_header">
                                <p className="card_title">Тропа Голицина</p>
                                <p className="card_status">от 1 500 руб</p>
                            </div>
                            <button>Подробнее</button>
                            <p className="card_description">Начало тропы отмечено у набережной Зеленой бухты и лежит вдоль горы Коба-Кая и мыса Капчик. Путь проходит большую часть на склонах гор, у самого побережья моря. Маршрут легкий.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src="https://hersones.org/uploads/posts/2020-08/1597824473_d-n-o9yvnfq.jpg" className="card_image" alt="Солнечная тропа" />
                        <div className="card_overlay">
                            <div className="card_header">
                                <p className="card_title">Солнечная тропа</p>
                                <p className="card_status">от 3 800 руб</p>
                            </div>
                            <button>Подробнее</button>
                            <p className="card_description">Соединяет Ливадию и Гаспру, почти доходит до Дворца «Гаспра», где жил Л.Н. Толстой. На пути тенистой тропы встречается множество исторических достопримечательностей.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src="https://gur-gur.ru/mt-content/uploads/2019/07/vodopad-dzhur-dzhur.jpg" className="card_image" alt="К водопаду Джур-Джур" />
                        <div className="card_overlay">
                            <div className="card_header">
                                <p className="card_title">Водопад Джур-Джур</p>
                                <p className="card_status">от 4 150 руб</p>
                            </div>
                            <button>Подробнее</button>
                            <p className="card_description">Джур-Джур — самый мощный и полноводный водопад Крыма. Расположен в окрестностях села Генеральское, в ущелье Хапхал. Является одним из самых больших водопадов Крыма.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src="https://b1.vpoxod.ru/route/c2/1e/305752_350x280.jpg" className="card_image" alt="Храм Солнца" />
                        <div className="card_overlay">
                            <div className="card_header">
                                <p className="card_title">Храм Солнца</p>
                                <p className="card_status">от 6 990 руб</p>
                            </div>
                            <button>Подробнее</button>
                            <p className="card_description">Сегодня мы отправляемся на Южный берег Крыма, на гору Ильяс-Кая. Именно там, у подножья этой вершины, находится одно из самых таинственных и загадочных мест Крыма. В народе его называют «Храм Солнца» или «Каменный цветок».</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}