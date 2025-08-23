import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
// import logo from "../../assets/setvlogo.jpeg";
// If you need a logo, use the ServiceNow logo instead:
// import logo from "../../assets/ServiceNow_idno3ayWVM_1.png";

export default function PatientDetails() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-700 text-white min-h-screen relative">
       <img
                    src={logo}
                    alt="Logo"
                    className="absolute top-0  right-4 w-20 h-20 object-contain"
                  />
             <SideBar />
      <div className="flex">
      
        <div className="w-full sm:w-3/4 p-8 ml-40 mt-16">
          {/* Patient Info Section */}
          <div className="bg-gray-800 p-6 rounded-lg mb-6 shadow-lg ">
            {/* Back Button at the top right */}
            <button
              onClick={() => navigate(-1)}
              className="   bg-gray-700 text-gray-400 py-2 px-4 rounded hover:bg-gray-600 transition"
            >
              ← Back
            </button>

            <div className="flex items-center mb-4 flex-wrap ">
              {/* Circle for Profile Picture */}
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-3xl font-bold">
                U1
              </div>
              <div className="ml-6">
                <div className="mt-2">
                  {/* Name and Age side by side on large screens, stacked on smaller screens */}
                  <div className="flex flex-wrap gap-28 mb-6">
                    <div className="w-full sm:w-auto">
                      <p className="text-gray-400">Name</p>
                      <p className="font-bold">User 1</p>
                    </div>
                    <div className="w-full sm:w-auto">
                      <p className="text-gray-400">Age</p>
                      <p className="font-bold">45</p>
                    </div>
                  </div>

                  {/* Phone and Gender side by side on large screens, stacked on smaller screens */}
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <div className="w-full sm:w-auto">
                      <p className="text-gray-400">Phone</p>
                      <p className="font-bold">+1 (555) 123-4567</p>
                    </div>
                    <div className="w-full sm:w-auto">
                      <p className="text-gray-400">Gender</p>
                      <p className="font-bold">Male</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scan Info Section */}
          <div className="bg-gray-800 flex items-center justify-between p-6 rounded-lg mb-4 shadow-lg flex-wrap">
            {/* Date and Type of Scan on the Left, flex-wrap for smaller screens */}
            <div className="flex flex-wrap gap-6 justify-between items-center mb-4 w-full sm:w-auto">
              <div className="w-full sm:w-auto">
                <p className="text-gray-400">DATE</p>
                <p className="font-bold">07-01-2025 09:30 AM</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="text-gray-400">TYPE OF SCAN</p>
                <p className="font-bold">MRI</p>
              </div>
            </div>

            {/* Action Buttons on the Right, stacked on smaller screens */}
            <div className="flex flex-wrap justify-end space-x-4 gap-2 sm:gap-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                Analyze Frames
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                View Video
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                View Report
              </button>
            </div>
          </div>

          {/* Second Scan Info Section */}
          <div className="bg-gray-800 flex items-center justify-between p-6 rounded-lg shadow-lg flex-wrap">
            {/* Date and Type of Scan on the Left */}
            <div className="flex flex-wrap gap-6 justify-between items-center mb-4 w-full sm:w-auto">
              <div className="w-full sm:w-auto">
                <p className="text-gray-400">DATE</p>
                <p className="font-bold">15-12-2024 02:45 PM</p>
              </div>
              <div className="w-full sm:w-auto">
                <p className="text-gray-400">TYPE OF SCAN</p>
                <p className="font-bold">CT Scan</p>
              </div>
            </div>

            {/* Action Buttons on the Right */}
            <div className="flex flex-wrap justify-end space-x-4 gap-2 sm:gap-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                Analyze Frames
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                View Video
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                View Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
