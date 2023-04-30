import { Container, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ExpGridItem } from '../components/grid-item'

import thumbFidelityIcon from '../public/images/projects/fidelity.png'
import thumbProtalIcon from '../public/images/projects/protal.jpeg'
import thumbCodechef from '../public/images/projects/codechef.jpg'
import thumbByte from '../public/images/projects/byte.jpg'

const Experience = () => (
  <Layout title="Experience">
    <Container>
      <Heading as="h3" variant="section-title" mb={4}>
        Work Experience
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6} mb={4}>
        <Section>
          <ExpGridItem
            id="fidelity"
            title="Fidelity Investments"
            role="SDE Summer Intern"
            time="May 2023 - Present"
            thumbnail={thumbFidelityIcon}
          >
            <b>{'>'}</b> Upcoming SDE Summer Intern at Fidelity Investments
            <br />
            <b>{'>'}</b>{' '}
            <Link href="https://www.linkedin.com/posts/siddharthpal20_summerinternship-fidelityinvestments-intern2023-activity-6978247859582234624-XNq0?utm_source=share&utm_medium=member_desktop">
              Link to media
            </Link>
          </ExpGridItem>
        </Section>
        <Section delay={0.1}>
          <ExpGridItem
            id="protal"
            title="Protal"
            role="App Developer"
            time="July 2021 - Feb 2022"
            thumbnail={thumbProtalIcon}
          >
            <b>
              <b>{'>'}</b>
            </b>{' '}
            Co-led the App Development Project at Protal in React Native for 6
            months.
            <br />
            <b>{'>'}</b> Learned to work in a team of developers and to build
            and deploy a full stack app while integrating front-end with
            back-end and other services.
            <br />
            <b>{'>'}</b>{' '}
            <Link href="https://www.linkedin.com/in/siddharthpal20/overlay/1635503235841/single-media-viewer/?profileId=ACoAADOzlj4BIjboGGKDJTtoAi5JaoiaFT5MbwM">
              Link to media
            </Link>
          </ExpGridItem>
        </Section>
      </SimpleGrid>
      <Heading as="h3" variant="section-title" mb={4}>
        Club Experience
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section delay={0.1}>
          <ExpGridItem
            id="codechef"
            thumbnail={thumbCodechef}
            time="March 2022 - Present (Uni)"
            title="CodeChef-VIT"
            role="Member"
          >
            <b>{'>'}</b> Member of CodeChef-VIT student chapter at VIT Vellore
          </ExpGridItem>
        </Section>
        <Section delay={0.1}>
          <ExpGridItem
            id="byte"
            thumbnail={thumbByte}
            time="April 2019 - April 2020 (School)"
            title="The Byte Knights"
            role="President"
          >
            <b>{'>'}</b> President of high school tech club The Byte Knights{' '}
            <br />
            <b>{'>'}</b> Organized Talent Trove 2019 which comprised of around
            10 major events with a participation of 500+ students <br />
            <b>{'>'}</b> Conducted workshops and events related to intriguing
            technologies like Artificial Intelligence
          </ExpGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../components/chakra'
