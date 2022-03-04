import React from "react";
import Link from "next/link";
import { FcMenu } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";
import { GiHouseKeys } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <div p={"2"} className="navbar">
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          className="navbar-items"
        >
          <Box fontSize={"3xl"} color={"blue.700"} fontWeight={"bold"}>
            <Link href={"/"} paddingLeft={"2"}>
              Imo Realty
            </Link>
          </Box>

          <UnorderedList className="navbar-menu">
            <ListItem fontWeight={"bold"} color={"blue.700"}>
              <Link href={"/search"} passHref>
                Pesquisar
              </Link>
            </ListItem>

            <ListItem fontWeight={"bold"} color={"blue.700"}>
              {" "}
              <Link href={"/search?purpose=for-sale"} passHref>
                Comprar
              </Link>
            </ListItem>

            <ListItem fontWeight={"bold"} color={"blue.700"}>
              <Link href={"/search?purpose=for-rent"} passHref>
                Alugar
              </Link>
            </ListItem>
          </UnorderedList>

          <Box className="mobile-menu">
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<FcMenu />}
                variant={"outlined"}
              />
              <MenuList background={"blue.700"} style={{ width: "100%" }}>
                <Link href={"/"} passHref>
                  <MenuItem icon={<FaHome />}>Home</MenuItem>
                </Link>
                <Link href={"/search"} passHref>
                  <MenuItem icon={<BiSearch />}>Pesquisar</MenuItem>
                </Link>
                <Link href={"/search?purpose=for-sale"} passHref>
                  <MenuItem icon={<GiHouseKeys />}>Comprar</MenuItem>
                </Link>
                <Link href={"/search?purpose=for-rent"} passHref>
                  <MenuItem icon={<IoIosBed />}>Alugar</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default Navbar;
