import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Program from '../../../static/img/teaser/programmer.png';
import Database from '../../../static/img/teaser/server.png';
import Infinite from '../../../static/img/teaser/infinite.svg';
import Ops from '../../../static/img/teaser/ops.png';
import Genius from '../../../static/img/teaser/genius.png';
import BookPng from '../../../static/img/teaser/book.png';
import stylesModule from "../HomePageModules/styles.module.css";

const MOBILE_SIZE = 800

class HomePageTeaser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showAlpha: true, showBeta: false, isMobile: false};

    }

    componentDidMount() {
        this.setState({
            isMobile: window.innerWidth <= MOBILE_SIZE
        });
    }

    openBeta = () => {
        this.setState(state => ({
            ...state,
            showBeta: true,
            showAlpha: false
        }));
    };

    openAlpha = () => {
        this.setState(state => ({
            ...state,
            showBeta: false,
            showAlpha: true
        }));
    };

    render() {
        return (
            <div className={classnames(styles.teaserContainer)}>
                <div className={classnames("container", styles.displayMobileHeader)}>
                    <div className="row">
                        <div className="col">
                            <h6 className={classnames(styles.teaserTitle)}><span>Craft Data Engineer</span></h6>
                            <h3 className={classnames(styles.teaserTeaser)}><span>En quoi consiste la formation ?</span>
                            </h3>
                            <p className={classnames(styles.teaserDescription)}>
                                <span>Le <b>stockage</b> & <b>traitement</b> de données, l'<b>artisanat du code</b> et le <b>DevOps</b> n'auront
                                 plus aucun secrets pour vous ! </span>
                            </p>
                        </div>
                        <div className="col col--5">
                            <Infinite className={classnames(stylesModule.infinteSvg)} alt={"test"}/>
                        </div>
                    </div>
                </div>
                <div className={classnames("container")}
                     style={{color: "#ffff", height: "1000%"}}>
                    <div className={classnames("container")}
                         style={{color: "#ffff", background: "rgba(236, 240, 241, 0.8)", height: "1000%"}}>
                        <ul className={`tabs ${this.state.isMobile ? "" : "tabs--block"}`}>
                            <li className={`tabs__item ${this.state.showAlpha ? "tabs__item--active" : ""}`}
                                style={{color: `${this.state.showAlpha ? "#25366b" : "grey"}`}}
                                onClick={this.openAlpha}><h2><b>1. Théorie</b></h2>
                            </li>
                            <li className={`tabs__item ${this.state.showBeta ? "tabs__item--active" : ""}`}
                                style={{color: `${this.state.showBeta ? "#25366b" : "grey"}`}} onClick={this.openBeta}>
                                <h2> 2. Pratique</h2>
                            </li>
                        </ul>
                    </div>

                    {this.state.showAlpha && <div className={classnames("container")}
                                                  style={{color: "#ffff", background: "rgba(236, 236, 236,1)"}}>
                        <div className={classnames(styles.pointsDescription)}>

                        <p>
                            <span>
                                Notre premier objectif est de vous fournir toutes les compétences nécessaires pour votre
                                 prochain rôle de Data Engineer ! Mais avant tout on souhaite vous partagez nos
                                 connaissances et retours d'expériences sur les bonnes pratiques du
                                 <b> Software CraftsManship</b> pour vous differenciez des autres profils !
                            </span>
                        </p>
                        </div>
                        <div className={classnames("row", styles.rowPadding)}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.moduleSvg)} src={Program} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span> L'Artisanat du code</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>
                                        Apprenez à faire du code de qualité ! Comment découper mon code pour qu'il soit maintenable et evolutif ?
                                        Comment tester mon code ? Comment intégrer les pratiques agiles dans ma realisation de code ?
                                        Comment collaborer et progresser en équipe ?
                                    </span>
                                </p>
                            </div>
                            <div className="col col--2"/>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.moduleSvg)} src={Database} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Stockage</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> Maitriser les concepts de stockage afin d'acquérir la réfléxion nécessaire
                                           pour proposer un type de stockage adapté au besoin ! Quelle est la différence
                                            entre le relationnel et le NoSQL ? Quelles sont leurs garanties ?
                                            Comment stocker des volumes importants de donnée et à quels coûts ?</span>
                                </p></div>
                        </div>
                        <div className="row" style={{padding: "5% 10% 10% 10%"}}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles, styles.moduleSvg)} src={Genius}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Traitements & Systèmes distribués</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> Comprendre les différents traitements et les concepts des systèmes distribués !
                                           Quand faut-il utiliser du batch ou du streaming ?
                                           Comment je fais un calcul distribué sur plusieurs machines ? Quelles sont
                                           les compléxités de ces systèmes ? </span>
                                </p>
                            </div>
                            <div className="col col--2"/>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles, styles.moduleSvg)} src={Ops}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>DevOps</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> Connaître les fondamentaux du Cloud et savoir automatiser la création d'infrastructure
                                           avec Terraform & Ansible. Industrialiser de bout en bout la chaîne de
                                           développement jusqu'à la mise en production.
                                    </span>
                                </p></div>
                        </div>
                    </div>
                    }
                    {this.state.showBeta && <div className={classnames("container")}
                                                 style={{color: "#ffff", background: "rgba(236, 236, 236,1)"}}>
                        <div className={classnames(styles.pointsDescription)}>

                            <p>
                            <span>
                                Notre formation est à 6O% de travaux partiques !
                            </span>
                            </p>
                        </div>
                        <div className="row" style={{padding: "10% 10% 0 10%"}}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles, styles.moduleSvg)} src={BookPng}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Travaux pratiques</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> Des TPs sont donnés lors des cours afin de dynamiser et d'appliquer les
                                    concepts théoriques. Ils seront réalisés principalement sur des environnements Cloud</span>
                                </p>
                            </div>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles, styles.moduleSvg)} src={BookPng}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Ateliers Architectures</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> Les ateliers d'architectures sont animés durant les séances live, il faudra
                                           proposer une architecture cible par rapport à un besoin.</span>
                                </p></div>
                        </div>
                        <div className="row" style={{padding: "10% 10% 10% 10%"}}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles, styles.moduleSvg)} src={BookPng}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Exercices maison</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>Pratiquait en dehors des séances live avec des excercices maison et une correction
                                          personnalisée pour chaque apprenant.</span>
                                </p></div>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles, styles.moduleSvg)} src={BookPng}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Projet fil rouge</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> Un travail de cadrage suivi d'un poc vous sera demandé sur plusieurs semaines
                                           pour finaliser cette formation. Vous allez présenter le résultat sous format
                                           démonstration devant les autres apprenants.</span>
                                </p></div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
};

export default HomePageTeaser;