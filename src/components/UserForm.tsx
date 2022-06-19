import React from "react";
import { chakra, Divider, Flex, FormControl } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Fields from "../Fields";
import { Field, UserFormInputs } from "../types";
import UserFormField from "./UserFormField";

const schema = yup.object().shape({});

const UserForm = () => {
  const {
    trigger,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<UserFormInputs> = (data) => console.log(data);

  const triggerValidations = () => {
    trigger();
  };

  return (
    <Flex flexDir="column" p={5}>
      <chakra.h2
        textAlign={"center"}
        fontSize={"2xl"}
        py={10}
        fontWeight={"bold"}
      >
        We need a few things...
      </chakra.h2>
      <>
        {Fields.map(
          ({
            name,
            label,
            errorMessage,
            LeftAddon,
            RightAddon,
            required,
          }: Field) => (
            <FormControl
              onSubmit={handleSubmit(onSubmit)}
              onKeyUp={triggerValidations}
              isInvalid={errors[name] != null}
              key={name}
            >
              <UserFormField
                id={name}
                label={label}
                registerProps={register(name, { required: required })}
                error={errors[name]}
                errorMessage={errorMessage}
                LeftAddon={LeftAddon}
                RightAddon={RightAddon}
              />
              <Divider py={2} />
            </FormControl>
          )
        )}
      </>
    </Flex>
  );
};

export default UserForm;
