
import DocumentDetailPage from "../features/dashboard/datamanage/documnent/pages/DocumentDetailPage";
import DocumentListPage from "../features/dashboard/datamanage/documnent/pages/DocumentListPage";
import DocumentRegisterPage from "../features/dashboard/datamanage/documnent/pages/DocumentRegisterPage";




const documentRoute = [
  {
    path: "document-overview",
    element: <DocumentListPage />,
  },

  {
    path: "document-register",
    element: <DocumentRegisterPage/>,
  },
  {
    path: "document-detail/:id",
    element: <DocumentDetailPage />,
  },
 


];

export default documentRoute;
