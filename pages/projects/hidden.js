import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Hidden = () => (
  <Layout title="hidden">
    <Container>
      <Title>
        Hidden <Badge>2023</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/projects/hidden.png" alt="icon" />
      </Center>
      <P>
        AI-powered Assistive technology to help people with disabilities by me
        and{' '}
        <Link href="https://www.linkedin.com/in/appleswiggy/" target="_blank">
          Chirag Madaan
        </Link>
        .
      </P>
      <P>
        Our project provides people with disabilities that affect their fine
        motor skills or make it difficult to use a traditional keyboard or
        mouse, with an alternative input method that is much easier and more
        comfortable to use. Using our project, physically challenged people will
        be able to control their laptops, computers and mobile devices using
        their voice. We provide this functionality by making our microcontroller
        act as an HID to mimic keyboard and mouse.
      </P>
      <br />
      <>This project is built with:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>React.js + Vite</ListItem>
        <ListItem>CircuitPython </ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Web Browser</Meta>
          <span>Chrome/FireFox/Edge/Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/originalsidd/hidden-web">
            GitHub link
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Extra</Meta>
          <Link href="https://github.com/appleswiggy/hidden/">
            Full project
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <WorkImage src="/images/projects/hidden2.jpg" alt="hidden2" />
      <WorkImage src="/images/projects/hidden3.jpg" alt="hidden3" />
    </Container>
  </Layout>
)

export default Hidden
export { getServerSideProps } from '../../components/chakra'
