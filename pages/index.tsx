import React, {useContext} from "react";
import {CustomHead} from "../components/CustomHead/CustomHead";
import {LanguageContext} from "./_app";
import {Fade, makeStyles} from "@material-ui/core";
import {Navbar} from "../components/Navbar/Navbar";
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
          </div>
      </main>
              </Fade>

      </React.Fragment>
  )
}
