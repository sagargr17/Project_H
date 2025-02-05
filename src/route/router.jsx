import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import Analytics from "../pages/analytics";
import ReportsSales from "../pages/reports-sales";
import ReportsLeads from "../pages/reports-leads";
import ReportsProject from "../pages/reports-project";
import ReportsTimesheets from "../pages/reports-timesheets";
import Proposalist from "../pages/proposal-list";
import ProposalView from "../pages/proposal-view";
import ProposalEdit from "../pages/proposal-edit";
import ProposalCreate from "../pages/proposal-create";
import PaymentList from "../pages/payment-list";
import PaymentView from "../pages/payment-view/";
import PaymentCreate from "../pages/payment-create";
import CustomersList from "../pages/customers-list";
import CustomersView from "../pages/customers-view";
import CustomersCreate from "../pages/customers-create";
import LeadsList from "../pages/leadsList";
import LeadsView from "../pages/leads-view";
import LeadsCreate from "../pages/leads-create";
import ProjectsList from "../pages/projects-list";
import ProjectsView from "../pages/projects-view";
import ProjectsCreate from "../pages/projects-create";
import WidgetsLists from "../pages/widgets-lists";
import WidgetsTables from "../pages/widgets-tables";
import WidgetsCharts from "../pages/widgets-charts";
import WidgetsStatistics from "../pages/widgets-statistics";
import WidgetsMiscellaneous from "../pages/widgets-miscellaneous";
import HelpKnowledgebase from "../pages/help-knowledgebase";
import LoginCover from "../pages/login-cover";
import LayoutApplications from "../layout/layoutApplications";
import AppsChat from "../pages/apps-chat";
import AppsEmail from "../pages/apps-email";
import AppsTasks from "../pages/apps-tasks";
import AppsNotes from "../pages/apps-notes";
import AppsCalender from "../pages/apps-calender";
import AppsStorage from "../pages/apps-storage";
import LayoutSetting from "../layout/layoutSetting";
import SettingsGaneral from "../pages/settings-ganeral";
import SettingsSeo from "../pages/settings-seo";
import SettingsTags from "../pages/settings-tags";
import SettingsEmail from "../pages/settings-email";
import SettingsTasks from "../pages/settings-tasks";
import SettingsLeads from "../pages/settings-leads";
import SettingsSupport from "../pages/settings-support";
import SettingsFinance from "../pages/settings-finance";
import SettingsGateways from "../pages/settings-gateways";
import SettingsCustomers from "../pages/settings-customers";
import SettingsLocalization from "../pages/settings-localization";
import SettingsRecaptcha from "../pages/settings-recaptcha";
import SettingsMiscellaneous from "../pages/settings-miscellaneous";
import LayoutAuth from "../layout/layoutAuth";
import LoginMinimal from "../pages/login-minimal";
import LoginCreative from "../pages/login-creative";
import RegisterCover from "../pages/register-cover";
import RegisterMinimal from "../pages/register-minimal";
import RegisterCreative from "../pages/register-creative";
import ResetCover from "../pages/reset-cover";
import ResetMinimal from "../pages/reset-minimal";
import ResetCreative from "../pages/reset-creative";
import ErrorCover from "../pages/error-cover";
import ErrorMinimal from "../pages/error-minimal";
import ErrorCreative from "../pages/error-creative";
import OtpCover from "../pages/otp-cover";
import OtpMinimal from "../pages/otp-minimal";
import OtpCreative from "../pages/otp-creative";
import MaintenanceCover from "../pages/maintenance-cover";
import MaintenanceMinimal from "../pages/maintenance-minimal";
import MaintenanceCreative from "../pages/maintenance-creative";
import { useEffect } from "react";
import Resident from "@/components/Residents/Resident";
import { useDispatch } from "react-redux";
import { getUser } from "@/state/UserProfile/Action";





// Function to check if user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem("userDetails");
  if (!token) return false;

  try {
    const parsedToken = JSON.parse(token);
    const expireDate = new Date(parsedToken?.payload?.exp * 1000);
    if(new Date() < expireDate){
      return true;
    }else{
      localStorage.removeItem("userDetails");

      Object.keys(localStorage)
      .filter(key => /^CognitoIdentityServiceProvider/.test(key))
      .forEach(key => localStorage.removeItem(key));
      return false;
    }
   
  } catch {
    return false;
  }
};


// PrivateRoute component
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/authentication/login/cover" />;
};

