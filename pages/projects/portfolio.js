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

const Portfolio = () => (
  <Layout title="portfolio">
    <Container>
      <Title>
        Portfolio <Badge>2023</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/projects/port0.png" alt="icon" />
      </Center>
      <P>
        My portfolio website showcasing about me and my skills, education,
        projects, experience and achievements and others.
      </P>
      <P>
        The website design was inspired by{' '}
        <Link href="https://www.craftz.dog/">Takuya Matsuyama</Link>&apos;s
        website. Thank you for spreading knowledge and creativity!
      </P>
      <br />
      <>This project is built with:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>Next.js </ListItem>
        <ListItem>Three.js </ListItem>
        <ListItem>Chakra UI </ListItem>
        <ListItem>Framer Motion </ListItem>
        <ListItem>Emotion </ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Web Browser</Meta>
          <span>Chrome/FireFox/Edge/Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/originalsidd/originalsidd-portfolio">
            GitHub link
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Live</Meta>
          <Link href="https://originalsidd.com">Copy link</Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../../components/chakra'
