import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FileText,
  BarChart2,
  Users,
  ClipboardList,
  Settings,
  HelpCircle,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const role = localStorage.getItem("userRole"); // ✅ get role

  const links = [
    { to: role === "citizen" ? "/dashboard/citizen" : "/dashboard/official", label: "Dashboard", icon: Home },
    { to: role === "citizen" ? "/dashboard/citizen/petitions" : "/dashboard/official/petitions", label: "Petitions", icon: FileText },
    { to: "/polls", label: "Polls", icon: BarChart2 },
    { to: "/officials", label: "Officials", icon: Users },
    { to: "/reports", label: "Reports", icon: ClipboardList },
    { to: "/settings", label: "Settings", icon: Settings },
    { to: "/help", label: "Help & Support", icon: HelpCircle },
  ];

  return (
    <div className="w-64 bg-white border-r shadow-sm flex flex-col">
      {/* Profile */}
      <div className="p-6 border-b text-center">
        <div className="w-16 h-16 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-2xl font-bold mx-auto">
          S
        </div>
        <h2 className="mt-3 font-semibold text-gray-800">Sri</h2>
        <p className="text-xs text-gray-500">Unverified Official</p>
        <p className="text-xs text-gray-400">📍 San Diego, CA</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {links.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to;

          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} className={isActive ? "text-blue-600" : "text-gray-500"} />
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
