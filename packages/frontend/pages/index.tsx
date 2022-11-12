import type { NextPage } from "next";
import { Box, Heading } from "@chakra-ui/react";
import PageLayout from "../components/Layout/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout title={"geese, by minihacks"}>
      <Box px={[10, 30]}>
        <Heading as={"h1"}>Quant Interview Practice</Heading>
      </Box>
    </PageLayout>
  );
};

export default Home;
