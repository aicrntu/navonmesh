import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

// public pages
import Home from "../features/public/pages/Home";
import Contact from "../features/public/pages/Contact";
import Planx from "../features/public/components/compititions/innovation/Planx";
import BinaryBattle from "../features/public/components/compititions/innovation/Binarrybattle";
import RoboWarrior from "../features/public/components/compititions/innovation/Robowarrior";
import Innomaker from "../features/public/components/compititions/innovation/Innomaker";
import Admad from "../features/public/components/compititions/innovation/Admad";
import ControllerClash from "../features/public/components/compititions/innovation/ControllerClash";

// forms
import PlanxForm from "../features/public/components/forms/PlanxForm";
import AdmadForm from "../features/public/components/forms/AdmadForm";
import BinarryBattleForm from "../features/public/components/forms/BinarrybattleForm";
import RoboWarriorForm from "../features/public/components/forms/RobowarriorForm";
import InnomakerForm from "../features/public/components/forms/InnomakerForm";
import SoloSpotlightForm from "../features/public/components/forms/SoloSpotlightForm";
import CrewClashForm from "../features/public/components/forms/CrewClashForm";
import TaleTellersForm from "../features/public/components/forms/TaleTellersForm";
import MicDropForm from "../features/public/components/forms/MicDropForm";
import BizaiQuizForm from "../features/public/components/forms/BizaiQuizForm";
import ChefArenaForm from "../features/public/components/forms/ChefArenaForm";
import ControllerClashForm from "../features/public/components/forms/ControllerClashForm";

// admin pages
import Login from "../features/admin/pages/Login";
import Dashboard from "../features/admin/pages/Dashboard";
import PlanxList from "../features/admin/pages/PlanxList";
import AdMadList from "../features/admin/pages/AdMadList";
import PlanxDetail from "../features/admin/pages/PlanxDetail";
import BinarryBattleList from "../features/admin/pages/BinarryBattleList";
import RoboWarriorList from "../features/admin/pages/RoboWarriorList";
import ContactList from "../features/admin/pages/ContactList";
import InnomakerList from "../features/admin/pages/InnomakerList";
import ChefArenaList from "../features/admin/pages/ChefArenaList";
import SoloSpotlightList from "../features/admin/pages/SoloSpotlightList";
import CrewClashList from "../features/admin/pages/CrewClashList";
import MicDropList from "../features/admin/pages/MicDropList";
import TaleTellersList from "../features/admin/pages/TaleTellersList";
import BizaiQuizList from "../features/admin/pages/BizaiQuizList";
import ControllerClashList from "../features/admin/pages/ControllerClashList";

export default function AppRouter() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/planx" element={<Planx />} />
        <Route path="/binarybattle" element={<BinaryBattle />} />
        <Route path="/robowarrior" element={<RoboWarrior />} />
        <Route path="/innomaker" element={<Innomaker />} />
        <Route path="/admadshow" element={<Admad />} />
        <Route path="/controllerclash" element={<ControllerClash />} />

        {/* forms */}
        <Route path="/planx-form" element={<PlanxForm />} />
        <Route path="/admad-form" element={<AdmadForm />} />
        <Route path="/binarrybattle-form" element={<BinarryBattleForm />} />
        <Route path="/innomaker-form" element={<InnomakerForm />} />
        <Route path="/robowarrior-form" element={<RoboWarriorForm />} />
        <Route path="/solospotlight-form" element={<SoloSpotlightForm />} />
        <Route path="/crewclash-form" element={<CrewClashForm />} />
        <Route path="/taletellers-form" element={<TaleTellersForm />} />
        <Route path="/micdrop-form" element={<MicDropForm />} />
        <Route path="/bizaiquiz-form" element={<BizaiQuizForm />} />
        <Route path="/chefarena-form" element={<ChefArenaForm />} />
        <Route path="/controllerclash-form" element={<ControllerClashForm />} />
      </Route>

      {/* ADMIN */}
      <Route path="/admin/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="planx" element={<PlanxList />} />
        <Route path="planx/:id" element={<PlanxDetail />} />
        <Route path="admad" element={<AdMadList />} />
        <Route path="binarrybattle" element={<BinarryBattleList />} />
        <Route path="robowarrior" element={<RoboWarriorList />} />
        <Route path="innomaker" element={<InnomakerList />} />
        <Route path="chefarena" element={<ChefArenaList />} />
        <Route path="solospotlight" element={<SoloSpotlightList />} />
        <Route path="crewclash" element={<CrewClashList />} />
        <Route path="micdrop" element={<MicDropList />} />
        <Route path="taletellers" element={<TaleTellersList />} />
        <Route path="bizaiquiz" element={<BizaiQuizList />} />
        <Route path="controllerclash" element={<ControllerClashList />} />
        <Route path="contact" element={<ContactList />} />
      </Route>
    </Routes>
  );
}
