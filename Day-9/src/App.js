import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./componenets/Signup";
import OrgDashboard from "./componenets/OrgDashboard";
import Store from "./componenets/redux/Store";
import { Provider } from "react-redux";
import PrivacyPolicy from "./componenets/PrivacyPolicy";
import TermsAndConditions from "./componenets/TermsAndConditions";
import Home from "./componenets/Home";
import Navbar from "./componenets/NavBar";
import Explore from "./componenets/Volunteer/Explore";
import Profile from "./componenets/Volunteer/Profile";
import LoginVolunteer from "./componenets/Volunteer/LoginVolunteer";
import VolunteerSignup from "./componenets/Volunteer/VolunteerSignup";
import OrgSignup from "./componenets/OrgSignup";
import OrgLogin from "./componenets/OrgLogin";
import AboutUs from "./componenets/AboutUs";
import FAQ from "./componenets/FAQ";
import { getLoggedIn } from "./componenets/useAuthentication";
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/org/dashboard" element={<OrgDashboard />}></Route>
            <Route path="/privacy" element={<PrivacyPolicy />}></Route>
            <Route path="/terms" element={<TermsAndConditions />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/volunteer/explore" element={<Explore />}></Route>
            <Route path="/volunteer/profile" element={<Profile />}></Route>
            <Route path="/volunteer/login" element={<LoginVolunteer />}></Route>
            <Route path="/org/login" element={<OrgLogin />}></Route>
            <Route
              path="/volunteer/signup"
              element={<VolunteerSignup />}
            ></Route>
            <Route path="/org/signup" element={<OrgSignup />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
