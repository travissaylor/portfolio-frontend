import { Flex } from "@chakra-ui/layout"
import Footer from "./Footer"
import Nav from "./Nav"

const SiteLayout = ({ children }) => {
    return (
        <Flex direction="column">
            <Nav />
            <Flex direction="column" flex={1}>{children}</Flex>
            <Flex direction="column" flexShrink={0}>
                <Footer />
            </Flex>
        </Flex>
    )
}

export default SiteLayout
