"use server";
export const formSubmission = async (formData: FormData) => {
  const rawFormData = {
    firstName: formData.get("first-name"),
    lastName: formData.get("last-name"),
    dob: formData.get("DOB"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    city: formData.get("city"),
  };
  console.log(rawFormData);
};
