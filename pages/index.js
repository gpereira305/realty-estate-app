import Link from "next/link";
import Image from "next/image";
import {
  Flex,
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/layout/Property";
import homeImage from "../assets/panorama.jpg";
import homeImage2 from "../assets/panorama2.jpg";

const Banner = ({
  purpose,
  mainTitle,
  title2,
  description,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex
    flexWrap={"wrap"}
    justifyContent={"space-between"}
    alignItems={"center"}
    marginBottom={"32"}
    className="home-flex"
  >
    <Image src={imageUrl} alt={"banner"} width={2000} height={550} />

    <Box className="home-text">
      <Heading as="h1" fontWeight={"normal"} color={"white"} size="3xl">
        {mainTitle}
      </Heading>
      <Text
        fontSize={"2xl"}
        paddingTop={"3"}
        paddingBottom={"3"}
        color={"cyan.400"}
      >
        {description}
      </Text>
      <Button
        fontSize={"xl"}
        variant="outline"
        className="home-btn"
        color={"cyan.400"}
      >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <>
      <Banner
        mainTitle={`Aluguel para todos os gostos`}
        description={`Temos mansões, villas, apartementos e muito mais!`}
        buttonText={`Alugue agora`}
        linkName={`/search?purpose=for-rent`}
        imageUrl={homeImage}
        className="home-banner"
      />

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={4}
        marginBottom={"32"}
        className="grid-images"
      >
        {propertiesForRent.map((property, index) => (
          <Property property={property} key={index} />
        ))}
      </Grid>

      <Banner
        mainTitle={`Encontre e compre seu lar`}
        description={`Condomínios, villas, residências e muito mais!`}
        buttonText={`Compre agora`}
        linkName={`/search?purpose=for-sale`}
        imageUrl={homeImage2}
        className="home-banner"
      />

      <Grid templateColumns="repeat(3, 1fr)" gap={4} className="grid-images">
        {propertiesForSale.map((property, index) => (
          <Property property={property} key={index} />
        ))}
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
