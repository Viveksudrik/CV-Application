import React, { useState } from "react";
import GeneralForm from "./components/GeneralForm.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import ResumeTemplate from "./components/ResumeTemplate.jsx";

export default function App() {
  // 🌐 Global state for CV data
  const [general, setGeneral] = useState({
    name: "",
    title: "",
    phone: "",
    email: "",
    location: "",
    linkedin: "",
    summary: "",
    photo: "",
  });

  const [education, setEducation] = useState([
    { id: 1, school: "", degree: "", year: "" },
  ]);

  const [experience, setExperience] = useState([
    { id: 1, company: "", position: "", period: "", description: "" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        CV Builder Application
      </h1>

      {/* FORM SECTION */}
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        <div className="flex-1 space-y-6 bg-white p-6 shadow rounded">
          <GeneralForm general={general} setGeneral={setGeneral} />
          <EducationForm education={education} setEducation={setEducation} />
          <ExperienceForm experience={experience} setExperience={setExperience} />
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
