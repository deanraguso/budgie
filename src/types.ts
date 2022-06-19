import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface UserFormInputs {
  salary: number;
  groceries: number;
  bills: number;
  rent: number;
  vehicle: number;
  fun: number;
}

export type FieldOptions =
  | "salary"
  | "groceries"
  | "bills"
  | "rent"
  | "vehicle"
  | "fun";

export interface Field {
  name: FieldOptions;
  label: string;
  errorMessage: string;
  LeftAddon: any;
  RightAddon: any;
  required: boolean;
}

export interface UserFormFieldProps {
  name: string;
  label: string;
  registerProps: UseFormRegisterReturn;
  error: FieldError | undefined;
  errorMessage: string;
  LeftAddon?: any;
  RightAddon?: any;
}

export interface ColorSchemeProps {
  colorMode: string;
}
