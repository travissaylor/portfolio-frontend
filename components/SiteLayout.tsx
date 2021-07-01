import { Flex } from "@chakra-ui/layout"
import Footer from "./Footer"
import Nav from "./Nav"

type Props = {
    children?: React.ReactNode
}

const SiteLayout = ({ children }: Props) => {
    return (
        <Flex direction="column" height={"100vh"}>
            <Nav />
            <Flex direction="column" flex={1}>
                {children}
            </Flex>
            <Flex direction="column" flexShrink={0}>
                <Footer />
            </Flex>
        </Flex>
    )
}

export default SiteLayout
