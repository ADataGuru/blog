import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import sbe  from '../../../static/img/formateur/sbe.png';
import loca  from '../../../static/img/formateur/loca.png';
import bloca  from '../../../static/img/formateur/bloca.png';
import bsbe from '../../../static/img/formateur/bsbe.png';

function HomePageFormateur() {

        return (
            <div className={classnames(styles.formateurContainer)}>

                <div className={classnames(styles.waveDivider)}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"  className={classnames(styles.shapeFill)}></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"  className={classnames(styles.shapeFill)}></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                             className={classnames(styles.shapeFill)}></path>
                    </svg>
                </div>
                <div className={classnames("container")} >
                    <h6 className={classnames(styles.formateurTitle)}> <span >Formateurs</span></h6>
                    <h3 className={classnames(styles.formateurTeaser)}> <span >On Partage avec vous Notre Experience<span style={{color:"#f1bb00"}}>.</span></span></h3>
                </div>
                 <div className={classnames(styles.gridContainer)}>
                     <div className={classnames(styles.featureAvatar)}>
                             <div className="avatar" style={{ paddingLeft: "auto",paddingRight:"auto",display:"block"}}>
                                 <img
                                     className="avatar__photo avatar__photo--xl"
                                     src={sbe} />
                                 <img
                                     className="avatar__photo avatar__photo--xl"
                                     src={loca}  />
                             </div>
                     </div>
                    <div className="row row--no-gutters">
                        <div className="col  col--3">
                            <img className={classnames(styles.featureProfile,styles.mediaProfile)} src={bloca} alt={"loca"}/>
                        </div>
                        <div className="col col--6">
                            <p className={classnames(styles.formateurDescription,"text-center")}>
                                <span >👋 &nbsp; Salut, c'est  <strong style={{fontFamily:"CircularStd-Black"}}>Loïc et Soufiane </strong>... En bref :</span>
                            </p>
                            <div className={classnames(styles.formateurDescriptionPoints)}>
                                <ul className={classnames(styles.formateurDescriptionPoints)}>
                                    <li >👨‍💻 &nbsp; Nous sommes des artisans des bonnes pratiques de développement.</li>
                                    <li >🏗 &nbsp; Nous sommes des passionnés des systèmes et plateformes de données. </li>
                                    <li >🥼 &nbsp; Nous avons plus de 8 ans d'expériences chacun ... 20 missions au compteur.</li>
                                </ul>
                            </div>
                            <p className={classnames(styles.formateurDescription,"text-center")}>
                                <span >Avec plusieurs années d'expériences, on a participé à l'élaboration de plusieurs plateformes de données chez différents grands comptes. Le métier de Data Engineer est avant tout notre quotidien !
                                    <strong style={{fontFamily:"CircularStd-Black"}}> Toujours sur le terrain </strong>, nous savons ce qui est attendu de ce profil.
                                    Notre volonté à travers cette formation est de partager notre expérience et notre passion pour ce domaine
                                    et de vous donner les clés nécessaires pour arriver à votre prochaine mission opérationnelle. </span>
                            </p>
                        </div>
                        <div className="col col--3">
                            <img className={classnames(styles.featureProfile,styles.mediaProfile)} src={bsbe} alt={"sbe"}/>
                        </div>
                    </div>
                 </div>
            </div>
        );
};

export default HomePageFormateur;