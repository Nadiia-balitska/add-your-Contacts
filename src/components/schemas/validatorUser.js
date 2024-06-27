import * as Yup from "yup";

export const contactFormSchema = () => {
  Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters!")
      .max(50, "Name must be less than 50 characters!")
      // .matches(/^[A-Za-z]+$/, "Name must consist only of letters!")
      .required("Name is required!"),
    number: Yup.string()
      .max(14, "Number must be less than 14 characters!")
      .required("Number is required!"),
  });
};
