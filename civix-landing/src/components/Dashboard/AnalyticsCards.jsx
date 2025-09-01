import React from "react";

export default function AnalyticsCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-green-100 p-4 rounded shadow">
        <h3 className="font-semibold">Education</h3>
        <p>230 petitions</p>
      </div>
      <div className="bg-blue-100 p-4 rounded shadow">
        <h3 className="font-semibold">Infrastructure</h3>
        <p>145 petitions</p>
      </div>
      <div className="bg-purple-100 p-4 rounded shadow">
        <h3 className="font-semibold">Environment</h3>
        <p>190 petitions</p>
      </div>
      <div className="bg-red-100 p-4 rounded shadow">
        <h3 className="font-semibold">Public Safety</h3>
        <p>120 petitions</p>
      </div>
    </div>
  );
}
