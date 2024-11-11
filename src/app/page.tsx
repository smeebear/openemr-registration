// import Image from "next/image";
"use client";
import { useState } from "react";

import { formSubmission } from "./actions";
export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <div>Logged In</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">OpenEMR Patient Self Registration</h1>
      <form action={formSubmission} className="flex flex-col gap-4">
        <label htmlFor="first-name">First Name</label>
        <input
          className="text-slate-900"
          type="text"
          placeholder="First Name"
          name="first-name"
          required
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          className="text-slate-900"
          type="text"
          placeholder="Last Name"
          name="last-name"
          required
        />
        <label htmlFor="DOB">Date of Birth</label>
        <input
          className="text-slate-900"
          type="date"
          placeholder="DOB"
          name="DOB"
          required
        />
        <label htmlFor="sex">Sex</label>
        <select className="text-slate-900" name="sex" id="sex" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
