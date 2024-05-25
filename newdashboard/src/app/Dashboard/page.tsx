import Header from "@/components/Header";
import DashboardCards from "../../components/DashboardCards";
import GeneralUpdateCards from "../../components/GeneralUpdateCards";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import ProgressReport from "../../components/ProgressReport";
import ShipmentUpdates from "../../components/ShimpentCards";
import TitleOfPages from "@/components/TitleOfPages";

const Dashobard = () => {
  return (
    <DashboardLayout>
      <TitleOfPages title={"Dashboard"} button={""} />
      <DashboardCards />
      <GeneralUpdateCards />
      <ShipmentUpdates />
      <ProgressReport />
    </DashboardLayout>
  );
};

export default Dashobard;
