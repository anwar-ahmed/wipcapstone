// import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
// import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";

var indexRoutes = [
//   { path: "/landing-page", name: "LandingPage", component: LandingPage },
//   { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
 { path: "/signup-page", name: "SignupPage", component: SignupPage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/", name: "LoginPage", component: LandingPage }
  //   { path: "/", name: "Components", component: LandingPage }
];

export default indexRoutes;
