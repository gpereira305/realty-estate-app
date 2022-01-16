import React from 'react'
import { Box, Text } from '@chakra-ui/react'
 



const getYearDate = new Date().getFullYear(); 

const Footer = () => {
  return (
    <Box textAlign={"center"} p={"5"} color={"whiteAlpha.800"} borderTop={"1px"} background={"blackAlpha.800"}>
       <Text fontWeight={"bold"}>&copy;  { getYearDate } Imo Realty</Text>
    </Box>
  )
}

export default Footer
