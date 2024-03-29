import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import sbe from '../../../../../static/img/formateur/bsbe.png';
import loca from '../../../../../static/img/formateur/bloca.png';
import {IconButton} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const sbeLinkedinUrl= "https://www.linkedin.com/in/soufiane-benzaouia-a0052788/"
const locaLinkedinUrl= "https://www.linkedin.com/in/lo%C3%AFc-caminale-24817112a/"

export default function BootCampFormateur() {

    return (
        <div className={classnames(styles.formateurContainer)}>
            <div className={classnames(styles.waveDivider)}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25" className={classnames(styles.shapeFill)}></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5" className={classnames(styles.shapeFill)}></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className={classnames(styles.shapeFill)}></path>
                </svg>
            </div>
            <div className={classnames("container")}>
                <h6 className={classnames(styles.formateurTitle)}><span>Formateurs</span></h6>
                <h3 className={classnames(styles.formateurTeaser)}><span>On partage avec vous notre experience <span
                    style={{color: "#f1bb00"}}>.</span></span></h3>
            </div>
            <div className={classnames(styles.gridContainer)}>
                <div className={classnames(styles.featureAvatar)}>
                    <div className="avatar" style={{paddingLeft: "auto", paddingRight: "auto", display: "block"}}>
                        <IconButton  color="primary" href={sbeLinkedinUrl}  >
                            <LinkedInIcon />
                        </IconButton>
                        <img
                            className={classnames(styles.photo)}
                            src={sbe}/>
                        <img
                            className={classnames(styles.photo)}
                            src={loca}/>
                        <IconButton  color="primary" href={locaLinkedinUrl} >
                            <LinkedInIcon  />
                        </IconButton>
                    </div>
                </div>
                <div className={classnames("row")}>
                    <div className={classnames("col ")}>
                        <p className={classnames(styles.formateurDescription)}>
                            <span>👋 &nbsp; Salut, c'est  <strong style={{fontFamily: "CircularStd-Black"}}>Soufiane et Loïc </strong>... En bref :</span>
                        </p>
                        <div className={classnames(styles.formateurDescriptionPoints)}>
                            <ul className={classnames(styles.formateurDescriptionPoints)}>
                                <li>🥼 &nbsp; Nous avons plus de 8 ans d'expérience chacun ... 20 missions au
                                    compteur.
                                </li>
                                <li>🏗 &nbsp; Nous sommes des passionnés des systèmes et plateformes de données.</li>
                                <li>👨‍💻 &nbsp; Nous sommes des artisans des bonnes pratiques de développement.</li>
                                <li>👨‍🔧 &nbsp; Nous intervenons en tant que tech lead chez nos clients.</li>
                                <li>☁️ &nbsp; Nous sommes tous les 2 certifiés Amazon.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};