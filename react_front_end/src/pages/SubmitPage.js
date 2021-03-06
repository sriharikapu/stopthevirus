import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonAppBar from "./components/AppBar";
import AppTitle from "./components/AppTitle";
import Footer from "./components/Footer";
import ChallengeInfo from "./components/ChallengeInfo";
import ChallengeSubmit from "./components/ChallengeSubmit";

const SubmitPage = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      background: theme.background,
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start"
    }
  }));

  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <ButtonAppBar />
        <AppTitle />
        <ChallengeInfo />
        <ChallengeSubmit />
        <Footer />
      </section>
    </>
  );
};

export default SubmitPage;
