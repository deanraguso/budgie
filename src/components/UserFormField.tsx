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
import bT from "../budgieTheme";
import { UserFormFieldProps } from "../types";

const UserFormField = ({
  id,
  label,
  LeftAddon,
  RightAddon,
  registerProps,
  error,
  errorMessage
}: UserFormFieldProps) => {
  return (
    <>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Stack spacing={4}>
        <InputGroup>
          {LeftAddon && (
            <InputLeftAddon bg={bT.bg.colours.primaryLight}>
              {React.cloneElement(LeftAddon)}
            </InputLeftAddon>
          )}
          <Input
            id={id}
            {...((registerProps.required && { isRequired: true }) as any)}
            {...registerProps}
          />
          {RightAddon && (
            <InputRightAddon bg={bT.bg.colours.primaryLight}>
              {React.cloneElement(RightAddon)}
            </InputRightAddon>
          )}
        </InputGroup>
        <FormErrorMessage>{error && errorMessage}</FormErrorMessage>
      </Stack>
    </>
  );
};

export default UserFormField;
