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

const Event = () => (
  <Layout title="event">
    <Container>
      <Title>
        3D Weather App <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/projects/event.png" alt="icon" />
      </Center>
      <P>
        A full-on event management website for a typical college fest event with
        all CRUD operations present along with time restrictions. It was built
        as part of the MotorQ Assignment (Application Engineer Internship
        assignment)
      </P>
      <P>
        This app has been made with funadmental techniques of development. I
        have tried to avoid few packages here and there which could be
        implemented by myself like Authentication, Vanilla CSS, etc.
      </P>
      <br />
      <>This project is built with:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>React.js </ListItem>
        <ListItem>Node.js + Express.js </ListItem>
        <ListItem>MongoDB </ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Web Browser</Meta>
          <span>Chrome/FireFox/Edge/Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/originalsidd/Motorq-event-frontend">
            GitHub link frontend
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Extra</Meta>
          <Link href="https://github.com/originalsidd/Motorq-event-backend">
            GitHub link backend
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <WorkImage src="/images/projects/event1.png" alt="event1" />
      <WorkImage src="/images/projects/event2.png" alt="event2" />
    </Container>
  </Layout>
)

export default Event
export { getServerSideProps } from '../../components/chakra'
