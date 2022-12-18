import {
  Box,
  Card,
  CardBody,
  Center,
  Container,
  Flex,
  Image,
  Link,
  Tab,
  TabList,
  Tabs,
  Tag,
  TagLabel,
  Text,
  background,
} from "@chakra-ui/react";
import { blacken } from "@chakra-ui/theme-tools";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
function Ui() {
  return (
    <Container p="10%" pt="10">
      <Flex>
        <Box overflow="scroll"
          w="30%"
          border=".7px solid gray"
          h="90vh"
          mr="15px"
          position="-webkit-sticky"
        >
          <Center m="40px" borderRadius="25px" bg="hsl(0, 0%, 22%)">
            <Card>
              <CardBody>
                <Image
                  src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/my-avatar.png"
                  alt="rajat"
                />
              </CardBody>
            </Card>
          </Center>

          <Center>
            <Text color="white">Rajat Sinha</Text>
          </Center>

          <Center>
            <Tag mt="10px " mb="10px">
              Web developer
            </Tag>
          </Center>
          <Container w="90" h="2.6px" bg="gray" m="20px"></Container>

          <Box>
            <Flex>
              <Box>
                <Flex>
                  <Card mt="5">
                    <EmailOutlinedIcon />
                  </Card>
                </Flex>
              </Box>

              <Text w="100%" mt="15px" color="white" fontSize="20px">
                Rajatsinha5467@gmail.com
              </Text>
            </Flex>
          </Box>

          <Box>
            <Card mt="10">
              <Flex>
                <GitHubIcon />
                <Link href="" fontSize="20" color="white" ml="9%">
                  GitHub
                </Link>
              </Flex>
            </Card>

            <Card mt="10">
              <Flex>
                <LinkedInIcon />
                <Link href="" fontSize="20" color="white" ml="9%">
                  LinkedIn
                </Link>
              </Flex>
            </Card>

            <Card mt="10">
              <Flex>
                <WorkOutlineIcon bg="pink" />

                <Link href="" fontSize="20" color="white" ml="9%">
                  Resume
                </Link>
              </Flex>
            </Card>
          </Box>
        </Box>

        <Box w="70%" border=".7px solid gray" overflow="scroll" h="90vh">
          <Flex justifyContent="flex-end">
            <Box></Box>
            <Box
              bg="hsl(0, 0%, 22%)"
              border=".5px solid black"
              borderRadius="0px 15px"
            >
              <Tabs isManual variant="enclosed" color="white">
                <TabList outline="none" border="none">
                  <Tab
                    _focus={{ color: "yellow", border: "none" }}
                    outline="none"
                  >
                    About
                  </Tab>
                  <Tab
                    _focus={{ color: "yellow", border: "none" }}
                    outline="none"
                  >
                    {" "}
                    Projects
                  </Tab>
                  <Tab
                    _focus={{ color: "yellow", border: "none" }}
                    outline="none"
                  >
                    {" "}
                    Skils
                  </Tab>
                  <Tab
                    _focus={{ color: "yellow", border: "none" }}
                    outline="none"
                  >
                    Blogs
                  </Tab>
                  <Tab
                    _focus={{ color: "yellow", border: "none" }}
                    outline="none"
                  >
                    Contect
                  </Tab>
                </TabList>
              </Tabs>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}

export default Ui;