// Define the router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PrivateRoute element={<Home />} />,
      },
      {
        path: "/dashboards/analytics",
        element: <PrivateRoute element={<Analytics />} />,
      },
      {
        path: "/reports/sales",
        element: <PrivateRoute element={<ReportsSales />} />,
      },
      {
        path: "/reports/leads",
        element: <PrivateRoute element={<ReportsLeads />} />,
      },
      {
        path: "/reports/project",
        element: <PrivateRoute element={<ReportsProject />} />,
      },
      {
        path: "/reports/timesheets",
        element: <PrivateRoute element={<ReportsTimesheets />} />,
      },
      {
        path: "/proposal/list",
        element: <PrivateRoute element={<Proposalist />} />,
      },
      {
        path: "/proposal/view",
        element: <PrivateRoute element={<ProposalView />} />,
      },
      {
        path: "/proposal/edit",
        element: <PrivateRoute element={<ProposalEdit />} />,
      },
      {
        path: "/proposal/create",
        element: <PrivateRoute element={<ProposalCreate />} />,
      },
      {
        path: "/payment/list",
        element: <PrivateRoute element={<PaymentList />} />,
      },
      {
        path: "/payment/view",
        element: <PrivateRoute element={<PaymentView />} />,
      },
      {
        path: "/payment/create",
        element: <PrivateRoute element={<PaymentCreate />} />,
      },
      {
        path: "/customers/list",
        element: <PrivateRoute element={<CustomersList />} />,
      },
      {
        path: "/customers/view",
        element: <PrivateRoute element={<CustomersView />} />,
      },
      {
        path:"/customers/resident",
        element:<PrivateRoute element={<Resident/>}/>
      },
      {
        path: "/customers/create",
        element: <PrivateRoute element={<CustomersCreate />} />,
      },
      {
        path: "/leads/list",
        element: <PrivateRoute element={<LeadsList />} />,
      },
      {
        path: "/leads/view",
        element: <PrivateRoute element={<LeadsView />} />,
      },
      {
        path: "/leads/create",
        element: <PrivateRoute element={<LeadsCreate />} />,
      },
      {
        path: "/projects/list",
        element: <PrivateRoute element={<ProjectsList />} />,
      },
      {
        path: "/projects/view",
        element: <PrivateRoute element={<ProjectsView />} />,
      },
      {
        path: "/projects/create",
        element: <PrivateRoute element={<ProjectsCreate />} />,
      },
      {
        path: "/widgets/lists",
        element: <PrivateRoute element={<WidgetsLists />} />,
      },
      {
        path: "/widgets/tables",
        element: <PrivateRoute element={<WidgetsTables />} />,
      },
      {
        path: "/widgets/charts",
        element: <PrivateRoute element={<WidgetsCharts />} />,
      },
      {
        path: "/widgets/statistics",
        element: <PrivateRoute element={<WidgetsStatistics />} />,
      },
      {
        path: "/widgets/miscellaneous",
        element: <PrivateRoute element={<WidgetsMiscellaneous />} />,
      },
      {
        path: "/help/knowledgebase",
        element: <PrivateRoute element={<HelpKnowledgebase />} />,
      },
    ],
  },
  {
    path: "/applications",
    element: <LayoutApplications />,
    children: [
      {
        path: "chat",
        element: <PrivateRoute element={<AppsChat />} />,
      },
      {
        path: "email",
        element: <PrivateRoute element={<AppsEmail />} />,
      },
      {
        path: "tasks",
        element: <PrivateRoute element={<AppsTasks />} />,
      },
      {
        path: "notes",
        element: <PrivateRoute element={<AppsNotes />} />,
      },
      {
        path: "calender",
        element: <PrivateRoute element={<AppsCalender />} />,
      },
      {
        path: "storage",
        element: <PrivateRoute element={<AppsStorage />} />,
      },
    ],
  },
  // {
  //   path: "/residents",
  //   element: <LayoutApplications />,
  //   children: [
  //     {
  //       path: "resident",
  //       element: <PrivateRoute element={<Resident/>} />,
  //     },  
     
  //   ],
  // },
  {
    path: "/settings",
    element: <LayoutSetting />,
    children: [
      {
        path: "ganeral",
        element: <PrivateRoute element={<SettingsGaneral />} />,
      },
      {
        path: "seo",
        element: <PrivateRoute element={<SettingsSeo />} />,
      },
      {
        path: "tags",
        element: <PrivateRoute element={<SettingsTags />} />,
      },
      {
        path: "email",
        element: <PrivateRoute element={<SettingsEmail />} />,
      },
      {
        path: "tasks",
        element: <PrivateRoute element={<SettingsTasks />} />,
      },
      {
        path: "leads",
        element: <PrivateRoute element={<SettingsLeads />} />,
      },
      {
        path: "support",
        element: <PrivateRoute element={<SettingsSupport />} />,
      },
      {
        path: "finance",
        element: <PrivateRoute element={<SettingsFinance />} />,
      },
      {
        path: "gateways",
        element: <PrivateRoute element={<SettingsGateways />} />,
      },
      {
        path: "customers",
        element: <PrivateRoute element={<SettingsCustomers />} />,
      },
      {
        path: "localization",
        element: <PrivateRoute element={<SettingsLocalization />} />,
      },
      {
        path: "recaptcha",
        element: <PrivateRoute element={<SettingsRecaptcha />} />,
      },
      {
        path: "miscellaneous",
        element: <PrivateRoute element={<SettingsMiscellaneous />} />,
      },
    ],
  },
  {
    path: "/authentication",
    element: <LayoutAuth />,
    children: [
      {
        path: "login/cover",
        element: <LoginCover />,
      },
      {
        path: "login/minimal",
        element: <LoginMinimal />,
      },
      {
        path: "login/creative",
        element: <LoginCreative />,
      },
      {
        path: "register/cover",
        element: <RegisterCover />,
      },
      {
        path: "register/minimal",
        element: <RegisterMinimal />,
      },
      {
        path: "register/creative",
        element: <RegisterCreative />,
      },
      {
        path: "reset/cover",
        element: <ResetCover />,
      },
      {
        path: "reset/minimal",
        element: <ResetMinimal />,
      },
      {
        path: "reset/creative",
        element: <ResetCreative />,
      },
      {
        path: "404/cover",
        element: <ErrorCover />,
      },
      {
        path: "404/minimal",
        element: <ErrorMinimal />,
      },
      {
        path: "404/creative",
        element: <ErrorCreative />,
      },
      {
        path: "verify/cover",
        element: <OtpCover />,
      },
      {
        path: "verify/minimal",
        element: <OtpMinimal />,
      },
      {
        path: "verify/creative",
        element: <OtpCreative />,
      },
      {
        path: "maintenance/cover",
        element: <MaintenanceCover />,
      },
      {
        path: "maintenance/minimal",
        element: <MaintenanceMinimal />,
      },
      {
        path: "maintenance/creative",
        element: <MaintenanceCreative />,
      },
    ],
  },
]);
