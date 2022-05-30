import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

interface FeatureCardProps {
  title: string;
  stat: string;
}
const FeatureCard = ({ title, stat }: FeatureCardProps) => (
  <Stat
    px={{ base: 4, md: 8 }}
    py={"5"}
    shadow={"xl"}
    border={"1px solid"}
    borderColor={useColorModeValue("gray.800", "gray.500")}
    rounded={"lg"}
  >
    <StatLabel fontWeight={"medium"} isTruncated>
      {title}
    </StatLabel>
    <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
      {stat}
    </StatNumber>
  </Stat>
);

const FeatureHero = () => (
  <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
    <chakra.h1
      textAlign={"center"}
      fontSize={"4xl"}
      py={10}
      fontWeight={"bold"}
    >
      Welcome to Budgie!
    </chakra.h1>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
      <FeatureCard
        title={"You enter"}
        stat={"Ingoing and outgoing cashflow data"}
      />
      <FeatureCard title={"We"} stat={"Crunch the numbers"} />
      <FeatureCard
        title={"You get"}
        stat={"A useful breakdown of your financial setup"}
      />
    </SimpleGrid>
  </Box>
);

export default FeatureHero;
