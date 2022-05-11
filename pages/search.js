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
          p={"12"}
          fontWeight={"bold"}
          fontSize={"lg"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        >
          <Text color={"blue.700"}>Filtrar Imóveis</Text>
          <Icon paddingLeft={"2"} w={"7"} as={BiDownArrow} color={"#2C5282"} />
        </Flex>

        {searchFilters && <SearchFilters />}
        <Flex justifyContent={"center"} marginBottom={"24"}>
          <Heading
            as="h3"
            size="xl"
            p={"4"}
            marginTop={"24"}
            fontWeight={"normal"}
            textAlign="center"
            color={"blue.700"}
          >
            {properties.length !== 0 ? `
              ${(router.query.purpose === "for-rent" && "Imóveis disponíveis para aluguel") ||
              (router.query.purpose === "for-sale" && "Imóveis disponíveis para venda") ||
              "Imóveis disponíveis para venda e aluguel"}
            ` : ''} 
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
