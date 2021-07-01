import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
    Flex,
} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { IProject } from "../types/global"

type IProps = {
    project: IProject
}

export default function ProjectCard({ project }: IProps) {
    return (
        <Flex direction="column" align="center" position="relative" flex="1">
            <Image
                src={`http:/localhost/${project.image}`}
                // layout="fill" 
                objectFit="cover"
                width="500px"
                height="auto"           
            />
            <Heading
                fontWeight={600}
                size="md"
                my={2}
                as="h3"
                textAlign="center">
                {project.title}
            </Heading>
            <Text>{project.category.name}</Text>
            <Stack mt={3} direction={"row"} spacing={5}>
                <Link href={`/projects/${project.slug}`}>
                    <Button
                        flex={1}
                        fontSize={"sm"}
                        rounded={"full"}
                        bg={"teal.400"}
                        color={"white"}
                        _hover={{
                            bg: "teal.500",
                        }}
                        _focus={{
                            bg: "teal.500",
                        }}>
                        Follow
                    </Button>
                </Link>
            </Stack>
        </Flex>
    )
}
