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
        <input type="text" placeholder="First Name" name="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" placeholder="Last Name" name="last-name" />
        <label htmlFor="DOB">Date of Birth</label>
        <input type="date" placeholder="DOB" name="DOB" />
        <label htmlFor="phone">Phone</label>
        <input type="tel" placeholder="Phone" name="phone" />
        <label htmlFor="address">Address</label>
        <input type="text" placeholder="Address" name="address" />
        <label htmlFor="city">City</label>
        <input type="text" placeholder="City" name="city" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
