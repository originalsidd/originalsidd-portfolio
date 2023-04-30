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

const Shuttle = () => (
  <Layout title="shuttle">
    <Container>
      <Title>
        Shuttle App <Badge>2023</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/projects/shuttle.png" alt="icon" />
      </Center>
      <P>
        Shuttle tracking app to track shuttle inside a university/college campus
        without the need of GPS i.e., using static sensors along the route.
        Additional capabilities include delay and arrival time prediction.
      </P>
      <P>
        The proposed system has three main modules: IOT data collection, User
        app, and Server. The first module uses a microcontroller and sensors
        like ultrasonic and color sensors to detect shuttle presence, location,
        and timestamp. Data is sent to the User app using a Bluetooth sensor,
        which displays shuttle location and direction on a designated route map.
        A notifications panel displays comments on the delay status. Data is
        also sent to the server when the shuttle passes through two stops for
        predicting its running status.
      </P>
      <P>
        The second module is the User app developed using React Native, which
        fetches data from the Bluetooth sensor using classic Bluetooth package.
        The app sends data to the backend server to predict the running status
        of the shuttle.
      </P>
      <P>
        The third module is the server running on Python/Node JS framework,
        which uses a Random Forest algorithm to predict shuttle status based on
        attributes like time between stops, day of the week, and hour of the
        day. The data type for each attribute is numerical, and the model is
        trained on the dataset and saved as a .joblib file. The app sends data
        to the server using a POST request, and the server makes a prediction
        using the saved model. The prediction is sent back to the server as a
        response to the POST request, and the app displays the notification if
        the bus is faster or slower than usual. Overall, the system aims to
        provide users with real-time shuttle information and predict its running
        status for improved efficiency.
      </P>
      <br />
      <>This project is built with:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>React-Native </ListItem>
        <ListItem>Ignite CLI</ListItem>
        <ListItem>Python-Server </ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android/iOS/Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/originalsidd/shuttle-app-frontend">
            GitHub link frontend
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Extra</Meta>
          <Link href="https://github.com/originalsidd/shuttle-app-backend">
            GitHub link backend
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <WorkImage src="/images/projects/shuttle3.jpg" alt="shuttle3" />
      <WorkImage src="/images/projects/shuttle1.jpg" alt="shuttle1" />
      <WorkImage src="/images/projects/shuttle2.jpg" alt="shuttle2" />
    </Container>
  </Layout>
)

export default Shuttle
export { getServerSideProps } from '../../components/chakra'
