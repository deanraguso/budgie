import {
  chakra,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import { CurrencyCircleDollar } from "phosphor-react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import theme from "../theme";
import { UserFormInputs } from "../types";

const UserForm = () => {
  const {
    trigger,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInputs>();
  const onSubmit: SubmitHandler<UserFormInputs> = (data) => console.log(data);

  const triggerValidations = () => {
    trigger();
  };

  console.log(watch("salary"));

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
        <FormLabel htmlFor="salary">
          What is your yearly before tax salary (AU)?
        </FormLabel>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon bg={theme.bg.colours.primaryLight}>
              <CurrencyCircleDollar
                fill="solid"
                size={28}
                color={theme.colours.green}
              />
            </InputLeftAddon>
            <Input
              id="salary"
              isRequired
              {...register("salary", { required: true })}
            />
            <InputRightAddon bg={theme.bg.colours.primaryLight}>
              AUD
            </InputRightAddon>
          </InputGroup>
          <FormErrorMessage>
            {errors.salary &&
              "We need to know this lol. Don't worry, we won't store this info!"}
          </FormErrorMessage>
        </Stack>
        <Divider py={2} />
      </FormControl>
    </Flex>
  );
};

export default UserForm;
