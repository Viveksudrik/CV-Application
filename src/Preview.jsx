import React from "react";

export default function Preview({ data, setEditing }) {
  const { general, education, experience } = data;
  return (
    <div>
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="resume-name">{general.fullName || "Your Name"}</div>
          <div className="resume-contact text-sm">
            {general.email} • {general.phone}
          </div>
        </div>
        <div className="text-sm">
          <button
            className="px-2 py-1 border rounded mr-2"
            onClick={() => setEditing((prev) => ({ ...prev, general: true }))}
          >
            Edit
          </button>
          <button
            className="px-2 py-1 border rounded"
            onClick={() => setEditing((prev) => ({ ...prev, education: true }))}
          >
            Edit Education
          </button>
        </div>
      </div>

      <div className="mt-3">
        <div className="resume-section-title">Summary</div>
        <div className="text-sm summary">{general.summary}</div>
      </div>

      <div className="mt-4">
        <div className="resume-section-title">Education</div>
        <div className="space-y-2">
          {education.map((e) => (
            <div key={e.id}>
              <div className="font-semibold">
                {e.degree} — {e.school}
              </div>
              <div className="text-sm text-gray-600">{e.period}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="resume-section-title">Experience</div>
        <div className="space-y-2">
          {experience.map((ex) => (
            <div key={ex.id}>
              <div className="font-semibold">
                {ex.position} — {ex.company}
              </div>
              <div className="text-sm text-gray-600">{ex.period}</div>
              <div className="text-sm">{ex.responsibilities}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        This is a preview. Use the Export button to download a printable PDF.
      </div>

      <div className="mt-6">
        <ResumeTemplate.Embed data={data} />
      </div>
    </div>
  );
}
