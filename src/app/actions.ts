"use server";

import { z } from "zod";

const patientSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  dob: z.string(),
  sex: z.string(),
});

export const formSubmission = async (formData: FormData) => {
  const rawFormData = patientSchema.safeParse({
    firstName: formData.get("first-name"),
    lastName: formData.get("last-name"),
    dob: formData.get("DOB"),
    sex: formData.get("sex"),
  });
  if (!rawFormData.success) {
    console.log("Form data is invalid");
  } else {
    console.log(rawFormData.data);
    await fetch("https://localhost/api/patient", {
      method: "POST",
      body: JSON.stringify(rawFormData.data),
    });
    console.log("Form data submitted successfully");
  }
  console.log(rawFormData);
};
