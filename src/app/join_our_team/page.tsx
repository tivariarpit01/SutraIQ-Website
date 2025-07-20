"use client";

import { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    position: "",
    resume: "",
    linkedin: "",
    github: "",
    portfolio: "",
    expectedCTC: "",
    noticePeriod: "",
    skills: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = { ...form, skills: form.skills.split(",") };

    const res = await fetch("/api/job/apply", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto py-8">
      {[
        "name",
        "email",
        "phone",
        "gender",
        "position",
        "linkedin",
        "github",
        "portfolio",
        "expectedCTC",
        "noticePeriod",
        "skills",
      ].map((field) => (
        <input
          key={field}
          name={field}
          value={(form as any)[field]}
          onChange={handleChange}
          placeholder={field}
          className="p-2 border rounded"
        />
      ))}

      <button type="submit" className="bg-black text-white py-2 rounded">
        Submit Application
      </button>
    </form>
  );
};

export default Page;
