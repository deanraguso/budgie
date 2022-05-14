import { chakra, Divider, Flex, FormControl, Text } from "@chakra-ui/react";
import { CurrencyCircleDollar } from "phosphor-react";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import theme from "../theme";
import { UserFormInputs } from "../types";
import UserFormField from "./UserFormField";

const UserForm = () => {
  const {
    trigger,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInputs>();
  const onSubmit: SubmitHandler<UserFormInputs> = (data) => console.log(data);

  const fieldErrors = {
    salary: "What is your yearly before tax salary (AU)?",
  };

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
      <FormControl
        onSubmit={handleSubmit(onSubmit)}
        onKeyUp={triggerValidations}
        isInvalid={errors?.salary != null}
      >
        <UserFormField
          id="salary"
          label="What is your yearly before tax salary (AU)?"
          registerProps={register("salary", { required: true })}
          error={errors.salary}
          errorMessage={fieldErrors["salary"]}
          LeftAddon={
            <CurrencyCircleDollar
              fill="solid"
              size={28}
              color={theme.colours.green}
            />
          }
          RightAddon={<Text>AUD</Text>}
        />
        <Divider py={2} />
      </FormControl>
    </Flex>
  );
};

export default UserForm;
