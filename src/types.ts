import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface UserFormInputs {
  salary: number;
};

export interface UserFormFieldProps {
  id: string;
  label: string;
  registerProps: UseFormRegisterReturn;
  error: FieldError | undefined;
  errorMessage: string;
  LeftAddon?: any;
  RightAddon?: any;
}
