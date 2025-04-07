import ReportList from "../../workmanage/components/Report/ReportList";
import ReportOverviewHeader from "../components/Report/ReportOverviewHeader";

const ReportListPage = () => {
  return (
    <div className="container mx-auto px-4">
      <ReportOverviewHeader/>
      <ReportList />
    </div>
  )
}

export default ReportListPage;