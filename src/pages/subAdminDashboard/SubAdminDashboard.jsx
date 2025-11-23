import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import SubAdminHome from "./SubAdminHome";

import {
  Home,
  Users2,
  Inbox,
  FileCheck,
  BarChart3,
  ListTree  ,
  MessageSquare,
} from "lucide-react";

import { Outlet } from "react-router-dom";

export default function SubAdminDashboard() {
  const adminMenu = [
    { label: "Dashboard", icon: Home, route:"/subAdminDashboard" },
    { label: "Request", icon: Inbox, route:"/subAdminDashboard/request"},
     { label: "Teams", icon: Users2, route:"/subAdminDashboard/teams"},
    { label: "Asign Form ", icon: FileCheck, route:"/subAdminDashboard/assignform" },
    { label: "Employee Work", icon: BarChart3, route:"/subAdminDashboard/employee" },
    { label: "Requeest Traking", icon: ListTree, route:"/subAdminDashboard/tracking"  },
    { label: "Communication", icon: MessageSquare , route:"/subAdminDashboard/communication"},
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
