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
                              stars={"??????????????????????????????"}
                              text={"Le parcours propos?? dans le bootcamp offre une immersion r??elle dans le quotidien d???un d??veloppeur. " +
                              "La collaboration en agile et les attentes du client lors d???un " +
                              "projet informatique font partie int??grante de l???apprentissage. Cela aide ?? pr??parer s??rieusement le stagiaire ?? son futur r??le."}
                        />
                    </div>
                    <div  className={classnames("col",styles.colContainer)}>
                        <Avis name={"test"} photo={"https://avatars3.githubusercontent.com/u/13352?s=400&v=4"}
                              subtitle={"React Native @facebook"}
                              stars={"??????????????????????????????"}
                              text={"?? l???issue de votre parcours, vous saurez : ?? l???issue de votre parcours, vous saurez : ?? l???issue de votre parcours, vous saurez :  vous saurez : ?? l???issue de votre parcours, vous saurez :  vous saurez : ?? l???issue de votre parcours, vous saurez :  " +
                              "vous saurez : ?? l???issue de votre parcours, vous saurez :  vous saurez : ?? l???issue de votre parcours, vous saurez : "}/>
                        <br/>
                        <Avis name={"test"} photo={"https://avatars1.githubusercontent.com/u/977348?s=460&v=4"}
                              subtitle={"React Native @facebook"}
                              stars={"??????????????????????????????"}
                              text={"?? l???issue de votre parcours, vous saurez : ?? l???issue de votre parcours, vous saurez : ?? l???issue de votre parcours, vous saurez : "}/>


                    </div>
                    <div  className={classnames("col",styles.colContainer)}>
                        <Avis name={"test"} photo={"https://avatars1.githubusercontent.com/u/165856?s=460&v=4"}
                              subtitle={"React Native @facebook"}
                              stars={"??????????????????????????????"}
                              text={"?? l???issue de votre parcours, vous saurez : ?? l???issue de votre parcours, vous saurez : ?? l???issue de votre parcours, vous saurez : "}/>

                        <br/>
                        <Avis name={"test"} photo={"https://avatars2.githubusercontent.com/u/197597?s=460"}
                              subtitle={"React Native @facebook"}
                              stars={"??????????????????????????????"}
                              text={"?? l???issue de votre parcours, vous saurez : ?? l???issue de votre parcours, vous saurez : ?? l???issue de votre parcours, vous saurez : "}/>
                    </div>
                </div>
                <div className="row " style={{paddingBottom: "4%",paddingTop: "4%"}}>
                    <div className="col ">
                        <div className={classnames("hero hero--dark shadow--md", styles.questionContainer)}>
                            <div className="container">
                                <h1 className={classnames("hero__title", styles.contactTeaser)}>Vous avez besoin d'??claircir un point  <span style={{color:"#f1bb00"}}>?</span></h1>
                                <p className="hero__subtitle">N'h??sitez pas ?? nous contacter, nous serons heureux d'y r??pondre.</p>
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