import Head from "next/head"
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react"
import Link from "next/link"

export default function Hero() {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Container maxW={"3xl"}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                        lineHeight={"110%"}>
                        Hi, I'm
                        <Text as={"span"} color={"teal.400"}>
                            &nbsp;Travis Saylor
                        </Text>
                        <br />
                        and I'm a Full Stack Developer
                    </Heading>
                    <Text color={"gray.500"}>
                        I am a Web Developer based in Nashville, TN. I build
                        Modern Frontend Applications using the latest tech such
                        as React, Next.js, and React Native. I also build Apis
                        and Backend archetecture using PHP MVC frameworks and
                        Wordpress.
                    </Text>
                    <Stack
                        direction={"column"}
                        spacing={3}
                        align={"center"}
                        alignSelf={"center"}
                        position={"relative"}>
                        <Link href="/projects">
                            <Button
                                colorScheme={"teal"}
                                bg={"teal.400"}
                                rounded={"full"}
                                px={6}
                                _hover={{
                                    bg: "teal.500",
                                }}>
                                View My Work
                            </Button>
                        </Link>
                        <Button
                            variant={"link"}
                            colorScheme={"grey"}
                            size={"sm"}>
                            Learn More About Me
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}
