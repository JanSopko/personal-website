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
import {SkillsList} from "../components/Skills/SkillsList";


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
              <SkillsList />
              <ContactForm />

          {/*<InfoBox />*/}
          {/*There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.*/}
          {/*There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.*/}
          {/*There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.*/}
          {/*There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.*/}
              <div className="content">
              </div>
              <Footer />
          </div>
      </main>
              </Fade>

      </React.Fragment>
  )
}
