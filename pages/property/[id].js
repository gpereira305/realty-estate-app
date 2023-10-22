import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import Image from "next/image";
import defaultImage from "../../assets/house.jpg";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollBar from "../../components/layout/ImageScrollBar";
import {
  Box,
  Text,
  Spacer,
  Flex,
  Avatar,
  Spinner,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {

  // parseia de html tag para string
  const summarized = (text) => {
    const regex = /( |<([^>]+)>)/gi;
    return text?.replace(regex, " ");
  };


  return (
    <Box maxWidth={"1200px"} margin={"auto"} p={"4"}>
      {photos && <ImageScrollBar data={photos} />}
      <Box w={"full"} p={"6"}>
        <Flex
          paddingTop={"2"}
          alignItems={"center"}
          justifyContent={"space-between"}
          maxWidth={"300px"}
        >
          <Flex alignItems={"center"}>
            <Box paddingRight={"3"} color={"green.400"}>
              {isVerified && (
                <GoVerified
                  color={"#63B3ED"}
                  title={"Este imóvel é verificado"}
                />
              )}
            </Box>
            <Text fontWeight={"bold"} fontSize={"lg"} color={"blue.700"}>
              US$ {millify(price)}
              {rentFrequency &&
                `/${rentFrequency === "monthly" ? "Mensal" : rentFrequency}`}
            </Text>
          </Flex>
          <Box border={"2px"} borderRadius={"100%"} color={"blue.300"}>
            <Avatar size={"sm"} src={agency?.logo?.url} title="Construtora"/>
          </Box>
        </Flex>

        <Flex
          alignItems={"center"}
          p={"1"}
          justifyContent={"space-between"}
          w={"300px"}
          color={"blue.300"}
        >
          {rooms}
          <FaBed title="Dormitório"/>| {baths}
          <FaBath title="Banheiro"/>| {millify(area)} pés qd <BsGridFill title="Tamanho"/>
        </Flex>

        <Divider marginTop={"4"} />

        <Text
          fontSize={"lg"}
          title={title}
          marginTop={"2"}
          marginBottom={"4"}
          fontWeight={"bold"}
          color={"blue.700"}
        >
          {title.toUpperCase()}
        </Text>

        <Divider marginTop={"8"} />
        <Flex
          flexWrap={"wrap"}
          textTransform={"uppercase"}
          justifyContent={"space-between"}
        >
          <Flex
            justifyContent={"space-between"}
            w={"400px"}
            borderBottom={"1px"}
            borderColor={"gray.200"}
            p={"3"}
          >
            <Text>Tipo:</Text>
            <Text fontWeight={"bold"} color={"blue.700"}>
              {type === "property" ? "Residencial" : type}
            </Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            w={"400px"}
            borderBottom={"1px"}
            borderColor={"gray.200"}
            p={"3"}
          >
            <Text>Propósito:</Text>
            <Text fontWeight={"bold"} color={"blue.700"}>
              {purpose === "for-sale" ? "Venda" : "Aluguel"}
            </Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              justifyContent={"space-between"}
              w={"400px"}
              borderBottom={"1px"}
              borderColor={"gray.200"}
              p={"3"}
            >
              <Text>Mobiliado:</Text>
              <Text fontWeight={"bold"} color={"blue.700"}>
                {furnishingStatus === "furnished"
                  ? "Com mobília"
                  : "Sem mobília"}
              </Text>
            </Flex>
          )}
        </Flex>
        <Divider marginTop={"12"} />

        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton
                _expanded={{ bg: "#63B3ED", color: "" }}
                paddingLeft={"0"}
              >
                <Box flex="1" textAlign="left">
                  <Text
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    color={"blue.700"}
                  >
                    Ver mais detalhes deste imóvel
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"gray.700"} background={"gray.200"}>
              <Text lineHeight={"2"}>{summarized(description)} </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box>
          {amenities.length > 1 && (
            <Text
              fontSize={"medium"}
              fontWeight={"black"}
              marginTop={"12"}
              marginBottom={"2"}
              color={"blue.700"}
            >
              Itens Inclusos nesse imóvel:
            </Text>
          )}
          <Flex flexWrap={"wrap"}>
            {amenities.map((item) =>
              item.amenities.map((amenity) => (
                <Text
                  key={amenity.text}
                  fontWeight={"bold"}
                  color={"gray.700"}
                  fontSize={"small"}
                  p={"2"}
                  m={"1"}
                  bg={"blue.300"}
                  borderRadius={"3"}
                >
                  {amenity.text}
                </Text>
              ))
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: { propertyDetails: data },
  };
}
