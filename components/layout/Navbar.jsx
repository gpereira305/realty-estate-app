
import React from 'react'
import Link from 'next/link'
import { FcMenu} from 'react-icons/fc'
import { BiSearch } from 'react-icons/bi' 
import { GiHouseKeys } from 'react-icons/gi'
import { IoIosBed } from 'react-icons/io'
import { FaHome } from 'react-icons/fa'
import {
  Menu,
  MenuButton,
  MenuList, 
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react'



const Navbar = () => {
  return (
    <>
      <Flex p={"2"} borderBottom={"1px"} borderColor={"gray.200"}>
         <Box fontSize={"3xl"} color={"green.300"} fontWeight={"bold"}>
            <Link href={"/"} paddingLeft={"2"}>Imo Realty</Link>    
         </Box>
         <Spacer/>
         <Box>
           <Menu>
             <MenuButton as={IconButton} icon={<FcMenu/>} variant={"outlined"}/>
             <MenuList  background={"green.100"} style={{ width: '100%'}}>
               <Link href={"/"} passHref>
                 <MenuItem icon={<FaHome/>}>Home</MenuItem>
               </Link>
               <Link href={"/search"} passHref>
                 <MenuItem icon={<BiSearch/>}>Pesquisar</MenuItem>
               </Link>
               <Link href={"/search?purpose=for-sale"} passHref>
                 <MenuItem icon={<GiHouseKeys/>}>Comprar</MenuItem>
               </Link>
               <Link href={"/search?purpose=for-rent"} passHref>
                 <MenuItem icon={<IoIosBed/>}>Alugar</MenuItem>
               </Link>
             </MenuList>
           </Menu>
         </Box>
      </Flex> 
    </>
  )
}

export default Navbar
