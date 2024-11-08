"use server";

import { z } from "zod";

const patientSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  dob: z.string(),
  gender: z.string(),
});

export const formSubmission = async (formData: FormData) => {
  const rawFormData = patientSchema.safeParse({
    firstName: formData.get("first-name"),
    lastName: formData.get("last-name"),
    dob: formData.get("DOB"),
    gender: formData.get("gender"),
  });
  if (rawFormData.success) {
    console.log(rawFormData.data);
  } else {
    console.log("Invalid form data");
  }
};
