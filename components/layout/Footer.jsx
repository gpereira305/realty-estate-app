import React from "react";
import { Box, Text, Flex, UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsPinterest, BsLinkedin } from "react-icons/bs";
import { useRouter } from "next/router";

// captura o ano atual automaticamente
const getYearDate = new Date().getFullYear();

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <Flex background={"black"} direction={"column"}>
        <Flex
          justifyContent={"space-evenly"}
          alignItems={"center"}
          className="footer-flex"
        >
          <div>
            <UnorderedList margin={"0"} className="footer-list">
              <ListItem
                fontWeight={"light"}
                color={"whiteAlpha.800"}
                onClick={() => router.push("/")}
                cursor={"pointer"}
                title={"Ir à home"}
              >
                Home
              </ListItem>

              <ListItem
                fontWeight={"light"}
                color={"whiteAlpha.800"}
                onClick={() => router.push("/search")}
                cursor={"pointer"}
                title={"ir para pesquisa"}
              >
                Pesquisa
              </ListItem>

              <ListItem
                fontWeight={"light"}
                color={"whiteAlpha.800"}
                onClick={() => router.push("/search?purpose=for-sale")}
                cursor={"pointer"}
                title={"Ir para compras"}
              >
                Compra
              </ListItem>

              <ListItem
                fontWeight={"light"}
                color={"whiteAlpha.800"}
                onClick={() => router.push("/search?purpose=for-rent")}
                cursor={"pointer"}
                title={"Ir para Aluguéis"}
              >
                Aluguel
              </ListItem>
            </UnorderedList>
            <Flex>
              <Text color={"gray.600"} fontSize={"sm"} textAlign="center">
                Entre em contato conosco: +971 5654 - 5775
              </Text>
            </Flex>
            <Flex color={"gray.600"} fontSize={"sm"} textAlign="center">
              <Text>Nosso enderço: Main Street, 567 - Abu Dhabi-UAE </Text>
            </Flex>
          </div>
          <Flex className="footer-icons">
            <Text color={"whiteAlpha.800"} marginBottom={"4"}>
              Siga-nos em nossas redes socias
            </Text>
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook title={"Facebook"} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram title={"Instagram"} />
              </a>
              <a
                href="https://pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsPinterest title={"Pinterest"} />
              </a>
              <a
                href="https://www.linkedin.com/feed/  "
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin title={"Linkedin"} />
              </a>
            </div>
          </Flex>
        </Flex>

        <Box
          textAlign={"center"}
          p={"5"}
          color={"whiteAlpha.800"}
          background={"black"}
        >
          <Text fontWeight={"normal"} fontSize={"xs"}>
            &copy; {getYearDate} Royal Realty Imobiliária - All Rights Reserved
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Footer;
