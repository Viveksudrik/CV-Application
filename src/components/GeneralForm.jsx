import React, { useState, useEffect } from "react";

const MAX_SUMMARY = 500;

export default function GeneralForm({ value, onChange, editing, setEditing }) {
  const [local, setLocal] = useState(value);
  const [errors, setErrors] = useState({});

  useEffect(() => setLocal(value), [value]);

  function validate() {
    const e = {};
    if (!local.fullName || local.fullName.trim().length < 2)
      e.fullName = "Please enter your full name.";
    if (local.email && !/^\S+@\S+\.\S+$/.test(local.email))
      e.email = "Email seems invalid.";
    if (local.summary && local.summary.length > MAX_SUMMARY)
      e.summary = `Keep summary under ${MAX_SUMMARY} chars.`;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave(e) {
    e.preventDefault();
    if (!validate()) return;
    onChange(local);
    setEditing(false);
  }

  if (!editing) {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">General</h3>
          <button
            className="px-2 py-1 bg-gray-100 rounded text-sm"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        </div>
        <div className="mt-3">
          <div className="text-xl font-bold">
            {value.fullName || "Your Name"}
          </div>
          <div className="text-sm text-gray-600">
            {value.email} • {value.phone}
          </div>
          <p className="mt-2 text-sm summary">{value.summary}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSave} className="mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">General</h3>
        <div className="text-sm text-gray-500">
          Make it concise for the resume
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label className="text-sm">Full name</label>
          <input
            value={local.fullName}
            onChange={(e) => setLocal({ ...local, fullName: e.target.value })}
            className="mt-1 p-2 border rounded w-full"
          />
          {errors.fullName && (
            <div className="text-red-600 text-sm">{errors.fullName}</div>
          )}
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input
            value={local.email}
            onChange={(e) => setLocal({ ...local, email: e.target.value })}
            className="mt-1 p-2 border rounded w-full"
          />
          {errors.email && (
            <div className="text-red-600 text-sm">{errors.email}</div>
          )}
        </div>
        <div>
          <label className="text-sm">Phone</label>
          <input
            value={local.phone}
            onChange={(e) => setLocal({ ...local, phone: e.target.value })}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
      </div>

      <div className="mt-3">
        <label className="text-sm">Summary</label>
        <textarea
          value={local.summary}
          onChange={(e) => setLocal({ ...local, summary: e.target.value })}
          rows={4}
          className="mt-1 p-2 border rounded w-full"
        />
        <div className="text-xs text-gray-500 mt-1">
          {local.summary.length}/{MAX_SUMMARY}
        </div>
        {errors.summary && (
          <div className="text-red-600 text-sm">{errors.summary}</div>
        )}
      </div>

      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 bg-green-600 text-white rounded">
          Save
        </button>
        <button
          type="button"
          onClick={() => {
            setLocal(value);
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
