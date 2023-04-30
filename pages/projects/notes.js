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

const Notes = () => (
  <Layout title="notes">
    <Container>
      <Title>
        Notes App <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/projects/notes.png" alt="icon" />
      </Center>
      <P>
        A simple Note taking WebApp with an interesting stack and a first timer
        for me.
      </P>
      <br />
      <>This project is built with:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>React.js </ListItem>
        <ListItem>Django </ListItem>
        <ListItem>SQLite </ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Web Browser</Meta>
          <span>Chrome/FireFox/Edge/Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/originalsidd/django-react-notes-app">
            GitHub link
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Live</Meta>
          <Link href="https://dj-react-notes-app.herokuapp.com/">
            Take Notes
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <WorkImage src="/images/projects/notes1.jpg" alt="notes1" />
      <WorkImage src="/images/projects/notes0.jpg" alt="notes0" />
      <WorkImage src="/images/projects/notes2.jpg" alt="notes2" />
    </Container>
  </Layout>
)

export default Notes
export { getServerSideProps } from '../../components/chakra'
