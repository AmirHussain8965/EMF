import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
// import LandingPage from "./pages/LandingPageOld";
import LandingPage from "./pages/LandingPage";
import Website from "./pages/Website";
import FTPAccess from "./pages/FTPAccess";
import ForgotPassword from "./pages/Settings";
import Support from "./pages/Support";
import ManUser from "./pages/ManUser";
import Billing from "./pages/Billing";
import TicketDetails from "./pages/TicketDetails";
import Company from "./pages/Company";
import SetDomain from "./components/standardUserSteps/StepDomain";
import Leads from "./pages/Leads";
// import StepperPage from "./pages/stepper";
import Accountspage from "./pages/Accounts";
import SupportAdmin from "./pages/SupportAdmin";


import ProgressTracker from "./components/progresstracker/ProgressTracker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/component1" element={<Component1/>} />
      <Route path="/component2" element={<Component2/>} /> */}
       
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/SetupWebsite" element={<Website/>} />
              <Route path="/FTPAccess" element={<FTPAccess />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
              <Route path="/SetDomain" element={<SetDomain />} />
              <Route path="/Support" element={<Support />} />
              <Route path="/SupportAdmin" element={<SupportAdmin />} />
              <Route path="/Accounts" element={<Accountspage />} />
              <Route path="/ManUser" element={<ManUser />} />
              <Route path="/Billing" element={<Billing />} />
              <Route path="/Leads" element={<Leads />} />
              <Route path="/TicketDetail" element={<TicketDetails />} />
              <Route path="/Company" element={<Company />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
