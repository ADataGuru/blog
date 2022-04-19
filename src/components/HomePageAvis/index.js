import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/core/lib/client/exports/Link";
import Bulle from "../../../static/img/avis/bulle.svg";


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

    return (
        <div className={classnames(styles.enrollContainer)}>
            <div className={classnames(styles.allAvisContainer)}>
                <h6 className={classnames(styles.enrollTitle)}><span>Craft Data Engineer</span></h6>
                <h3 className={classnames(styles.enrollTeaser)}><span>Voici ce que les gens pensent du programme.</span>
                </h3>
            </div>
            <div className={classnames(styles.gridContainer)}>
                <div className="row " style={{paddingBottom: "4%"}}>
                    <div className="col ">
                        <Avis name={"test"} photo={"https://avatars1.githubusercontent.com/u/810438?s=460"}
                              subtitle={"React Native @facebook"}
                              stars={"⭐️⭐️⭐️⭐️⭐️"}
                              text={"Avec plusieurs années d'expériences, on a participé à l'élaboration de plusieurs plateformes Avec plusieurs années d'expériences, on a participé à l'élaboration de plusieurs plateformes Avec plusieurs années d'expériences, on a participé à l'élaboration de plusieurs plateformes de données chez différents grands comptes. Le métier de Data Engineer est avant tout notre quotidien ! Toujours sur le terrain , nous savons ce qui est attendu de ce profil. Notre volonté à travers cette formation est de partager notre expérience " +
                              "et notre passion pour ce domaine et de vous donner les clés nécessaires pour arriver à votre prochaine mission opérationnelle."}
                        />
                    </div>
                    <div className="col ">
                        <Avis name={"test"} photo={"https://avatars3.githubusercontent.com/u/13352?s=400&v=4"}
                              subtitle={"React Native @facebook"}
                              stars={"⭐️⭐️⭐️⭐️⭐️"}
                              text={"À l’issue de votre parcours, vous saurez : À l’issue de votre parcours, vous saurez : À l’issue de votre parcours, vous saurez :  vous saurez : À l’issue de votre parcours, vous saurez :  vous saurez : À l’issue de votre parcours, vous saurez :  " +
                              "vous saurez : À l’issue de votre parcours, vous saurez :  vous saurez : À l’issue de votre parcours, vous saurez : "}/>
                        <br/>
                        <Avis name={"test"} photo={"https://avatars1.githubusercontent.com/u/977348?s=460&v=4"}
                              subtitle={"React Native @facebook"}
                              stars={"⭐️⭐️⭐️⭐️⭐️"}
                              text={"À l’issue de votre parcours, vous saurez : À l’issue de votre parcours, vous saurez : À l’issue de votre parcours, vous saurez : "}/>


                    </div>
                    <div className="col">
                        <Avis name={"test"} photo={"https://avatars1.githubusercontent.com/u/165856?s=460&v=4"}
                              subtitle={"React Native @facebook"}
                              stars={"⭐️⭐️⭐️⭐️⭐️"}
                              text={"À l’issue de votre parcours, vous saurez : À l’issue de votre parcours, vous saurez : À l’issue de votre parcours, vous saurez : "}/>

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
                                <h1 className={classnames("hero__title", styles.contactTeaser)}>Vous avez des questions
                                    ?</h1>
                                <p className="hero__subtitle">Nous sommes convaincus que vous aimerez la formation. Si
                                    vous avez des questions, nous serons heureux d'y répondre.</p>
                                <div>
                                    <Link to="/form/" className={classnames(styles.contactButton)}>
                                        <button className="button button--primary  button--lg">
                                            Nous Contacter
                                        </button>
                                    </Link>

                                    <Link to="/inscription/" className={classnames(styles.enrollButton)}>
                                        <button
                                            className="button button--outline button--secondary  button--lg ">Inscrivez-vous
                                        </button>
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