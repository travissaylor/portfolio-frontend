import { Flex, Heading } from "@chakra-ui/layout";
type Props = {
    title: string
}
const BasicHeading = ({title}: Props) => {
    return (
        <Flex
        direction="column"
        align="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 10, md: 20 }}>
        <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={"teal.400"}>
            {title}
        </Heading>
    </Flex>
    )
}

export default BasicHeading;