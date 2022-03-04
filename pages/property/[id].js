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
  return (
    <Box maxWidth={"980px"} margin={"auto"} p={"4"}>
      {photos && <ImageScrollBar data={photos} />}
      <Box w={"full"} p={"6"}>
        <Flex
          paddingTop={"2"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex alignItems={"center"}>
            <Box paddingRight={"3"} color={"green.400"}>
              {isVerified && (
                <GoVerified
                  color={"#1C9CEA"}
                  title={"Este imóvel é verificado"}
                />
              )}
            </Box>
            <Text fontWeight={"bold"} fontSize={"lg"}>
              AED {millify(price)}
              {rentFrequency &&
                `/${rentFrequency === "monthly" ? "Mensal" : rentFrequency}`}
            </Text>
          </Flex>
          <Box border={"2px"} borderRadius={"100%"} color={"green.300"}>
            <Avatar size={"sm"} src={agency?.logo?.url} />
          </Box>
        </Flex>

        <Flex
          alignItems={"center"}
          p={"1"}
          justifyContent={"space-between"}
          w={"300px"}
          color={"green.300"}
        >
          {rooms}
          <FaBed />| {baths}
          <FaBath />| {millify(area)} sqft <BsGridFill />
        </Flex>

        <Divider marginTop={"4"} />

        <Text
          fontSize={"lg"}
          title={title}
          marginTop={"2"}
          marginBottom={"4"}
          fontWeight={"bold"}
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
            <Text fontWeight={"bold"}>
              {type === "property" ? "Imóvel" : type}
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
            <Text fontWeight={"bold"}>
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
              <Text fontWeight={"bold"}>
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
                _expanded={{ bg: "#68D391", color: "" }}
                paddingLeft={"0"}
              >
                <Box flex="1" textAlign="left">
                  <Text
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                  >
                    Ver mais detalhes deste imóvel
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"gray.700"} background={"gray.200"}>
              <Text lineHeight={"2"}>{description} </Text>
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
            >
              Intens Inclusos nesse imóvel:
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
                  bg={"green.200"}
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
