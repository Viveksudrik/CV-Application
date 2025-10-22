import React from "react";
function removeEntry(id) {
  onChange(value.filter((item) => item.id !== id));
}

if (!editing) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">Education</h3>
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
              {v.degree || "Degree"} — {v.school || "School"}
            </div>
            <div className="text-sm text-gray-600">{v.period}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

return (
  <div className="mb-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">Education</h3>
      <div className="text-sm text-gray-500">Add your educational entries</div>
    </div>

    <div className="mt-3 space-y-3">
      {value.map((v, idx) => (
        <div key={v.id} className="p-3 border rounded">
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
              value={v.school}
              onChange={(e) => update(v.id, "school", e.target.value)}
              placeholder="School / University"
              className="p-2 border rounded"
            />
            <input
              value={v.degree}
              onChange={(e) => update(v.id, "degree", e.target.value)}
              placeholder="Degree / Title"
              className="p-2 border rounded"
            />
            <input
              value={v.period}
              onChange={(e) => update(v.id, "period", e.target.value)}
              placeholder="2019 - 2023"
              className="p-2 border rounded"
            />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-3 flex gap-2">
      <button onClick={addEntry} className="px-3 py-1 border rounded">
        + Add Education
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
