import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from '../../../../../static/img/header/geek_2.png';
import Diplom from "../../../../../static/img/inscription/training_course.png";
import classnames from "classnames";
import {Button, Chip} from "@mui/material";
import Link from "@docusaurus/core/lib/client/exports/Link";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TextLeftImageRight from "../../../lib/textLeftImageRight";

export default function BootCampPrix() {
    return (
        <div className="container">
            <TextLeftImageRight containerStyle={classnames(stylesModule.backgroundPrix)}
                                title={"Comment financer la formation"}
                                ponctuation="?"
                                description={
                                    <div className={classnames(stylesModule.headDescription)}>
                                        <h2>
                                            Frais de formation : <Chip
                                            style={{fontFamily: "CircularStd-Black", fontSize: "24px"}}
                                            label="4 000 €"/>

                                        </h2>
                                        <p>
                                            Si vous êtes salarié, vous pouvez demander à votre entreprise de vous
                                            financer la formation.
                                            Le reste à charge peut être échelonné jusqu’à 3 fois.
                                        </p>
                                        <Link to="/contact/" className={classnames(stylesModule.enrollButton)}>
                                            <Button variant="contained" startIcon={<PhoneInTalkIcon/>} size="large"
                                                    style={{backgroundColor: "#a6a2f7", borderColor: "transparent"}}>
                                                Nous Contacter
                                            </Button>
                                        </Link>
                                    </div>
                                }
                                imageSrc={Diplom}
                                imageStyle={stylesModule.featureSvg}
            />

        </div>
    );
}