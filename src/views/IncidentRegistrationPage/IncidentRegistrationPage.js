import React from "react";
// @material-ui/core components
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";



// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx"

import CustomInput from "components/CustomInput/CustomInput.jsx";

import AddIncidentForm from "./AddIncidentForm"

 import incidentRegistrationPageStyle from "assets/jss/material-kit-react/views/incidentRegistrationPageStyle.jsx";
import image from "assets/img/bg8.jpg";



class IncidentRegistrationPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="dark"
          brand="ESIM"
          rightLinks={<HeaderLinks endusermenu="true"/>}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            // backgroundImage: "url(" + image + ")",
            // backgroundSize: "cover",
            // backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
              <Paper className={classes.root} elevation={1}>
              <AddIncidentForm/>
             </Paper>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(incidentRegistrationPageStyle)(IncidentRegistrationPage);
