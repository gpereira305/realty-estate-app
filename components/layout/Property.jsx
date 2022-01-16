import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Flex, Text, Avatar, Spinner  } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
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
    externalID
  }
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap={"wrap"} w={"420px"} p={"5"} paddingTop={"0"} justifyContent={"flex-start"} cursor={"pointer"}>
          <Box>
             {coverPhoto ? 
               <Image src={coverPhoto ? coverPhoto.url : defaultImage} alt={"residência"} width={400} height={260} title={title}/> 
               : <Spinner/>
             }
          </Box>

          <Box w={"full"}> 
            <Flex paddingTop={"2"} alignItems={"center"} justifyContent={"space-between"}> 
                <Flex alignItems={"center"}>
                    <Box paddingRight={"3"} color={"green.400"}>
                       {isVerified && <GoVerified color={"#1C9CEA"} title={"Este imóvel é verificado"}/>}
                    </Box>  
                     
                    <Text fontWeight={"bold"} fontSize={"lg"}>
                       AED { millify(price) }
                       { rentFrequency && `/${rentFrequency === 'monthly' ? "POR MÊS" : rentFrequency}`}
                    </Text>
                </Flex> 
                <Box border={"2px"} borderRadius={"100%"} color={"green.300"}>
                    <Avatar size={"sm"} src={agency?.logo?.url}/>
                </Box> 
            </Flex>

            <Flex  alignItems={"center"} p={"1"} justifyContent={"space-between"} w={"210px"} color={"green.300"}>
                { rooms }<FaBed/> | { baths }<FaBath/> |  {millify(area)} sqft <BsGridFill/>    
            </Flex>
            <Text fontSize={"xs"} title={title}>
                { title.length > 30 ? `${title.substring(0, 55).toUpperCase()}...` : title }
            </Text> 
          </Box>
        </Flex>
    </Link>
  )
}

export default Property
