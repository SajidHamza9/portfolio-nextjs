"use client";

import React from "react";
import { useField, ErrorMessage } from "formik";
import { FormChild, Label, TextField, TextArea, Error } from "./styles";

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  isTextArea?: boolean;
};

const InputField = ({ label, isTextArea, ...props }: InputFieldProps) => {
  const [field] = useField(props);
  return (
    <FormChild>
      <Label htmlFor={field.name}>{label}</Label>
      {isTextArea ? (
        <TextArea {...props} {...field} />
      ) : (
        <TextField {...props} {...field} />
      )}
      <ErrorMessage component={Error} name={field.name} />
    </FormChild>
  );
};

export default InputField;
