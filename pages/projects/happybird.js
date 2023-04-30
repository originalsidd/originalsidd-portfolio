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

const HappyBird = () => (
  <Layout title="happybird">
    <Container>
      <Title>
        Happy Bird <Badge>2023</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/projects/happybird.png" alt="icon" />
      </Center>
      <P>
        Happy Bird is the 3d version of the famous flappy bird with little
        tweaks here and there to make it feel fun and immersive in the urban
        setting.
      </P>
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
          <Link href="https://github.com/originalsidd/happy-bird">
            GitHub link
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Live</Meta>
          <Link href="https://happy-bird.vercel.app/">Play Happy Bird</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <WorkImage src="/images/projects/happybird2.png" alt="happybird2" />
      <WorkImage src="/images/projects/happybird3.png" alt="happybird3" />
    </Container>
  </Layout>
)

export default HappyBird
export { getServerSideProps } from '../../components/chakra'
