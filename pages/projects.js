import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHappybird from '../public/images/projects/happybird.png'
import thumbHidden from '../public/images/projects/hidden.png'
import thumbEarth from '../public/images/projects/earth.png'
import thumbCube from '../public/images/projects/cube.png'
import thumbShuttle from '../public/images/projects/shuttle.png'
import thumbEvent from '../public/images/projects/event.png'
import thumbLoca from '../public/images/projects/loca.png'
import thumbNotes from '../public/images/projects/notes.png'
import thumbSmart from '../public/images/projects/smart.png'
import thumbWeb from '../public/images/projects/oldweb.png'
import thumbPort from '../public/images/projects/port0.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" variant="section-title" mb={4}>
        Recent Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="happybird"
            title="Happy Bird"
            thumbnail={thumbHappybird}
          >
            Happy Bird 🕊️ is the first 3d version of bird and pillars game that
            you can play directly in your browser! 🥳
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="hidden" title="Hidden" thumbnail={thumbHidden}>
            Hackathon Winning🥇 "HIDDEN" is an AI-powered assistive technology
            to help people with disabilities
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="weather" thumbnail={thumbEarth} title="Weather 3D">
            Weather App with live 3d Earth and weather information around the
            globe🌏
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="cube"
            title="Rubiks/Magic Cube"
            thumbnail={thumbCube}
          >
            Rubiks Cube Three JS is the Three JS 3D implementation of Magic
            Cube⏹️ using a unique approach.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" variant="section-title" mb={4}>
          Projects
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="shuttle"
            thumbnail={thumbShuttle}
            title="Shuttle Tracker"
          >
            Track Shuttles inside your campus with ease! Say goodbye to GPS and
            hello to sensors🥳
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="event" thumbnail={thumbEvent} title="Event Manager">
            A full-on event management website for a typical college fest event
            with all CRUD ops 👀
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="locachat" thumbnail={thumbLoca} title="LocaChat">
            A location-based chat-app📲 to share important information to nearby
            users anonymously
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="notes" thumbnail={thumbNotes} title="Notes App">
            An online notes📝app made with React on frontend and Django on
            backend!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" variant="section-title" mb={4}>
          Old Projects
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="smart" thumbnail={thumbSmart} title="Smart Brain">
            My first full stack practice project🧠 made with React, Node and
            PostgreSQL
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="oldwebsite"
            thumbnail={thumbWeb}
            title="Old Portfolio"
          >
            My previous and first personal portfolio! Last updated more than a
            year ago😲
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
          Portfolio Project
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="portfolio" thumbnail={thumbPort} title="Portfolio">
            My portfolio website showcasing my skills, projects, experience and
            achievements.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" variant="section-title" mb={4}>
          Under Development
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <b>Quiz Game:</b> Building with React Native and 2 popular backend
          frameworks to compare performance
        </Section>
        <Section delay={0.5}>
          <b>Audogic: </b> Building online audio processor with seamless and
          fast computation
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
