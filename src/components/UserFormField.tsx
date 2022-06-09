import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import { UserFormFieldProps } from "../types";
import colors from "../colors";
const { light } = colors;

const UserFormField = ({
  id,
  label,
  LeftAddon,
  RightAddon,
  registerProps,
  error,
  errorMessage,
}: UserFormFieldProps) => {
  return (
    <>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Stack spacing={4}>
        <InputGroup>
          {LeftAddon && (
            <InputLeftAddon>{React.cloneElement(LeftAddon)}</InputLeftAddon>
          )}
          <Input
            id={id}
            {...((registerProps.required && { isRequired: true }) as any)}
            {...registerProps}
          />
          {RightAddon && (
            <InputRightAddon>{React.cloneElement(RightAddon)}</InputRightAddon>
          )}
        </InputGroup>
        <FormErrorMessage>{error && errorMessage}</FormErrorMessage>
      </Stack>
    </>
  );
};

export default UserFormField;
