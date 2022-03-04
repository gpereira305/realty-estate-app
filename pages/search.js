import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Flex,
  Box,
  Text,
  Icon,
  Spinner,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { BiDownArrow } from "react-icons/bi";
import SearchFilters from "../components/layout/SearchFilters";
import Property from "../components/layout/Property.jsx";
import noresult from "../assets/noresult.svg";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <>
      <Box>
        <Flex
          cursor={"pointer"}
          bg={"gray.100"}
          p={"6"}
          fontWeight={"bold"}
          fontSize={"lg"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"5%"}
          onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        >
          <Text>Filtrar Imóveis</Text>
          <Icon paddingLeft={"2"} w={"7"} as={BiDownArrow} />
        </Flex>

        {searchFilters && <SearchFilters />}
        <Flex justifyContent={"center"} marginTop={"38"} marginBottom={"15"}>
          <Heading
            as="h3"
            size="xl"
            p={"4"}
            fontWeight={"normal"}
            textAlign="center"
            color={"blue.700"}
          >
            {(router.query.purpose === "for-rent" &&
              "Imóveis Disponíveis para Aluguel") ||
              (router.query.purpose === "for-sale" &&
                "Imóveis Disponíveis para Venda") ||
              "Imóveis Disponíveis para venda e aluguel"}
          </Heading>
        </Flex>

        <Grid templateColumns="repeat(3, 1fr)" className="grid-images">
          {properties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Grid>
        {properties.length === 0 && (
          <Flex
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            marginTop={"5"}
            marginBottom={"5"}
            minHeight={"64.4vh"}
          >
            <Image src={noresult} alt={"Sem resultados"} />
            <Text fontSize={"2xl"} color={"gray.500"} marginTop={"3"}>
              Nenhum resultado encontrado...
            </Text>
          </Flex>
        )}
      </Box>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "Yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
