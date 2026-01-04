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
    { label: "Dashboard", icon: Home, route:"/subAdmin" },
    { label: "Request", icon: Inbox, route:"/subAdmin/request"},
     { label: "Teams", icon: Users2, route:"/subAdmin/teams"},
    { label: "Asign Form ", icon: FileCheck, route:"/subAdmin/assignform" },
    { label: "Employee Work", icon: BarChart3, route:"/subAdmin/employee" },
    { label: "Requeest Traking", icon: ListTree, route:"/subAdmin/tracking"  },
    { label: "Communication", icon: MessageSquare , route:"/subAdmin/communication"},
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
