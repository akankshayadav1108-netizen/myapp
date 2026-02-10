import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroSection from './pages/HeroSection';
import Footer from './components/Footer';
import Login from './pages/Login';
import OtpVerify from './pages/OtpVerify';
import Signup from './pages/Signup';
import DropdownMenu from './pages/DropdownMenu';
import Forget from './pages/Forget';
import UserPannel from './pages/UserPannel';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import AdminHome from './pages/adminDashboard/AdminHome';
import AllUsers from './pages/adminDashboard/AllUsers';
import AllEmployee from './pages/adminDashboard/AllEmployee';
import AllSubAdmin from './pages/adminDashboard/AllSubAdmin';
import Billing from './pages/adminDashboard/Billing';
import Settings from './pages/adminDashboard/Settings';
import Profile from './pages/adminDashboard/Profile';
import FormRequest from './pages/adminDashboard/FormRequest';

import SubAdminDashboard from './pages/subAdminDashboard/SubAdminDashboard';
import SubAdminHome from './pages/subAdminDashboard/SubAdminHome';
import RequestForm from './pages/subAdminDashboard/RequestForm';
import TeamManagement from './pages/subAdminDashboard/TeamManagement';
import EmployeeWorkload from './pages/subAdminDashboard/EmployeeWorkload';
import AssignForm from './pages/subAdminDashboard/AssignForm';
import RequestTracking from './pages/subAdminDashboard/RequestTracking';
import Communication from './pages/subAdminDashboard/Communication';

import EmployeeDashboard from './pages/employeeDashboard/Employeedashboard';
import EmployeeHome from './pages/employeeDashboard/EmployeeHome';
import RequestInbox from './pages/employeeDashboard/RequestInbox';
import CompletedRequests from './pages/employeeDashboard/CompleteRequests';
import PendingRequests from './pages/employeeDashboard/PendingRequests';
import Communications from './pages/employeeDashboard/Communications';

import UserDashboard from './pages/userDashboard/UserDashboard';
import UserHome from './pages/userDashboard/UserHome';
import UserForm from './pages/userDashboard/UserForm';
import UserPending from './pages/userDashboard/UserPending';
import UserHistory from './pages/userDashboard/UserHistory';
import UserCommunication from './pages/userDashboard/UserCommunication';
import AdminReport from './pages/adminDashboard/AdminReport';
import About from './pages/About';
import Contact from './pages/Contact';
import CounterBox from '../mychange/counter';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized';
import FormLayout from './pages/adminDashboard/FormLayout';
import CreateForm from './pages/adminDashboard/CreateForm';
import ViewDetails from "./pages/adminDashboard/ViewDetails";

import EditForm from './pages/adminDashboard/EditForm';
import FormCategoryPage from "./components/forms/FormCategoryPage";
import FormSubCategoryPage from "./components/forms/FormSubCategoryPage";
import PublicFormList from "./components/forms/PublicFormList";
import FormCategory from './pages/adminDashboard/FormCategory';
import Search from './pages/Search';






function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<LandingPage />} />
            <Route path='search' element={<Search />} />
            {/* Nested routes (HERE: remove / from child paths) */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="otp-verify" element={<OtpVerify />} />
            <Route path="/userpanel" element={<UserPannel />} />
            <Route path="/forget" element={<Forget />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='mychange' element={<CounterBox />} />

            {/* <Route path='admin' element={<AdminDashboard/>}/>
          <Route path='subadmin' element={<SubAdminDashboard/>}/>
          <Route path='employee' element={<EmployeeDashboard/>}/> */}

            {/* public form routes */}
            <Route path="forms" element={<FormCategoryPage />} />
            <Route path="forms/:categorySlug" element={<FormSubCategoryPage />} />
            <Route path="forms/:categorySlug/:subSlug" element={<PublicFormList />} />
          </Route>

          <Route path="/unathorized" element={<Unauthorized />} />

          {/* routing for admin */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>

            <Route path='/admin' element={<AdminDashboard />}>
              <Route index element={<AdminHome />} />
              <Route path='users' element={<AllUsers />} />
              <Route path='subadmin' element={<AllSubAdmin />} />
              <Route path='employee' element={<AllEmployee />} />
              <Route path='formcategory' element={<FormCategory />} />
              <Route path='formrequest' element={<FormLayout />} >
                <Route index element={<FormRequest />} />
                <Route path='createform' element={<CreateForm />} />
                <Route path="edit-form/:formId" element={<EditForm />}/>

                <Route path="view-details/:id" element={<ViewDetails />} />
                

              </Route>
              <Route path='report' element={<AdminReport />} />
              <Route path='billing' element={<Billing />} />
              <Route path='profile' element={<Profile />} />
              <Route path='setting' element={<Settings />} />
            </Route>
          </Route>

          {/* routing for subadmin */}

          <Route element={<ProtectedRoute allowedRoles={["subAdmin"]} />}>
            <Route path='/subAdmin' element={<SubAdminDashboard />}>
              <Route index element={<SubAdminHome />} />
              <Route path='request' element={<RequestForm />} />
              <Route path='teams' element={<TeamManagement />} />
              <Route path='employee' element={<EmployeeWorkload />} />
              <Route path='assignform' element={<AssignForm />} />
              <Route path='tracking' element={<RequestTracking />} />
              <Route path='communication' element={<Communication />} />
              <Route path='profile' element={<Profile />} />
              <Route path='setting' element={<Settings />} />
            </Route>
          </Route>
          {/* employee */}
          <Route element={<ProtectedRoute allowedRoles={["employee"]} />}>
            <Route path='emp' element={<EmployeeDashboard />}>
              <Route index element={<EmployeeHome />} />
              <Route path='requests' element={<RequestInbox />} />
              <Route path='panding' element={<PendingRequests />} />
              <Route path='complete' element={<CompletedRequests />} />
              <Route path='communication' element={<Communications />} />
              <Route path='profile' element={<Profile />} />
              <Route path='setting' element={<Settings />} />
            </Route>
          </Route>
          {/* user */}
          <Route element={<ProtectedRoute allowedRoles={["user"]} />}>

            <Route path='user' element={<UserDashboard />}>
              <Route index element={<UserHome />} />
              <Route path='form' element={<UserForm />} />
              <Route path='pending' element={<UserPending />} />
              <Route path='history' element={<UserHistory />} />
              <Route path='communication' element={<UserCommunication />} />
              <Route path='profile' element={<Profile />} />
              <Route path='setting' element={<Settings />} />
            </Route>
          </Route>


        </Routes>
      </BrowserRouter>





    </>

  )
}

export default App