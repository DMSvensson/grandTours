import React from "react";
import styles from './home.module.css';
import { Link } from "react-router-dom";
import ITT from '../../assets/icons/ITT.svg';
import flat from '../../assets/icons/flat.svg';
import hilly from '../../assets/icons/hilly.svg';
import mountain from '../../assets/icons/mountain.svg';
import camera from '../../assets/icons/camera.svg';
import RaceLogo from "../../components/raceLogo/raceLogo";

function HomePage() {
    return (
        <div className={styles.background}>
            <RaceLogo />
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1>Experience Tour de France by Scrolling</h1>
                    <div>
                        <p>Select a Tour de France and scroll through all 21 stages to get a recap of every stage. For the best experience please use the website on a desktop or laptop.</p>
                        <p>To stay updated on all the exciting moments, route details, and results of the Tour de France
                            please visit the official website of the Tour de France: <a href="https://www.letour.fr/en/" target="blank">Tour de France Official Website</a></p>
                    </div>
                </div>
                <div className={styles.editions}>
                <div>
                        <Link to={`teams/2025`}>
                            <div className={styles.edition} style={
                                {
                                    backgroundPosition: '0 -467px', backgroundImage: 'url(https://images.unsplash.com/photo-1709486815648-e34d369d7c6b?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                                }}>
                                <div>
                                    <h3>Tour de France 2025</h3>
                                    <span>Lille - Nice</span>
                                    <p>Edition 112</p>
                                </div>
                                <div className={styles.stageTypes}>
                                    <div>
                                        <span>2</span>
                                        <img className={styles.icon} src={ITT} alt="ITT" />
                                    </div>
                                    <div>
                                        <span>7</span>
                                        <img className={styles.icon} src={flat} alt="Flat" />
                                    </div>
                                    <div>
                                        <span>6</span>
                                        <img className={styles.icon} src={hilly} alt="Hilly" />
                                    </div>
                                    <div>
                                        <span>6</span>
                                        <img className={styles.icon} src={mountain} alt="Mountain" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <a className={styles.credit} href="https://unsplash.com/photos/a-large-building-with-a-clock-tower-on-top-of-it-sdZd8K2q2hs" target="blank">
                            <img src={camera} alt="Credit" />Philippe Patin
                        </a>
                    </div>
                    <div>
                        <Link to={`teams/2024`}>
                            <div className={styles.edition} style={
                                {
                                    backgroundPosition: '0 -857px', backgroundImage: 'url(https://grandtourstorage.blob.core.windows.net/tdf/cover/TDF_Cover_2024.png)',
                                }}>
                                <div>
                                    <h3>Tour de France 2024</h3>
                                    <span>Firenze - Nice</span>
                                    <p>Edition 111</p>
                                </div>
                                <div className={styles.stageTypes}>
                                    <div>
                                        <span>2</span>
                                        <img className={styles.icon} src={ITT} alt="ITT" />
                                    </div>
                                    <div>
                                        <span>8</span>
                                        <img className={styles.icon} src={flat} alt="Flat" />
                                    </div>
                                    <div>
                                        <span>4</span>
                                        <img className={styles.icon} src={hilly} alt="Hilly" />
                                    </div>
                                    <div>
                                        <span>7</span>
                                        <img className={styles.icon} src={mountain} alt="Mountain" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <a className={styles.credit} href="https://www.theguardian.com/sport/live/2024/jul/10/tour-de-france-2024-stage-11-from-evaux-les-bains-to-le-lioran-live?filterKeyEvents=false&page=with%3Ablock-668e664e8f0837e48ab117c4" target="blank">
                            <img src={camera} alt="Credit" />Daniel Cole/AP
                        </a>
                    </div>
                    <div>
                        <Link to={`teams/2023`}>
                            <div className={styles.edition} style={
                                {
                                    backgroundPosition: '0 -450px', backgroundImage: 'url(https://grandtourstorage.blob.core.windows.net/tdf/cover/TDF_Cover_2023.jpg)',
                                }}>
                                <div>
                                    <h3>Tour de France 2023</h3>
                                    <span>Bilbao - Paris</span>
                                    <p>Edition 110</p>
                                </div>
                                <div className={styles.stageTypes}>
                                    <div>
                                        <span>1</span>
                                        <img className={styles.icon} src={ITT} alt="ITT" />
                                    </div>
                                    <div>
                                        <span>4</span>
                                        <img className={styles.icon} src={flat} alt="Flat" />
                                    </div>
                                    <div>
                                        <span>8</span>
                                        <img className={styles.icon} src={hilly} alt="Hilly" />
                                    </div>
                                    <div>
                                        <span>8</span>
                                        <img className={styles.icon} src={mountain} alt="Mountain" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <a className={styles.credit} href="https://www.facebook.com/photo/?fbid=686043820232928&set=a.686045560232754" target="blank">
                            <img src={camera} alt="Credit" />A.S.O. / Ashley Gruber & Jered Gruber
                        </a>
                    </div>
                    <div>
                        <Link to={`teams/2022`}>
                            <div className={styles.edition} style={
                                {
                                    backgroundImage: 'url(https://grandtourstorage.blob.core.windows.net/tdf/cover/TDF_Cover_2022.jpg)',
                                    backgroundPosition: '0 -210px'
                                }}>
                                <div>
                                    <h3>Tour de France 2022</h3>
                                    <span>Copenhaen - Paris</span>
                                    <p>Edition 109</p>
                                </div>
                                <div className={styles.stageTypes}>
                                    <div>
                                        <span>2</span>
                                        <img className={styles.icon} src={ITT} alt="ITT" />
                                    </div>
                                    <div>
                                        <span>5</span>
                                        <img className={styles.icon} src={flat} alt="Flat" />
                                    </div>
                                    <div>
                                        <span>7</span>
                                        <img className={styles.icon} src={hilly} alt="Hilly" />
                                    </div>
                                    <div>
                                        <span>7</span>
                                        <img className={styles.icon} src={mountain} alt="Mountain" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <a className={styles.credit} href="https://www.facebook.com/photo/?fbid=5224725550910115&set=a.5202251869824150" target="blank"><img src={camera} alt="Credit" />Le Tour de France Facebook</a>
                    </div>
                    <div>
                        <Link to={`teams/2021`}>
                            <div className={styles.edition} style={
                                {
                                    backgroundImage: 'url(https://grandtourstorage.blob.core.windows.net/tdf/cover/TDF_Cover_2021.jpg)',
                                    backgroundPosition: '0 -480px'
                                }}>
                                <div>
                                    <h3>Tour de France 2021</h3>
                                    <span>Brest - Paris</span>
                                    <p>Edition 108</p>
                                </div>
                                <div className={styles.stageTypes}>
                                    <div>
                                        <span>2</span>
                                        <img className={styles.icon} src={ITT} alt="ITT" />
                                    </div>
                                    <div>
                                        <span>3</span>
                                        <img className={styles.icon} src={flat} alt="Flat" />
                                    </div>
                                    <div>
                                        <span>8</span>
                                        <img className={styles.icon} src={hilly} alt="Hilly" />
                                    </div>
                                    <div>
                                        <span>8</span>
                                        <img className={styles.icon} src={mountain} alt="Mountain" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <a className={styles.credit} href="https://www.facebook.com/photo/?fbid=4087043051345043&set=a.4067212993328049" target="blank"><img src={camera} alt="Credit" />A.S.O. / Ashley Gruber - Jered Gruber</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;