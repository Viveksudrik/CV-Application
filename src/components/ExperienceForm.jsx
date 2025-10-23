import React from "react";

export default function ExperienceForm({ experience, setExperience }) {
  // 🧩 Handle input changes
  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setExperience((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [name]: value } : exp))
    );
  };

  // ➕ Add new experience entry
  const addExperience = () => {
    setExperience((prev) => [
      ...prev,
      { id: Date.now(), company: "", position: "", period: "", description: "" },
    ]);
  };

  // 🗑️ Remove experience entry
  const removeExperience = (id) => {
    setExperience((prev) => prev.filter((exp) => exp.id !== id));
  };

  // ✅ Return JSX inside function — properly wrapped
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Experience</h3>

      {experience.map((exp) => (
        <div key={exp.id} className="border p-4 rounded mb-3 bg-white shadow-sm">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleChange(exp.id, e)}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={exp.position}
            onChange={(e) => handleChange(exp.id, e)}
            className="border rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            name="period"
            placeholder="Period (e.g. 2023 - 2024)"
            value={exp.period}
            onChange={(e) => handleChange(exp.id, e)}
            className="border rounded p-2 w-full mb-2"
          />
          <textarea
            name="description"
            placeholder="Work description"
            value={exp.description}
            onChange={(e) => handleChange(exp.id, e)}
            className="border rounded p-2 w-full mb-3"
          />

          <button
            type="button" // FIX: Added type="button"
            onClick={() => removeExperience(exp.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button" // FIX: Added type="button"
        onClick={addExperience}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + Add Experience
      </button>
    </div>
  );
}