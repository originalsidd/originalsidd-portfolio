import { Container, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ExpGridItem } from '../components/grid-item'

import thumbIonIcon from '../public/images/projects/ion.gif'
import thumbHeliverseIcon from '../public/images/projects/heliverse.jpeg'
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
            id="ion"
            title="ION Group"
            role="Software Developer"
            time="Jan 2024 - Present"
            thumbnail={thumbIonIcon}
          >
            <b>{'>'}</b> Working on ION's flagship product for post trade
            management.
            <br />
            <b>{'>'}</b>{' '}
            <Link
              href="https://www.linkedin.com/posts/siddharthpal20_newjob-softwaredeveloper-excitingjourney-activity-7162364437419544576-xI2C?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              Link to media
            </Link>
          </ExpGridItem>
        </Section>
        <Section delay={0.1}>
          <ExpGridItem
            id="heliverse"
            title="Heliverse"
            role="Javascript Developer"
            time="Oct 2023 - Jan 2024"
            thumbnail={thumbHeliverseIcon}
          >
            <b>{'>'}</b> Developed a React Native App with over 100k+ downloads
            on Google Play Store.
            <br />
            <b>{'>'}</b>{' '}
            <Link
              href="https://www.linkedin.com/in/siddharthpal20/overlay/1705644843087/single-media-viewer/?profileId=ACoAADOzlj4BIjboGGKDJTtoAi5JaoiaFT5MbwM"
              target="_blank"
            >
              Link to media
            </Link>
          </ExpGridItem>
        </Section>
        <Section delay={0.2}>
          <ExpGridItem
            id="fidelity"
            title="Fidelity Investments"
            role="SDE Summer Intern"
            time="May 2023 - July 2023"
            thumbnail={thumbFidelityIcon}
          >
            <b>{'>'}</b> Worked on integrating new technologies to create a
            single ecosystem for various projects under AMT division.
            <br />
            <b>{'>'}</b>{' '}
            <Link
              href="https://www.linkedin.com/posts/siddharthpal20_summerinternship-fidelityinvestments-intern2023-activity-6978247859582234624-XNq0?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              Link to media
            </Link>
          </ExpGridItem>
        </Section>
        <Section delay={0.3}>
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
            <Link
              href="https://www.linkedin.com/in/siddharthpal20/overlay/1635503235841/single-media-viewer/?profileId=ACoAADOzlj4BIjboGGKDJTtoAi5JaoiaFT5MbwM"
              target="_blank"
            >
              Link to media
            </Link>
          </ExpGridItem>
        </Section>
      </SimpleGrid>
      <Heading as="h3" variant="section-title" mb={4}>
        Club Experience
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <ExpGridItem
            id="codechef"
            thumbnail={thumbCodechef}
            time="2022"
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
            time="2019"
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
