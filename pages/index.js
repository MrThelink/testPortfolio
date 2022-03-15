import NextLink from "next/link"
import { Container, Box, Heading, Image, Link, useColorModeValue, Button } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
import Head from "next/head"


const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                textAlign="center">
                Hello, I'm a junior softwarek developer based in Finland!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Deni Israilov 
                    </Heading>
                    <p>Junior Software ( Java | C# | JavaScript )</p>
                </Box>
                <Box 
                flexShrink={0}
                mt={{ base: 4, md: 0}}
                ml={{ md: 6}}
                align="center" 
                >
                <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidt={2} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full" 
                    scr="images/deni.png" 
                    alt="Portile Image"
                    /> 
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>Paragraph {' '}
                <NextLink href="/work/inkdrop">
                    <Link>Inkdrop</Link>
                </NextLink>
                .
                </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                    My portfolio
                </Button>
                </NextLink>
            </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
            <BioSection>
                <BioYear>2020</BioYear>
                Studying Vantaan Ammattiopisto Varia Information and communication technologies 2020/23
            </BioSection>    
            </Section>
        </Container>
    )
}

export default Page