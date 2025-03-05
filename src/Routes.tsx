import { Routes, Route } from 'react-router-dom';
import { useUserContext } from './components/UserContext'; 
import GuestHomePage from './GuestRole/GuestHomePage/GuestHomePage';
// import ParticipantHomePage from './ParticipantRole/ParticipantHomePage'; 
// import RefereeHomePage from './RefereeRole/RefereeHomePage'; 
import GuestCompetitionsPage from './GuestRole/GuestCompetitionsPage/GuestCompetitionsPage';
import GuestWorksPage from './GuestRole/GuestWorksPage/GuestWorksPage';
import GuestPolicyPage from './GuestRole/GuestPolicyPage/GuestPolicyPage';
import GuestResultPage from './GuestRole/GuestResultsPage/GuestResultPage';
import GuestExpertsPage from './GuestRole/GuestExpertsPage/GuestExpertsPage';
import GuestAboutPage from './GuestRole/GuestAboutPage/GuestAboutPage';
import Login from './components/LoginComponent/Login'
import Singup from './components/SignupComponent/Signup'
// import AdminHomePage from './AdminRole/AdminHomePage'
import JoinCompetition from './ParticipantRole/JoinCompetitionPage/JoinCompetition'
import ParticipantProfile from './ParticipantRole/ParticipantProfile/ParticipantProfile';
import ForgotPassword from './components/LoginComponent/ForgotPassword'
import Verification from './components/LoginComponent/Verification';
import SetPassword from './components/LoginComponent/SetPassword';
import Children from './components/SignupComponent/Children';
import ActiveCompetitions from './ParticipantRole/ParticipantProfile/ActiveCompetitions/ActiveCompetitions';
import FinishedCompetitions from './ParticipantRole/ParticipantProfile/FinishedCompetitions/FinishedCompetitions';
import RefereeProfile from './RefereeRole/RefereeProfile/RefereeProfile';
import AdminPage from './AdminRole/AdminHomePage';

const RoutesPage = () => {
  const { role } = useUserContext();

  return (
    <Routes>
      {role === 'guest' && (
        <>     
        <Route path="/" element={<GuestHomePage />} />
        <Route path='/guest-competitions/' element={<GuestCompetitionsPage />} /> 
        <Route path='/guest-works/' element={<GuestWorksPage/>}/>
        <Route path='/guest-policy/' element={<GuestPolicyPage/>}/>
        <Route path='/guest-results/'element={<GuestResultPage/>}/>
        <Route path='/guest-experts/'element={<GuestExpertsPage/>}/>
        <Route path='/guest-about/'element={<GuestAboutPage/>}/>
        <Route path='/login/'element={<Login/>}/>
        <Route path='/forgot-password/'element={<ForgotPassword/>}/>
        <Route path='/verification/'element={<Verification/>}/>
        <Route path='/set-password/'element={<SetPassword/>}/>
        <Route path='/signup/'element={<Singup/>}/>
        <Route path='/children/'element={<Children/>}/>
        </>
      )}
      {role === 'participant' && (
       <>
        <Route path="/" element={<GuestHomePage />} />
        <Route path='/guest-competitions/' element={<GuestCompetitionsPage />} /> 
        <Route path='/guest-works/' element={<GuestWorksPage/>}/>
        <Route path='/guest-policy/' element={<GuestPolicyPage/>}/>
        <Route path='/guest-results/'element={<GuestResultPage/>}/>
        <Route path='/guest-experts/'element={<GuestExpertsPage/>}/>
        <Route path='/guest-about/'element={<GuestAboutPage/>}/>
        <Route path='/join-competition/' element={<JoinCompetition/>}/>
        <Route path='/login/'element={<Login/>}/>
        <Route path='/signup/'element={<Singup/>}/>
        <Route path='/participant-profile/*' element={<ParticipantProfile/>}/>
        <Route path="/participant-profile/competitions/active/:id/" element={<ActiveCompetitions />} />
        <Route path="/participant-profile/competitions/finished/:id/" element={<FinishedCompetitions/>} />
       
       </>
      )}
      {role === 'referee' && (
         <>     
         <Route path="/" element={<GuestHomePage />} />
         <Route path='/guest-competitions/' element={<GuestCompetitionsPage />} /> 
         <Route path='/guest-works/' element={<GuestWorksPage/>}/>
         <Route path='/guest-policy/' element={<GuestPolicyPage/>}/>
         <Route path='/guest-results/'element={<GuestResultPage/>}/>
         <Route path='/guest-experts/'element={<GuestExpertsPage/>}/>
         <Route path='/guest-about/'element={<GuestAboutPage/>}/>
         <Route path='/login/'element={<Login/>}/>
         <Route path='/signup/'element={<Singup/>}/>
         <Route path='/referee-profile/*' element={<RefereeProfile/>}/>
         </>
      )}
        {role === 'admin' && (
        <>
        <Route path="/*" element={<AdminPage />} />
        </>
      )}
      {/* <Route path="*" element={<Navigate to={`/${role}`} replace />} /> */}
    </Routes>
  );
};

export default RoutesPage;
