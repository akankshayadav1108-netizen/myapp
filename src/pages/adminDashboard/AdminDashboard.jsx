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
    { label: "Dashboard", icon: Home, route:"/adminDashboard" },
    { label: "Users", icon: Users, route:"/adminDashboard/users" },
    { label: "Forms request", icon: FileText },
    { label: "Sub-admin", icon: UserCog },
    { label: "Employee", icon: UserCheck },
    { label: "Reports", icon: BarChart3 },
    { label: "Billing", icon: Receipt },
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
