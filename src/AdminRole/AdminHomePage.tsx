import AdminProfileMenu from "./AdminMenu";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminCompetitions from "./Competitions";
import AdminJuries from "./JuriesPage/Juries";
import AdminCompetitionDetails from "./CompetitionDetail";
import AdminCompetitionEdit from "./CompetitionEdit";

const AdminPage = () => {

  return (
      <div className="bg-white flex h-screen gap-6">
      <AdminProfileMenu />

        <div className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/competitions/" element={<AdminCompetitions />} />
            <Route path="/competitions/:id" element={<AdminCompetitionDetails />} />
            <Route path="/competition-edit/:id" element={<AdminCompetitionEdit />} />
            <Route path="/juries/" element={<AdminJuries/>}/>
            <Route path="/" element={<Navigate to="competitions" />} />
          </Routes>
        </div>
      </div>
  );
};

export default AdminPage;


