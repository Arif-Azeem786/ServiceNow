//////////////////////////////////////////////////////////////////////////////////////////////////////
//                              SETV HEALTHCARE TECHNOLOGIES PRIVATE LIMITED                         //
////////////////////////////////// WOMEN WELLNESS DETECTION MODULE ////////////////////////////////////
//                              DETECTIONSELECTION SOURCE CODE VERSION 2.0                          //
//                            CODE CLEANED LAST ON : 05-03-2025                                     //
//                            CODE LENGTH OF FILE : LINE 16 - LINE 146                              //
//                            NUMBER OF SANITY CHECKS DONE DURING DEVELOPMENT : 5 CHECKS            //
//             DATE OF DEVELOPMENT START : 03/03/2025  - DATE OF COMPLETION : 04/03/2025            //
///////////////////////// BASIC INFORMATION ABOUT THE FILE //////////////////////////////////////////
// This React component serves as a detection selection interface for the Women Wellness Module.
// It allows users to select between Breast Cancer Detection and Fibroids Detection.
// Based on user selection, the component navigates to specialized diagnostic components.

// Key Features:
/*
Detection Selection:

Users can choose between:
1. Breast Cancer Detection
2. Fibroids Detection

Dynamic UI:

Options are displayed inside styled Cards.
Hover and scale effects improve usability.

Navigation to Diagnostic Modules:

Upon selecting an option, the user is redirected to a dedicated route (e.g., Breast Cancer or Fibroids Detection).

Patient Information:

This component does not handle patient data directly. It assumes that patient details have been captured earlier.

Error Handling:

Basic checks ensure the options array exists and is properly rendered.

Responsive Design:

Optimized for mobile and desktop.
Flexible layout adapts to screen sizes with responsive paddings and typography.
*/

// Key Libraries and Dependencies:
/*
React: Core library for building the UI.

React Router: Handles programmatic navigation to diagnostic routes.

@/components/ui/button and card: Custom UI components using Tailwind + ShadCN.

Tailwind CSS: For styling and responsive design.

Lucide React (indirectly via button/card components): Provides icons for a consistent design language.
*/

//Data Flow:
/*
User selects detection option > Component navigates to appropriate diagnostic page.

Selected option is passed via React Router state.
*/

//ENV OF FILE : FRONTEND
// LANGUAGES USED : REACT JS , TAILWIND CSS
// SECURITY CODE LEVEL : HIGH
//////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////// CODE STARTS HERE ////////////////////////////////////////////////




import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import SideBar from "@/components/kunal_components/SideBar";
import logo from "../assets/ServiceNow_idno3ayWVM_1.png";
import SideBar from "./kunal_components/SideBar";

const DetectionSelection = () => {
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    if (option === "Breast Cancer Detection") {
      navigate("/breast-cancer", {
        state: { selectedOption: option },
      });
    } else if (option === "Fibroids Detection") {
      navigate("/fibroids-detection", {
        state: { selectedOption: option },
      });
    }
    else if (option === "PCOS Detection") {
      navigate("/pcos-detection", {
        state: { selectedOption: option },
      });
    }
  };
  const location = useLocation();
  const path = location.pathname;
  sessionStorage.setItem("page", path);


  return (
    <div className="flex flex-col lg:flex-row relative bg-gray-900 min-h-screen">
      <img
        src={logo}
        alt="Logo"
        className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 object-contain"
      />

      {/* Sidebar */}
      <SideBar className="lg:static lg:flex-shrink-0" />

      {/* Main Content */}
      <div className="flex-1 mx-auto p-4 md:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
           Women Wellness
          </h1>

          <div className="space-y-6">
            {["Breast Cancer Detection", "Fibroids Detection","PCOS Detection"].map(
              (option, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <Button
                      className="w-full py-6 text-lg font-semibold text-white bg-gray-700 hover:bg-blue-600 hover:scale-105 transition-all duration-200 rounded-lg"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </Button>
                  </CardContent>
                </Card>
              )
            )}
          </div>

          <div className="mt-8 text-center text-gray-400">
            <p className="text-sm md:text-base">
              Choose the type of analysis you want to perform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectionSelection;
