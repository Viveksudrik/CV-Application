import React from "react";

export default function ResumeTemplate({ general, education, experience }) {
  return (
    <div
      id="resume"
      className="w-[800px] mx-auto bg-white shadow-lg border border-gray-200 font-sans text-sm print:w-full"
    >
      {/* Header */}
      <header className="flex items-center bg-blue-700 text-white p-6">
        {general.photo ? (
          <img
            src={general.photo}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mr-6 border-4 border-white"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-blue-500 mr-6" />
        )}
        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            {general.name || "Your Name"}
          </h1>
          <p className="text-lg opacity-90">
            {general.title || "Your Title (e.g., Software Engineer)"}
          </p>
        </div>
      </header>

      <main className="flex">
        {/* LEFT SIDEBAR */}
        <aside className="w-1/3 bg-blue-50 p-5 border-r border-gray-200">
          {/* CONTACT */}
          <section className="mb-6">
            <h2 className="text-blue-700 font-bold text-sm border-b border-blue-700 mb-2">
              CONTACT
            </h2>
            <ul className="text-gray-700 space-y-1">
              {general.phone && <li>📞 {general.phone}</li>}
              {general.location && <li>📍 {general.location}</li>}
              {general.email && <li>✉️ {general.email}</li>}
              {general.linkedin && <li>🔗 {general.linkedin}</li>}
            </ul>
          </section>

          {/* EDUCATION */}
          <section className="mb-6">
            <h2 className="text-blue-700 font-bold text-sm border-b border-blue-700 mb-2">
              EDUCATION
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <p className="font-semibold text-gray-800">{edu.school}</p>
                <p className="text-gray-600 text-xs">
                  {edu.degree} ({edu.year})
                </p>
              </div>
            ))}
          </section>
        </aside>

        {/* RIGHT CONTENT */}
        <section className="w-2/3 p-6">
          {/* SUMMARY */}
          {general.summary && (
            <section className="mb-6">
              <h2 className="text-blue-700 font-bold text-sm border-b border-blue-700 mb-2">
                SUMMARY
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {general.summary}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}
          <section>
            <h2 className="text-blue-700 font-bold text-sm border-b border-blue-700 mb-2">
              PROFESSIONAL EXPERIENCE
            </h2>

            {experience.length === 0 ? (
              <p className="text-gray-500 italic">
                Add your work experience in the form to see it here.
              </p>
            ) : (
              experience.map((exp) => (
                <div key={exp.id} className="mb-5">
                  <h3 className="font-semibold text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600 text-sm italic">
                    {exp.company} | {exp.period}
                  </p>
                  {exp.description && (
                    <p className="text-gray-700 mt-1">{exp.description}</p>
                  )}
                </div>
              ))
            )}
          </section>
        </section>
      </main>
    </div>
  );
}
