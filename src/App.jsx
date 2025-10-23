import React, { useState } from "react";
import GeneralForm from "./components/GeneralForm.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import ResumeTemplate from "./components/ResumeTemplate.jsx";

export default function App() {
  // 🌐 Global state for CV data, using 'fullName' to match GeneralForm
  const [general, setGeneral] = useState({
    fullName: "",
    title: "",
    phone: "",
    email: "",
    location: "",
    linkedin: "",
    summary: "",
    photo: "",
  });

  const [education, setEducation] = useState([
    // Using 'period' to match the ResumeTemplate and EducationForm fields
    { id: 1, school: "", degree: "", period: "" }, 
  ]);

  const [experience, setExperience] = useState([
    { id: 1, company: "", position: "", period: "", description: "" },
  ]);

  // State to control which section is in 'editing' mode
  const [editing, setEditing] = useState({
    general: true, // Start with general form open
    education: false,
    experience: true, // Experience form is always in the form component itself
  });
  
  // Helper function to update a single editing state property
  const updateEditing = (key, isEditing) => {
    setEditing((prev) => ({ ...prev, [key]: isEditing }));
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        CV Builder Application
      </h1>

      {/* FORM SECTION */}
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        <div className="flex-1 space-y-6 bg-white p-6 shadow rounded">
          {/* Using 'value' and 'onChange' props as expected by GeneralForm */}
          <GeneralForm
            value={general}
            onChange={setGeneral} 
            editing={editing.general}
            setEditing={(isEditing) => updateEditing('general', isEditing)}
          />

          <EducationForm
            value={education}
            onChange={setEducation}
            editing={editing.education}
            setEditing={(isEditing) => updateEditing('education', isEditing)}
          />
          
          {/* ExperienceForm is kept simple, assuming it's always editable */}
          <ExperienceForm 
            experience={experience} 
            setExperience={setExperience} 
          />
        </div>

        {/* LIVE PREVIEW SECTION */}
        <div className="flex-1">
          <ResumeTemplate
            general={general}
            education={education}
            experience={experience}
          />
        </div>
      </div>
    </div>
  );
}