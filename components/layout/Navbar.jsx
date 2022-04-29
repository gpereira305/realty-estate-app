import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FcMenu } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";
import { GiHouseKeys } from "react-icons/gi";
import { IoIosBed } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useRouter } from "next/router";
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
  const router = useRouter();
  return (
    <>
      <div p={"2"} className="navbar">
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          className="navbar-items"
        >
          <Box color={"blue.700"} fontWeight={"bold"}>
            <div onClick={() => router.push("/")}>
              <Image
                src={logo}
                alt={"logo"}
                width={75}
                height={55}
                title={"Home"}
              />
            </div>
          </Box>

          <UnorderedList className="navbar-menu">
            <ListItem
              fontWeight={"bold"}
              color={"blue.700"}
              onClick={() => router.push("/search")}
              cursor={"pointer"}
            >
              Pesquisa
            </ListItem>

            <ListItem
              fontWeight={"bold"}
              color={"blue.700"}
              onClick={() => router.push("/search?purpose=for-sale")}
              cursor={"pointer"}
            >
              Compra
            </ListItem>

            <ListItem
              fontWeight={"bold"}
              color={"blue.700"}
              onClick={() => router.push("/search?purpose=for-rent")}
              cursor={"pointer"}
            >
              Aluguel
            </ListItem>
          </UnorderedList>

          <Box className="mobile-menu">
            <Menu className="navbar-mobile">
              <MenuButton
                as={IconButton}
                icon={<FcMenu />}
                variant={"outlined"}
              />

              <MenuList background={"white"}>
                <MenuItem
                  icon={<FaHome />}
                  onClick={() => router.push("/")}
                  className="mobile-link"
                >
                  Home
                </MenuItem>

                <MenuItem
                  icon={<BiSearch />}
                  onClick={() => router.push("/search")}
                >
                  Pesquisa
                </MenuItem>

                <MenuItem
                  icon={<GiHouseKeys />}
                  onClick={() => router.push("/search?purpose=for-sale")}
                >
                  Compra
                </MenuItem>

                <MenuItem
                  icon={<IoIosBed />}
                  onClick={() => router.push("/search?purpose=for-rent")}
                >
                  Aluguel
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default Navbar;
