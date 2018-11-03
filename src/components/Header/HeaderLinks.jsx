/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Message from '@material-ui/icons/Message';
import Badge from '@material-ui/core/Badge';

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes,endusermenu,loginpage,loginasadminpage,signuppage, } = props;
  return (
    <List className={classes.list}>
    {endusermenu ? 
    <div>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menu"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/SOS-page" className={classes.dropdownLink}>
              SOS Emergency
            </Link>,
            <Link to="/incidentregistration-page" className={classes.dropdownLink}>
            Report Security Incident
          </Link>,
                       <Link to="/profile-page" className={classes.dropdownLink}>
                                  Profile
                                </Link>,
                                          <Link to={"/adminlogin-page"}  className={classes.dropdownLink}>
                                            Signout
                                          </Link>
          
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
      <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
      </ListItem>
      <ListItem className={classes.listItem}>
      <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Message />
                </Badge>
              </IconButton>
      </ListItem>
            <ListItem className={classes.listItem}>
              {/* <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}> */}
                <Button color="primary" round>
                 Welcome Anwar Ahmed !
                </Button>
              {/* </GridItem>
            </GridContainer> */}
            </ListItem> </div>
                : ''}
      {loginpage ? 
      <ListItem className={classes.listItem}>
      <Link to={"/adminlogin-page"}  className={classes.link}>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        > Login As Admin
        </Button>
        </Link>
      </ListItem> :''}
      {loginasadminpage ? 
      <div>
           <ListItem className={classes.listItem}>
           <Link to={"/login-page"}  className={classes.link}>
             <Button
               href="#"
               color="transparent"
               target="_blank"
               className={classes.navLink}
             > Login as User
             </Button>
             </Link>
           </ListItem>
                     <ListItem className={classes.listItem}>
                     <Link to={"/signup-page"} className={classes.link}>
                       <Button
                         href="#"
                         color="transparent"
                         target="_blank"
                         className={classes.navLink}
                         round="true"
                       >
                          Signup
                       </Button>
                       </Link>
                     </ListItem> 
           </div>  : ''}
       </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
