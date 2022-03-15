import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    SimpleGrid
  } from '@chakra-ui/react'
  import Section from '../components/section'
  import { WorkGridItem } from '../components/grid-item'
  
  const Works = () =>{
      return (
          <Container>
              <Heading as="h3" fontSize={20} mb={4}> 
                Works
              </Heading>

              <SimpleGrid column={[1,1,2]} gap={6}>
                  <Section></Section>
              </SimpleGrid>
          </Container>
      )
  }

  export default Works