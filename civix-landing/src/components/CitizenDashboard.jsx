import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleSignout = () => {
    // Clear token or user session (adjust based on your auth logic)
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");

    // Redirect to login page
    navigate("/");
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">
          Civix <span className="beta"></span>
        </h2>

        {/* Profile Card */}
        <div className="profile-card">
          <div className="avatar">S</div>
          <div className="details">
            <h3>Sri</h3>
            <p className="status">🔒 Unverified Official</p>
            <p>📍 San Diego, CA</p>
            <p>ID: 204102002, sridharttamarap</p>
          </div>
        </div>

        {/* Menu */}
        <ul className="menu">
          <li className="active">🏠 Dashboard</li>
          <li>📜 Petitions</li>
          <li>📊 Polls</li>
          <li>👤 Officials</li>
          <li>📑 Reports</li>
          <li>⚙️ Settings</li>
          <li>❓ Help & Support</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          {/* Removed navigation links */}
          <button className="sign-btn" onClick={handleSignout}>
            Signout
          </button>
        </header>

        {/* Welcome Section */}
        <section className="welcome">
          <h2>Welcome back, Sri!</h2>
          <p>
            See what’s happening in your community and make your voice heard.
          </p>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="card">
            <h4>My Petitions</h4>
            <p className="number">0</p>
            <p>petitions</p>
          </div>
          <div className="card">
            <h4>Successful Petitions</h4>
            <p className="number">0</p>
            <p>or under review</p>
          </div>
        </section>

        {/* Active Petitions */}
        <section className="active-petitions">
          <h3>Active Petitions Near You</h3>
          <p className="location">
            Showing for: <span>San Diego, CA</span>
          </p>

          <div className="categories">
            <button className="active">All Categories</button>
            <button>Environment</button>
            <button>Infrastructure</button>
            <button>Education</button>
            <button>Public Safety</button>
            <button>Transportation</button>
          </div>

          <div className="no-petitions">
            <p>No petitions found with the current filters.</p>
            <button className="clear-btn">Clear Filters</button>
          </div>
        </section>
      </main>
    </div>
  );
}
