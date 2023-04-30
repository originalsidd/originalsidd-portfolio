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

const Earth = () => (
  <Layout title="weather">
    <Container>
      <Title>
        3D Weather App <Badge>2023</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/projects/earth1.png" alt="icon" />
      </Center>
      <P>
        Weather App with live 3d Earth and weather information around the globe.
      </P>
      <br />
      <>Timeline:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>Develop Skeleton of world and dashboard ✅ </ListItem>
        <ListItem>Implement API and search info ✅ </ListItem>
        <ListItem>Map coordinates to 3D Sphere ✅</ListItem>
        <ListItem>Axis and light mapping ✅ </ListItem>
        <ListItem>Camera Animation ✅ </ListItem>
        <ListItem>Search Utility (Trie) and Design ✅ </ListItem>
        <ListItem>Dashboard Designing ✅</ListItem>
        <ListItem>Dashboard Functions and Utilities ✅ </ListItem>
        <ListItem>Dashboard Finishing ✅ </ListItem>
        <ListItem>Mobile View ✅ </ListItem>
        <ListItem>Loading and Landing Screen ✅ </ListItem>
        <ListItem>Final Product Release! ✅ </ListItem>
        <ListItem>Bug Fixes ✅</ListItem>
      </UnorderedList>
      <br />
      <>Controls:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>
          Search the weather of any city, state or country using the search bar
          in top.
        </ListItem>
        <ListItem>
          Click the search icon/press enter/select the name of the place from
          the dropdown list.
        </ListItem>
        <ListItem>
          Analyze weather statistics through the informative dashboard and the
          visual representation of the particular place on the 3D Earth.
        </ListItem>
      </UnorderedList>
      <br />
      <>This project is built with:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>React.js </ListItem>
        <ListItem>react-three-fiber </ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Web Browser</Meta>
          <span>Chrome/FireFox/Edge/Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/originalsidd/weather-app-threejs">
            GitHub link
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Live</Meta>
          <Link href="https://weather-app-threejs.vercel.app/">
            Search weather
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <WorkImage src="/images/projects/earth1.png" alt="earth1" />
      <WorkImage src="/images/projects/earth2.png" alt="earth2" />
      <WorkImage src="/images/projects/earth3.png" alt="earth3" />
      <WorkImage src="/images/projects/earth4.png" alt="earth4" />
    </Container>
  </Layout>
)

export default Earth
export { getServerSideProps } from '../../components/chakra'
