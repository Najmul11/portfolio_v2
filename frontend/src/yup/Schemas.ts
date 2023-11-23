import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  query: yup
    .string()
    .required("Query is required")
    .max(200, "Query cannot exceed 250 characters"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

export const postSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  details: yup.string().required("details is required"),
});
