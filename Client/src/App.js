import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./page/login";
import SignUp from './page/signup';
import Forgetpassword from './page/forgetpassword';
import Wellcome_page from './page/wellcome-page';
import Account from './page/account';
import Account_page from './page/account_page';
import Team_member from './page/team_member';
import Account_management from './page/account_management';
import Add_property from './page/add_property';
import Client_profit_engagement from './page/client_profile_engagement';
import Client_profile from './page/client_profile';
import Client_view_engagement from './page/client_view_engagement';
import Client_view_property from './page/client_view_property';
import Property_filter_assign from './page/property_filter_assign'
import Property_filter_view from './page/property_filter_view';
import Property_filter from './page/property_filter';
import View_engagement from './page/view_engagement';
import View_Property from './page/view_property';
import All_page from './page/all_page';
import Slider from './components/slider';
import Userprofile from './components/userprofile';
import ForgetpaswordPage from './page/forgetpaswodpage';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/All_page' element={<All_page />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/Account_page' element={<Account_page />} />
          <Route path='/Account_management' element={<Account_management />} />
          <Route path='/Add_property' element={<Add_property />} />
          <Route path='/Client_profile' element={<Client_profile />} />
          <Route path='/Client_profile_engagement' element={<Client_profit_engagement />} />
          <Route path='/Client_view_engaement' element={<Client_view_engagement />} />
          <Route path='/Client_view_property' element={<Client_view_property />} />
          <Route path='/Forgetpassword' element={<Forgetpassword />} />
          <Route path='/forgetpaswodpage' element={<ForgetpaswordPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Property_filter' element={<Property_filter />} />
          <Route path='/Property_filter_assign' element={<Property_filter_assign />} />
          <Route path='/Property_filter_view' element={<Property_filter_view />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/Team_member' element={<Team_member />} />
          <Route path='/View_engagement' element={<View_engagement />} />
          <Route path='/View_property' element={<View_Property />} />
          <Route path='/Wellcome_page' element={<Wellcome_page />} />
          <Route path='/Slider' element={<Slider />} />
          <Route path='/Wellcome_page/Userprofile' element={<Userprofile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
