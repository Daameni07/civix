import React from "react";

export default function NotificationPanel() {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 rounded shadow">
      <p className="font-semibold">⚠️ New petitions in your area</p>
      <p>5 petitions pending review. <button className="underline text-blue-700">Review</button></p>
    </div>
  );
}
