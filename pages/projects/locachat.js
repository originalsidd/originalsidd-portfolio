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

const LocaChat = () => (
  <Layout title="locachat">
    <Container>
      <Title>
        LocaChat <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/projects/loca.png" alt="icon" />
      </Center>
      <P>
        A location-based chat-app to share important/interesting information to
        the nearby users anonymously. Let's say a user A broadcasts a message in
        the super chat interface provided in the App. The chat will be visible
        to all the users using the App within a 2km radius of user A.
      </P>
      <P>
        This app would allow users to anonymously send messages to other users
        based on their location. The app would be useful for transmitting
        important information to strangers in one's vicinity, such as alerts
        about a natural disaster or a crime or just a discussion about things
        happening in the surroundings. Users would be able to broadcast messages
        to any other user within that radius of 2km using the app. Chatrooms for
        special events would also be possible using the app.
      </P>
      <br />
      <>This project is built with:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>React.js </ListItem>
        <ListItem>Firebase </ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Web Browser</Meta>
          <span>Chrome/FireFox/Edge/Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/originalsidd/locaChat">
            GitHub link
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Live</Meta>
          <Link href="https://originalsidd.github.io/locaChat/">Chat!</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <WorkImage src="/images/projects/loca1.png" alt="loca1" />
      <WorkImage src="/images/projects/loca2.png" alt="loca2" />
    </Container>
  </Layout>
)

export default LocaChat
export { getServerSideProps } from '../../components/chakra'
