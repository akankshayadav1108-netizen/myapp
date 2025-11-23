import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";


import {
  Home,
  Inbox,
  CheckCircle,
  Clock,
  
  MessageSquare,
} from "lucide-react";

import { Outlet } from "react-router-dom";

export default function SubAdminDashboard() {
  const adminMenu = [
    { label: "Dashboard", icon: Home, route:"/employeeDashboard" },
     { label: "Request Inbox ", icon: Inbox, route:"/employeeDashboard/requests" },
    { label: " Complete Request", icon: CheckCircle, route:"/employeeDashboard/complete"},
    { label: "Panding Request", icon: Clock, route:"/employeeDashboard/panding"},
    { label: "Communication", icon: MessageSquare, route:"/employeeDashboard/communication"},
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
