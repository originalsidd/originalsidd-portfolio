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
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'

const SmartBrain = () => (
  <Layout title="smart">
    <Container>
      <Title>
        Smart Brain <Badge>2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/projects/smart.png" alt="icon" />
      </Center>
      <P>
        Smart-brain is a cool web-app on which users can upload pictures and in
        return the web-app detects any face present in the picure, displays the
        picture with the face marked in a rectangular box and increments the
        number of times a user detects any face.
      </P>
      <P>
        It offers a very interactve sign in portal through which users can
        register/sign in to the web-app so that their progress is saved. It is
        made up of client, server and database. Face detection model is used and
        trained from Clarifai API.
      </P>
      <br />
      <>This project is built with:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>React.js </ListItem>
        <ListItem>Tachyons </ListItem>
        <ListItem>Node.js + Express.js </ListItem>
        <ListItem>PostgreSQL </ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Web Browser</Meta>
          <span>Chrome/FireFox/Edge/Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/originalsidd/smart-brain">
            GitHub link
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Live</Meta>
          <Link href="https://smartface-brain.herokuapp.com/">
            Visit project
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <WorkImage src="/images/projects/smart1.png" alt="smart1" />
    </Container>
  </Layout>
)

export default SmartBrain
export { getServerSideProps } from '../../components/chakra'
