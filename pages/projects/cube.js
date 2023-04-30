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

const Cube = () => (
  <Layout title="cube">
    <Container>
      <Title>
        Rubiks Cube <Badge>2023</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/projects/cube.png" alt="icon" />
      </Center>
      <P>
        Rubiks Cube Three JS is the Three JS 3D implementation of Magic Cube
        using a unique approach.
      </P>
      <P>No Affiliation intended to "Rubik's Brands"</P>
      <br />
      <>Timeline:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>First Version of implementation ✅ </ListItem>
        <ListItem>Second Version done (Final Version) ✅ </ListItem>
        <ListItem>UI Implementation ✅ </ListItem>
        <ListItem>Final Product Release! ✅ </ListItem>
        <ListItem>Production Bug Fixed ✅</ListItem>
      </UnorderedList>
      <br />
      <>Controls:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>
          All the standard cube moves are represented in terms of buttons
        </ListItem>
        <ListItem>Shuffle button for shuffling the cube</ListItem>
        <ListItem>Reset camera button for resetting the view</ListItem>
      </UnorderedList>
      <br />
      <>This project is built with:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>Three.js </ListItem>
        <ListItem>Javascript </ListItem>
        <ListItem>HTML5 </ListItem>
        <ListItem>CSS3</ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Web Browser</Meta>
          <span>Chrome/FireFox/Edge/Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/originalsidd/Rubiks-Cube-ThreeJS">
            GitHub link
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Live</Meta>
          <Link href="https://rubiks-cube-threejs.vercel.app/">Solve cube</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <WorkImage src="/images/projects/cube1.png" alt="cube1" />
      <WorkImage src="/images/projects/cube2.jpg" alt="cube2" />
      <WorkImage src="/images/projects/cube3.jpg" alt="cube3" />
    </Container>
  </Layout>
)

export default Cube
export { getServerSideProps } from '../../components/chakra'
