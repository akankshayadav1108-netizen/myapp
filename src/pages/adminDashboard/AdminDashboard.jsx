import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import AdminHome from "./AdminHome";

import {
  Home,
  Users,
  FileText,
  UserCog,
  UserCheck,
  BarChart3,
  Receipt,
} from "lucide-react";
import AllUsers from "./AllUsers";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
  const adminMenu = [
    { label: "Dashboard", icon: Home, route:"/admin" },
    { label: "Users", icon: Users, route:"/admin/users" },
    { label: "Forms request", icon: FileText, route:"/admin/formrequest" },
    { label: "Sub-admin", icon: UserCog, route:"/admin/subadmin"},
    { label: "Employee", icon: UserCheck,route:"/admin/employee" },
    { label: "Form Category", icon: BarChart3, route:"/admin/formcategory" },
    { label: "Billing", icon: Receipt, route:"/admin/billing"},
  ];

  return (
    <div className="flex">
      <Sidebar menuItems={adminMenu} />

      <div className="ml-0 lg:ml-64 p-6 w-full">
        
        {/* HEADER */}
        <Header username=" Welcome, Aakanksha Yadav" />
        <Outlet/>
        
           {/* <AdminHome /> */}
           {/* <AllUsers/> */}
        </div>

      </div>

  );
}
