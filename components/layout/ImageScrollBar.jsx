import { useContext } from 'react'
import Image from 'next/image'
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'


 


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
  <Flex justifyContent={"center"} alignItems={"center"} marginRight={"5"}>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize={"2xl"}
        cursor={"pointer"}
        d={["none","none","none","block"]}
      />
    </Flex>
  );
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent={"center"} alignItems={"center"} marginLeft={"5"}>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize={"2xl"}
        cursor={"pointer"}
        d={["none","none","none","block"]}
    />
    </Flex>
  );
}




export default function ImageScrollbar({ data }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: "hidden" }} >
      {data.map((item, index) => (
        <Box width={"910px"} itemId={index} overflow={"hidden"} p={"1"} key={index}>
          <Image 
            placeholder={"blur"} 
            blurDataURL={item.url} 
            src={item.url} width={800} 
            height={450}  sizes={`
            (max-width: 500px) 100px, 
            (max-width: 1023px) 400px, 
            1000px`}
            alt={"Imóvel"} 
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}

 