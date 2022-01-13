import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { Fabed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import defaultImage from '../../assets/house.jpg'



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
    externalId
  }
}) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
        <Flex
          flexWrap={"wrap"}
          w={"420px"} p={"5"}
          paddingTop={"0"}
          justifyContent={"flex-start"}
          cursor={"pointer"}
        >
          <Box>
             <Image 
               src={coverPhoto ? coverPhoto.url : defaultImage} 
               alt={"residência"} width={400} height={260} title={title}
              />
          </Box>

          <Box w={"full"}>
            <Flex paddingTop={"2"} alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"}>
                    <Box paddingRight={"3"} color={"green.400"}>
                       {isVerified && <GoVerified color={"#1C9CEA"} title={"Este imóvel é verificado"}/>}
                    </Box>   
                    <Text fontWeight={"bold"} fontSize={"lg"}>
                       AED { millify(price) }
                       { rentFrequency && `/${rentFrequency === 'monthly' ? "Por mês" : ""}`}
                    </Text>
                </Flex>
            </Flex>
          </Box>
        </Flex>
    </Link>
  )
}

export default Property
