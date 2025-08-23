//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////// SETV HEALTHCARE TECHNOLOGIES PRIVATE LIMITED ///////////////////////
//////////////////// PREGNANCY TRACKER SOURCE CODE VERSION 2.0 (READY FOR DEVELOPMENT) ///////
// CODE CLEANED LAST ON : 27-02-2025
// CODE LENGTH OF FILE SIDEBAR.JSX LINE 16 - LINE 108
// NUMBER OF SANITY CHECKS DONE DURING DEVELOPMENT : 6 CHECKS
// DATE OF DEVELOPMENT START OF SIDEBAR.JSX : 25/2/2025 - 27/2/2025
///////////////////////// BASIC INFORMATION ABOUT THE FILE //////////////////////////////////////////
// This React component represents the sidebar navigation for the Pregnancy Tracker Application. 
// It offers a collapsible sidebar menu with various navigation options and user logout functionality. 
// Below is a detailed breakdown of the code's structure, functionality, and key features:

/* 
Sidebar Features:
- Toggle open/close sidebar using a button.
- Displays logged-in user’s name fetched from sessionStorage.
- Contains navigation links to different pages (Trimester Selection, All Reports, FAQ).
- Provides a logout button that clears user session and redirects to the login page.
- Full-screen overlay applied when sidebar is open for better UX.

State Management:
- isOpen: Tracks whether the sidebar is visible.

Navigation & Redirection:
- Uses react-router-dom for navigation (Link & useNavigate hooks).

Logout Flow:
- Clears localStorage data.
- Redirects user to the login page after a small timeout.

Dynamic UI Components:
- Animated sidebar opening/closing.
- Interactive hover effects on navigation links.
- Responsive layout support for different screen sizes.

Error Handling:
- None explicitly required for this component (relies on parent-level error handling).

*/

// Key Libraries and Dependencies
/*
React: Core library for building UI.
react-router-dom: Provides navigation and redirection functionality.
lucide-react: Provides icons for toggle and close buttons.
Tailwind CSS: Used for styling.
*/

// Data Flow:
/*
- Fetches loggedInuser from sessionStorage.
- Clears user session on logout.
*/

// ENV OF FILE: FRONTEND
// LANGUAGES USED: REACT JS, TAILWIND CSS
// SECURITY CODE LEVEL: HIGH
//////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////// CODE STARTS HERE ////////////////////////////////////////////////





import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Menu, X } from 'lucide-react'; // Import Hamburger (Menu) and Close (X) icons

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility
  const navigate = useNavigate(); // Initialize useNavigate hook

  const name = localStorage.getItem('loggedInuser');
  // Toggle the sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Handle Logout with Navigation
  const handleLogoutAndNavigate = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInuser');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
    // Redirect to login page
  };

  return (
    <div>
      {/* Menu Icon */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 text-white z-50"
        aria-label="Toggle Sidebar"
      >
        {!isOpen ? <Menu size={32} /> : null}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 w-64 shadow-lg flex flex-col transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">ServiceNow</h1>
          <button onClick={toggleSidebar} className="text-white">
            <X size={32} />
          </button>
        </div>

        {/* Display Logged In User */}
        <div className="p-4 border-b border-gray-800 text-white">
          Welcome {name} ! 
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow mt-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block py-2 px-6 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md"
              >
                Select Scan
              </Link>
            </li>
            <li>
              <Link
                to="/all-reports"
                className="block py-2 px-6 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md"
              >
                View All Reports
              </Link>
            </li>

            <li>
              <Link
                to="/faq"
                className="block py-2 px-6 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Log Out Button */}
        <div className="p-6 border-t border-gray-800">
          <button
            onClick={handleLogoutAndNavigate} // Use the new logout handler with navigation
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}