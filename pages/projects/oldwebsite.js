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

const OldWeb = () => (
  <Layout title="oldwebsite">
    <Container>
      <Title>
        Old Website<Badge>2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/projects/oldweb.png" alt="icon" />
      </Center>
      <P>
        My first personal portfolio project. This project was last updated more
        than a year ago. Thus, I made this new portfolio to update the viewers
        about my adventures!
      </P>
      <br />
      <>This project is built with:</>
      <UnorderedList ml={4} my={0}>
        <ListItem>React.js </ListItem>
        <ListItem>Styled Elements </ListItem>
      </UnorderedList>

      <List my={4}>
        <ListItem>
          <Meta>Web Browser</Meta>
          <span>Chrome/FireFox/Edge/Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/originalsidd/Website">
            GitHub link
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Live</Meta>
          <Link href="https://originalsidd.github.io/Website">
            Visit old portfolio
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>
      <WorkImage src="/images/projects/oldweb1.png" alt="oldweb1" />
      <WorkImage src="/images/projects/oldweb2.png" alt="oldweb2" />
    </Container>
  </Layout>
)

export default OldWeb
export { getServerSideProps } from '../../components/chakra'
