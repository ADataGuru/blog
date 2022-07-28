import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/core/lib/client/exports/Link";
import Bulle from "../../../static/img/avis/bulle.svg";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import {Button} from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


function Avis({name, subtitle,stars, photo, text}) {
    return (
        <div>
            <div className="avatar" style={{alignItems: "center"}}>
                <img
                    className="avatar__photo avatar__photo--lg" src={photo}/>
                <div className="avatar__intro">
                    <div className="avatar__name">{name}</div>
                    <small className="avatar__subtitle"> {subtitle} <br/> { stars }</small>
                </div>
            </div>
            <div style={{marginTop: "-0.5rem"}}>
                <Bulle style={{marginBottom: "-0.5rem"}}/>
                <div className={classnames(styles.avisContainer)}>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
}


function HomePageAvis() {

    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    return (
        <div className={classnames(styles.enrollContainer)}>
            <div className={classnames(styles.allAvisContainer)}>
                <h3 className={classnames(styles.enrollTeaser)}><span>Voici ce que les gens pensent du programme<span style={{color:"#f1bb00"}}>.</span></span>
                </h3>
            </div>
            <div className={classnames(styles.gridContainer)}>
                <div className="row ">
                    <div  className={classnames("col",styles.colContainer)}>
                        <Avis name={"test"} photo={"https://avatars1.githubusercontent.com/u/810438?s=460"}
                              subtitle={"React Native @facebook"}
                              stars={"⭐️⭐️⭐️⭐️⭐️"}
                              text={"Avec plusieurs années d'expériences, on a participé à l'élaboration de plusieurs plateformes Avec plusieurs années d'expériences, on a participé à l'élaboration de plusieurs plateformes Avec plusieurs années d'expériences, on a participé à l'élaboration de plusieurs plateformes de données chez différents grands comptes. Le métier de Data Engineer est avant tout notre quotidien ! Toujours sur le terrain , nous savons ce qui est attendu de ce profil. Notre volonté à travers cette formation est de partager notre expérience " +
                              "et notre passion pour ce domaine et de vous donner les clés nécessaires pour arriver à votre prochaine mission opérationnelle."}
                        />
                    </div>
                    <div  className={classnames("col",styles.colContainer)}>
                        <Avis name={"Thibaut E."} photo={"https://media-exp1.licdn.com/dms/image/C5603AQFDecrTqRN-Yg/profile-displayphoto-shrink_400_400/0/1578345640755?e=1664409600&v=beta&t=gFA1X81w8w1dq-ms53lvsFEd1G-lRnDHd7HFx2C2TrE"}
                              subtitle={"Développeur @Sportihome"}
                              stars={"⭐️⭐️⭐️⭐️⭐️"}
                              text={"\n" +
                                  "J’ai été agréablement surpris du format de formation proposé par DataGuru. " +
                                  "Ayant été étudiant quelques années auparavant dans une université d’informatique avec des " +
                                  "méthodes pédagogique plus conventionnelle, j'aurai aimé" +
                                  "un format comme le propose ce BootCamp, c'est à dire plus immersif qui a pour objectif de vous rendre opérationnel."}/>
                        <br/>
                        <Avis name={"Léo T."} photo={"https://media-exp1.licdn.com/dms/image/C5603AQGVk0X64KsYmw/profile-displayphoto-shrink_400_400/0/1517042126091?e=1664409600&v=beta&t=UL6DgZ7m-s8JrzBg6OZPlX0--HNx8dfLaYLHS-xqS4w"}
                              subtitle={"Géo-Data Engineer @Mesuris"}
                              stars={"⭐️⭐️⭐️⭐️⭐️"}
                              text={
                                  "Le cursus est très pédagogique et aborde toutes les notions nécessaires au poste de data engineer : " +
                                  "de l'apprentissage de python à l'acquisition de données jusqu'aux compétences les plus poussées en SGBD, Cloud et DevOps."}/>

                    </div>
                    <div  className={classnames("col",styles.colContainer)}>
                        <Avis name={"Kévin D."} photo={"https://media-exp1.licdn.com/dms/image/C4D03AQGBiYTgSMCI3g/profile-displayphoto-shrink_400_400/0/1550944336592?e=1664409600&v=beta&t=2qr4dFbEMBkjhamfl9ZPdqeCRo6vWu2KP6q_2NYZHKY"}
                              subtitle={"Fondateur @Keltio"}
                              stars={"⭐️⭐️⭐️⭐️⭐️"}
                              text={"\n" +
                                  "Le support de formation est de qualité, l’équipe pédagogique est investie, réactive et soucieuse de la réussite de ses apprenants. " +
                                  "Les projets, basés sur des cas réels, permettent d'expérimenter et d'approfondir les connaissances techniques."}/>

                        <br/>
                        <Avis name={"test"} photo={"https://avatars2.githubusercontent.com/u/197597?s=460"}
                              subtitle={"React Native @facebook"}
                              stars={"⭐️⭐️⭐️⭐️⭐️"}
                              text={"À l’issue de votre parcours, vous saurez : À l’issue de votre parcours, vous saurez : À l’issue de votre parcours, vous saurez : "}/>
                    </div>
                </div>
                <div className="row " style={{paddingBottom: "4%",paddingTop: "4%"}}>
                    <div className="col ">
                        <div className={classnames("hero hero--dark shadow--md", styles.questionContainer)}>
                            <div className="container">
                                <h1 className={classnames("hero__title", styles.contactTeaser)}>Vous avez besoin d'éclaircir un point  <span style={{color:"#f1bb00"}}>?</span></h1>
                                <p className="hero__subtitle">N'hésitez pas à nous contacter, nous serons heureux d'y répondre.</p>
                                <div>
                                    <Link to="/form/" className={classnames(styles.contactButton)}>
                                        <Button variant="contained" startIcon={<PhoneInTalkIcon/>} size="large"
                                                style={{backgroundColor: "#a6a2f7", borderColor: "transparent"}}>
                                            Nous Contacter
                                        </Button>


                                    </Link>

                                    <Link to="/inscription/" className={classnames(styles.enrollButton)}>
                                        <Button variant="contained" startIcon={<HowToRegIcon/>} size="large"
                                                style={{backgroundColor: "#f1bb00", borderColor: "transparent"}}>
                                            Inscrivez-vous
                                        </Button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePageAvis;