import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar, Spinner } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import defaultImage from "../../assets/house.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        flexWrap={"wrap"}
        w={"100%"}
        p={"5"}
        padding={0}
        justifyContent={"flex-start"}
        cursor={"pointer"}
      >
        <Box className="image-cover">
          {!coverPhoto ? (
            <Spinner />
          ) : (
            <>
              <Image
                src={coverPhoto ? coverPhoto.url : defaultImage}
                alt={"Imóvel"}
                width={600}
                height={360}
                title={title}
                className="homeImg"
              />
            </>
          )}
        </Box>

        <Box w={"full"}>
          <Flex
            paddingTop={"2"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"}>
              <Box paddingRight={"3"} color={"blue.700"}>
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
              <Avatar size={"sm"} src={agency?.logo?.url} title={agency?.name}/>
            </Box>
          </Flex>

          <Flex
            alignItems={"center"}
            p={"1"}
            justifyContent={"space-between"}
            w={"210px"}
            color={"blue.300"}
          >
            {rooms}
            <FaBed title="Dormitório"/> | {baths}
            <FaBath title="Banheiro"/> | {millify(area)} pés qd <BsGridFill title="Tamanho"/>
          </Flex>
          <Text fontSize={"xs"} title={title}>
            {title.length > 30
              ? `${title.substring(0, 55).toUpperCase()}...`
              : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
