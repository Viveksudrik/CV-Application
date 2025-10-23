import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// This will be your main resume template component
export default function ResumeTemplate({
  general,
  technicalSkills,
  softSkills,
  education, // Assuming education might be added later, currently not in your image
  experience,
}) {
  const resumeRef = useRef();

  // PDF Export Function
  const handleDownloadPDF = async () => {
    const resume = resumeRef.current;
    if (!resume) return; // Guard clause

    const canvas = await html2canvas(resume, {
      scale: 2, // Higher scale for better PDF quality
      useCORS: true, // Important if loading external images
      allowTaint: true, // Allow tainting for external images if necessary
      scrollX: 0,
      scrollY: -window.scrollY, // Correct scrolling for entire page capture
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${general.fullName || "resume"}.pdf`);
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 py-10 no-print">
      {/* DOWNLOAD BUTTON - Only visible on screen, not in print */}
      <button
        onClick={handleDownloadPDF}
        className="mb-6 px-5 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-all shadow-md"
      >
        Download PDF
      </button>

      {/* RESUME TEMPLATE CONTAINER */}
      <div
        ref={resumeRef}
        id="resume-pdf-target" // Unique ID for PDF target
        className="bg-white shadow-xl border border-gray-200 font-sans text-[10.5pt] w-[8.5in] h-[11in] flex flex-col overflow-hidden" // A4 size
      >
        {/* HEADER SECTION */}
        <header className="flex items-center bg-[#007bff] text-white p-6 relative h-32"> {/* Blue background */}
          {/* Photo on left */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md absolute left-6 -bottom-8">
            {general.photo ? (
              <img
                src={general.photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs">
                No Photo
              </div>
            )}
          </div>

          {/* Name and Title */}
          <div className="ml-36"> {/* Adjust margin to clear the photo */}
            <h1 className="text-4xl font-bold tracking-tight">
              {general.fullName.toUpperCase() || "YOUR NAME"}
            </h1>
            <p className="text-xl font-light opacity-90 -mt-1">
              {general.title || "Profession"}
            </p>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <div className="flex flex-1">
          {/* LEFT SIDEBAR (Contact, Skills) */}
          <aside className="w-[30%] bg-gray-50 p-6 pt-10 border-r border-gray-200 text-gray-700">
            {/* CONTACT SECTION */}
            <section className="mb-6">
              <h2 className="text-[#007bff] font-bold text-lg border-b-2 border-gray-300 pb-1 mb-3 uppercase">
                Contact
              </h2>
              <ul className="space-y-1 text-[10pt]">
                {general.phone && (
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600">📞</span> {general.phone}
                  </li>
                )}
                {general.location && (
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600">📍</span>{" "}
                    {general.location}
                  </li>
                )}
                {general.email && (
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600">📧</span> {general.email}
                  </li>
                )}
                {general.linkedin && (
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600">🔗</span>{" "}
                    <a
                      href={general.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-700"
                    >
                      LinkedIn Profile
                    </a>
                  </li>
                )}
              </ul>
            </section>

            {/* TECHNICAL SKILLS */}
            <section className="mb-6">
              <h2 className="text-[#007bff] font-bold text-lg border-b-2 border-gray-300 pb-1 mb-3 uppercase">
                Technical Skills
              </h2>
              {technicalSkills && Object.keys(technicalSkills).length > 0 ? (
                <div className="space-y-2 text-[10pt]">
                  {Object.entries(technicalSkills).map(([category, skillsArray]) => (
                    <div key={category}>
                      <p className="font-semibold text-gray-800">
                        {category}:
                      </p>
                      <ul className="list-disc list-inside ml-2">
                        {skillsArray.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-xs italic">No technical skills added.</p>
              )}
            </section>

            {/* SOFT SKILLS */}
            <section className="mb-6">
              <h2 className="text-[#007bff] font-bold text-lg border-b-2 border-gray-300 pb-1 mb-3 uppercase">
                Soft Skills
              </h2>
              {softSkills && softSkills.length > 0 ? (
                <ul className="list-disc list-inside ml-2 text-[10pt]">
                  {softSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-xs italic">No soft skills added.</p>
              )}
            </section>

            {/* EDUCATION SECTION (if you add it) */}
            {education && education.length > 0 && (
              <section className="mb-6">
                <h2 className="text-[#007bff] font-bold text-lg border-b-2 border-gray-300 pb-1 mb-3 uppercase">
                  Education
                </h2>
                <div className="space-y-3 text-[10pt]">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <p className="font-semibold text-gray-800">
                        {edu.degree || "Degree"}
                      </p>
                      <p className="text-gray-600 text-xs">
                        {edu.school || "University Name"}
                      </p>
                      <p className="text-gray-600 text-xs">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </aside>

          {/* RIGHT MAIN CONTENT (Summary, Experience) */}
          <section className="w-[70%] p-6 pt-10 text-gray-800">
            {/* SUMMARY SECTION */}
            {general.summary && (
              <section className="mb-8">
                <h2 className="text-[#007bff] font-bold text-lg border-b-2 border-gray-300 pb-1 mb-3 uppercase">
                  Summary
                </h2>
                <p className="text-gray-700 leading-relaxed text-[10pt] whitespace-pre-line">
                  {general.summary}
                </p>
              </section>
            )}

            {/* PROFESSIONAL EXPERIENCE SECTION */}
            <section>
              <h2 className="text-[#007bff] font-bold text-lg border-b-2 border-gray-300 pb-1 mb-3 uppercase">
                Professional Experience
              </h2>

              {experience && experience.length > 0 ? (
                <div className="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.id} className="text-[10pt]">
                      <h3 className="font-bold text-gray-900 text-[11pt]">
                        {exp.position || "Position Title"}
                      </h3>
                      <p className="text-gray-700 text-sm italic -mt-1">
                        {exp.company || "Company Name"}{" "}
                        {exp.period && `| ${exp.period}`}
                      </p>
                      <ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-[10pt]">
                        {exp.description && // Assuming description is a string with bullet points, split it.
                          exp.description.split('\n').filter(line => line.trim() !== '').map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-xs italic">
                  No professional experience added.
                </p>
              )}
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
