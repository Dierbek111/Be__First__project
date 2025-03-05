import { UserProvider } from './components/UserContext'; 
import RoutesPage from './Routes';
import { RoleProvider } from './components/RoleContext';
import './i18n/i18';


const App = () => {
  return (
    <UserProvider>
    <RoleProvider>
      <RoutesPage />
    </RoleProvider>
  </UserProvider>
  );
};

export default App;
