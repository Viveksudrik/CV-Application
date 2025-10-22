import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResumeTemplate({ general, education, experience }) {
    const resumeRef = useRef();

    // 📄 PDF Export Function
    const handleDownloadPDF = async () => {
        const resume = resumeRef.current;
        const canvas = await html2canvas(resume, {
            scale: 2,
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${general.name || "resume"}.pdf`);
    };

    return (
        <div className="w-full flex flex-col items-center bg-gray-100 py-10">
            {/* DOWNLOAD BUTTON */}
            <button
                onClick={handleDownloadPDF}
                className="mb-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
            >
                Download PDF
            </button>

            {/* RESUME TEMPLATE */}
            <div
                ref={resumeRef}
                id="resume"
                className="bg-white shadow-lg border border-gray-200 font-sans text-sm w-[800px] rounded overflow-hidden"
            >
                {/* HEADER */}
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
                    {/* LEFT COLUMN */}
                    <aside className="w-1/3 bg-blue-50 p-5 border-r border-gray-200">
                        {/* CONTACT SECTION */}
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

                        {/* EDUCATION SECTION */}
                        <section className="mb-6">
                            <h2 className="text-blue-700 font-bold text-sm border-b border-blue-700 mb-2">
                                EDUCATION
                            </h2>
                            {education.length > 0 ? (
                                education.map((edu) => (
                                    <div key={edu.id} className="mb-3">
                                        <p className="font-semibold text-gray-800">{edu.school}</p>
                                        <p className="text-gray-600 text-xs">{edu.degree}</p>
                                        <p className="text-gray-600 text-xs">{edu.year}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-xs italic">
                                    Add your education details in the form
                                </p>
                            )}
                        </section>
                    </aside>

                    {/* RIGHT COLUMN */}
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

                        {/* EXPERIENCE SECTION */}
                        <section>
                            <h2 className="text-blue-700 font-bold text-sm border-b border-blue-700 mb-2">
                                PROFESSIONAL EXPERIENCE
                            </h2>

                            {experience.length > 0 ? (
                                experience.map((exp) => (
                                    <div key={exp.id} className="mb-5">
                                        <h3 className="font-semibold text-gray-900 text-base">
                                            {exp.position || "Position Title"}
                                        </h3>
                                        <p className="text-gray-600 text-sm italic">
                                            {exp.company || "Company Name"}{" "}
                                            {exp.period && `| ${exp.period}`}
                                        </p>
                                        {exp.description && (
                                            <p className="text-gray-700 mt-1">{exp.description}</p>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-xs italic">
                                    Add your work experience in the form
                                </p>
                            )}
                        </section>
                    </section>
                </main>
            </div>
        </div>
    );
}
