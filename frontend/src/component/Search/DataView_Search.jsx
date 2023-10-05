import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const DataView_Search = ({ data }) => {
  const convertData = (inputDateString) => {
    const inputDate = new Date(inputDateString);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = inputDate.getUTCDate();
    const formattedDay = day < 10 ? `0${day}` : day;
    const month = months[inputDate.getUTCMonth()];
    const year = inputDate.getUTCFullYear();
    const customFormattedDate = `${formattedDay} ${month},${year}`;
    return customFormattedDate;
  };

  return (
    <>
      <Box>
        <SimpleGrid margin={["40px 59px 18px 59px"]} columns={[1,1,3,3]} spacing={10}>
          {data?.map((el) => (
            <Box w={["100%"]} key={el.id}>
              <Box w={["100%"]} h={["424px"]}>
                <Image
                  w={"100%"}
                  h={"100%"}
                  objectFit={"cover"}
                  src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.image.data.attributes.url}`}
                />
              </Box>
              <Text
                fontFamily={"Bossa-Regular"}
                noOfLines={1}
                color={"#747272"}
                fontSize={["9px", "9px", "14px", "14px"]}
                fontWeight={500}
                lineHeight={"31px"}
                textTransform={"capitalize"}
              >
                {convertData(el.attributes.createdAt)}
              </Text>
              <Text
                fontFamily={"Bossa-ExtendedBold"}
                noOfLines={2}
                fontSize={["20px"]}
                textOverflow={"ellipsis"}
              >
                {el.attributes.heading}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default DataView_Search;
