import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";


import {
  Home,
  History,
  ClipboardList,
  Clock,
  MessageSquare,
} from "lucide-react";

import { Outlet } from "react-router-dom";

export default function UserDashboard() {
  const adminMenu = [
    { label: "Dashboard", icon: Home, route:"/userDashboard" },
     { label: "Form ", icon: ClipboardList, },
    { label: " Pending", icon: Clock , },
    { label: "History", icon: History,},
    { label: "Communication", icon: MessageSquare, },
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
