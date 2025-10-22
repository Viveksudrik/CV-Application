import React, { useState, useEffect } from "react";

<div className="min-h-screen bg-gray-50 p-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow no-print">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl font-semibold">CV Builder</h1>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span
                className={`autosave-dot ${
                  autosaveStatus === "saving"
                    ? "autosave-saving"
                    : "autosave-saved"
                }`}
              />
              <span>{autosaveStatus === "saving" ? "Saving..." : "Saved"}</span>
            </div>
            <button
              onClick={() => window.print()}
              className="px-3 py-1 bg-indigo-600 text-white rounded"
            >
              Print
            </button>
          </div>
        </div>

        <GeneralForm
          value={general}
          onChange={setGeneral}
          editing={editing.general}
          setEditing={(v) => setEditing((prev) => ({ ...prev, general: v }))}
        />

        <EducationForm
          value={education}
          onChange={setEducation}
          editing={editing.education}
          setEditing={(v) => setEditing((prev) => ({ ...prev, education: v }))}
        />

        <ExperienceForm
          value={experience}
          onChange={setExperience}
          editing={editing.experience}
          setEditing={(v) => setEditing((prev) => ({ ...prev, experience: v }))}
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow no-print">
        <h2 className="text-lg font-semibold mb-2">Export</h2>
        <p className="text-sm text-gray-600 mb-3">
          Download a one-page PDF based on the resume template.
        </p>
        <ResumeTemplate.ExportButton
          data={{ general, education, experience }}
        />
      </div>
    </div>

    <aside className="bg-white p-6 rounded-lg shadow resume-root">
      <Preview
        data={{ general, education, experience }}
        setEditing={setEditing}
      />
    </aside>
  </div>
</div>;
