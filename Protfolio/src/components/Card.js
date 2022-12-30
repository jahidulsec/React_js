import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack 
        backgroundColor="white"
        color="black"
        borderRadius={5}
        alignItems="flex-start">
        <Image src={imageSrc} alt={title} borderRadius="5px"/>
        <Heading fontSize={22} padding={5}>
          {title}
        </Heading>
        <Text 
          paddingLeft={5}
          paddingRight={5}
          >
            {description}
        </Text>
        <HStack padding={5}>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </>
  );
};

export default Card;
