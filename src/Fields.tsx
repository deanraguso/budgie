import { Text } from "@chakra-ui/react";
import {
  Car,
  CurrencyCircleDollar,
  ForkKnife,
  House,
  Money,
  Wine,
} from "phosphor-react";
import { Field } from "./types";
import colors from "./colors";
import * as yup from "yup";

const { light } = colors;

const fieldErrors = {
  salary: "What is your before tax salary (AU)?",
  groceries: "How much do you spend on groceries?",
  bills: "How much do you spend on utility bills?",
  rent: "How much is your rent?",
  vehicle: "How much do you pay for vehicle registration and running costs?",
  fun: "How much money do you spend on non-essentials or spontaneously?",
};

export const schema = yup.object().shape({
  salary: yup.number().required(),
  groceries: yup.number().required(),
  bills: yup.number().required(),
  rent: yup.number().required(),
  vehicle: yup.number().required(),
  fun: yup.number().required(),
});

export const Fields: Array<Field> = [
  {
    name: "salary",
    label: fieldErrors.salary,
    required: true,
    errorMessage: fieldErrors.salary,
    LeftAddon: (
      <CurrencyCircleDollar fill="solid" size={28} color={light.green} />
    ),
    RightAddon: <Text>AUD</Text>,
  },
  {
    name: "groceries",
    label: fieldErrors.groceries,
    required: true,
    errorMessage: fieldErrors.groceries,
    LeftAddon: <ForkKnife fill="solid" size={28} color={light.red} />,
    RightAddon: <Text>AUD</Text>,
  },
  {
    name: "bills",
    label: fieldErrors.bills,
    required: true,
    errorMessage: fieldErrors.bills,
    LeftAddon: <Money fill="solid" size={28} color={light.red} />,
    RightAddon: <Text>AUD</Text>,
  },
  {
    name: "rent",
    label: fieldErrors.rent,
    required: true,
    errorMessage: fieldErrors.rent,
    LeftAddon: <House fill="solid" size={28} color={light.red} />,
    RightAddon: <Text>AUD</Text>,
  },
  {
    name: "vehicle",
    label: fieldErrors.vehicle,
    required: true,
    errorMessage: fieldErrors.vehicle,
    LeftAddon: <Car fill="solid" size={28} color={light.red} />,
    RightAddon: <Text>AUD</Text>,
  },
  {
    name: "fun",
    label: fieldErrors.fun,
    required: true,
    errorMessage: fieldErrors.fun,
    LeftAddon: <Wine fill="solid" size={28} color={light.red} />,
    RightAddon: <Text>AUD</Text>,
  },
];

export default Fields;
