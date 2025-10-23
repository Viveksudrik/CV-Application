import React, { useState, useEffect } from "react";

const MAX_SUMMARY = 500;

// HELPER: Ensures all fields are initialized as empty strings
const getSafeGeneralState = (value) => ({
    fullName: value?.fullName || "",
    title: value?.title || "", // NEW
    email: value?.email || "",
    phone: value?.phone || "",
    location: value?.location || "", // NEW
    linkedin: value?.linkedin || "", // NEW
    photo: value?.photo || "",       // NEW (as URL)
    summary: value?.summary || "",
});

export default function GeneralForm({ value, onChange, editing, setEditing }) {
  // Use the safe helper for initial state
  const [local, setLocal] = useState(() => getSafeGeneralState(value));
  const [errors, setErrors] = useState({});

  // Use the safe helper for effect updates
  useEffect(() => setLocal(getSafeGeneralState(value)), [value]);

  function validate() {
    const e = {};
    // Validation
    if (!local.fullName || local.fullName.trim().length < 2)
      e.fullName = "Full name must be at least 2 characters.";
    if (!local.title || local.title.trim().length < 2)
      e.title = "Please enter a professional title.";
    if (local.email && !/^\S+@\S+\.\S+$/.test(local.email))
      e.email = "Email seems invalid.";
    if (local.linkedin && !/^https?:\/\/.+/.test(local.linkedin))
      e.linkedin = "LinkedIn URL must be a valid link (e.g., https://...)";
    if (local.photo && !/^https?:\/\/.+/.test(local.photo))
      e.photo = "Photo must be a valid URL.";
      
    if (local.summary.length > MAX_SUMMARY)
      e.summary = `Keep summary under ${MAX_SUMMARY} chars.`;
      
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave(e) {
    e.preventDefault();
    if (!validate()) return;
    onChange(local); // Pass the full local state up
    setEditing(false);
    setErrors({});
  }

  // --- Display Mode (Not Editing) ---
  if (!editing) {
    // Helper to build the contact info string, skipping empty fields
    const contactInfo = [value.email, value.phone, value.location, value.linkedin]
      .filter(Boolean) // Remove empty strings
      .join(" • "); // Join with a separator

    return (
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">General Information</h3>
          <button
            className="px-2 py-1 bg-gray-100 rounded text-sm no-print"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        </div>
        <div className="mt-3 flex items-center gap-4">
          {value.photo && (
            <img
              src={value.photo}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
            />
          )}
          <div>
            <div className="text-2xl font-bold">
              {value.fullName || "Your Name"}
            </div>
            <div className="text-lg font-medium text-blue-600">
              {value.title || "Your Professional Title"}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              {contactInfo}
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm summary">{value.summary}</p>
      </div>
    );
  }

  // --- Form Mode (Editing) ---
  return (
    <form onSubmit={handleSave} className="mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">General Information</h3>
        <div className="text-sm text-gray-500">
          Start with the basics
        </div>
      </div>

      {/* 2-Column Grid for main fields */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Full name</label>
          <input
            value={local.fullName}
            onChange={(e) => setLocal({ ...local, fullName: e.target.value })}
            className="mt-1 p-2 border rounded w-full"
            placeholder="e.g., Vivek Sudrik"
          />
          {errors.fullName && (
            <div className="text-red-600 text-sm">{errors.fullName}</div>
          )}
        </div>
        
        <div>
          <label className="text-sm font-medium">Professional Title</label>
          <input
            value={local.title}
            onChange={(e) => setLocal({ ...local, title: e.target.value })}
            className="mt-1 p-2 border rounded w-full"
            placeholder="e.g., Software Engineer"
          />
          {errors.title && (
            <div className="text-red-600 text-sm">{errors.title}</div>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            value={local.email}
            onChange={(e) => setLocal({ ...local, email: e.target.value })}
            className="mt-1 p-2 border rounded w-full"
            placeholder="e.g., vivek10@email.com"
          />
          {errors.email && (
            <div className="text-red-600 text-sm">{errors.email}</div>
          )}
        </div>
        
        <div>
          <label className="text-sm font-medium">Phone</label>
          <input
            type="tel"
            value={local.phone}
            onChange={(e) => setLocal({ ...local, phone: e.target.value })}
            className="mt-1 p-2 border rounded w-full"
            placeholder="e.g., +91 1234567890"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Location</label>
          <input
            value={local.location}
            onChange={(e) => setLocal({ ...local, location: e.target.value })}
            className="mt-1 p-2 border rounded w-full"
            placeholder="e.g., Mumbai, India"
          />
        </div>

        <div>
          <label className="text-sm font-medium">LinkedIn URL</label>
          <input
            value={local.linkedin}
            onChange={(e) => setLocal({ ...local, linkedin: e.target.value })}
            className="mt-1 p-2 border rounded w-full"
            placeholder="e.g., https://linkedin.com/in/vivek-sudrik"
          />
          {errors.linkedin && (
            <div className="text-red-600 text-sm">{errors.linkedin}</div>
          )}
        </div>
      </div>

      {/* Full-width fields */}
      <div className="mt-4">
        <label className="text-sm font-medium">Photo URL</label>
        <input
          value={local.photo}
          onChange={(e) => setLocal({ ...local, photo: e.target.value })}
          className="mt-1 p-2 border rounded w-full"
          placeholder="e.g., https://photo.com/your-photo.jpg"
        />
        {errors.photo && (
          <div className="text-red-600 text-sm">{errors.photo}</div>
        )}
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium">Summary</label>
        <textarea
          value={local.summary}
          onChange={(e) => setLocal({ ...local, summary: e.target.value })}
          rows={5}
          className="mt-1 p-2 border rounded w-full"
          placeholder="A brief, impactful summary of your career highlights..."
        />
        <div className="text-xs text-gray-500 mt-1">
          {local.summary.length}/{MAX_SUMMARY}
        </div>
        {errors.summary && (
          <div className="text-red-600 text-sm">{errors.summary}</div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-2">
        <button type="submit" className="px-3 py-1 bg-green-600 text-white rounded">
          Save
        </button>
        <button
          type="button"
          onClick={() => {
            setLocal(getSafeGeneralState(value)); // Revert using helper
            setErrors({});
            setEditing(false);
          }}
          className="px-3 py-1 border rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}