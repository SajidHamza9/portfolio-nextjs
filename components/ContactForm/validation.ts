import * as Yup from "yup";

export const validate = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Email is invalid").required("Required"),
  message: Yup.string().required("Required"),
});
