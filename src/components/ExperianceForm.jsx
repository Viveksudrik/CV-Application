import React from "react";
<div className="mb-4">
  <div className="flex justify-between items-start">
    <h3 className="text-lg font-semibold">Experience</h3>
    <button
      className="px-2 py-1 bg-gray-100 rounded text-sm"
      onClick={() => setEditing(true)}
    >
      Edit
    </button>
  </div>
  <div className="mt-3 space-y-2">
    {value.map((v) => (
      <div key={v.id}>
        <div className="font-semibold">
          {v.position || "Position"} — {v.company || "Company"}
        </div>
        <div className="text-sm text-gray-600">{v.period}</div>
        <div className="text-sm">{v.responsibilities}</div>
      </div>
    ))}
  </div>
</div>;

return (
  <div className="mb-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">Experience</h3>
      <div className="text-sm text-gray-500">Add work experience</div>
    </div>

    <div className="mt-3 space-y-3">
      {value.map((v, idx) => (
        <div key={v.id} className="p-3 border ro</div>unded">
          <div className="flex justify-between items-start">
            <strong>Entry {idx + 1}</strong>
            <button
              className="text-red-600 text-sm"
              onClick={() => removeEntry(v.id)}
            >
              Remove
            </button>
          </div>
          <div className="mt-2 grid md:grid-cols-3 gap-2">
            <input
              value={v.company}
              onChange={(e) => update(v.id, "company", e.target.value)}
              placeholder="Company name"
              className="p-2 border rounded"
            />
            <input
              value={v.position}
              onChange={(e) => update(v.id, "position", e.target.value)}
              placeholder="Position"
              className="p-2 border rounded"
            />
            <input
              value={v.period}
              onChange={(e) => update(v.id, "period", e.target.value)}
              placeholder="Jan 2021 - Dec 2023"
              className="p-2 border rounded"
            />
          </div>
          <div className="mt-2">
            <textarea
              value={v.responsibilities}
              onChange={(e) => update(v.id, "responsibilities", e.target.value)}
              rows={3}
              className="p-2 border rounded w-full"
              placeholder="Briefly describe main responsibilities"
            />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-3 flex gap-2">
      <button onClick={addEntry} className="px-3 py-1 border rounded">
        + Add Experience
      </button>
      <button
        onClick={() => setEditing(false)}
        className="px-3 py-1 bg-green-600 text-white rounded"
      >
        Save
      </button>
    </div>
  </div>
);
