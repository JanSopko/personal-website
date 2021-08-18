import React, {useContext} from "react";
import styles from '../styles/Home.module.css'
import {CustomHead} from "../components/CustomHead/CustomHead";
import {mainHeadingSection} from "../models/MainHeading/MainHeading";
import {LanguageContext} from "./_app";
import {Fade, makeStyles, BottomNavigation, Slide} from "@material-ui/core";
import {Navbar} from "../components/Navbar/Navbar";
import {Footer} from "../components/Footer/Footer";
import {InfoBox} from "../components/InfoBox/InfoBox";
import {AboutMe} from "../components/AboutMe/AboutMe";
import {ContactForm} from "../components/ContactForm/ContactForm";
import {SkillsUL} from "../components/Skills/SkillsUL";


const useStyles = makeStyles({
    main: {}
});

export default function Home(props: {
  setLanguage: (...args: any[]) => any | void;
}) {
  const language = useContext(LanguageContext);
  const classes = useStyles();

  return (
      <React.Fragment>
      <CustomHead />
          <div id="gradient-line" />
              <Fade in={true} timeout={900}>
      <main className={classes.main}>

          <div id="container">
              <div className="content">
                <Navbar currentLanguage={language} setLanguage={props.setLanguage}/>
              </div>
              <AboutMe />
              <SkillsUL language={language}/>
              <ContactForm />

              <div className="content">
              </div>
              <Footer />
          </div>
      </main>
              </Fade>

      </React.Fragment>
  )
}
