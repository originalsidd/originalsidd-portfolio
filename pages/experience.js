import { Heading, SimpleGrid, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ExpGridItem } from '../components/grid-item'

import thumbIonIcon from '../public/images/projects/ion.gif'
import thumbHeliverseIcon from '../public/images/projects/heliverse.jpeg'
import thumbFidelityIcon from '../public/images/projects/fidelity.png'
import thumbProtalIcon from '../public/images/projects/protal.jpeg'

const Experience = () => (
  <Layout title="Experience">
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
          <b>{'>'}</b> Working on ION's flagship product XTP, a real time end to
          end back office trading product suite based on java technology stack.
          <br />
          <b>{'>'}</b> Worked on technical as well as functional improvements of
          the product across its various functionalities.
          <br />
          <b>{'>'}</b> Developed Unit and Acceptance Tests for every new
          feature.
          <br />
          <b>{'>'}</b> Gained experience in agile practices including sprint
          meetings, daily scrums, agile development, etc.
          <br />
          <b>{'>'}</b>{' '}
          <i>
            Tech Stack: Java, C#, Python, Guice, Jenkins, Docker, AWS, Oracle
            SQL, Hibernate, Robot Framework, Power BI
          </i>
          <br />
          <b>{'>'}</b>{' '}
          <Link
            bref="https://www.linkedin.com/posts/siddharthpal20_newjob-softwaredeveloper-excitingjourney-activity-7162364437419544576-xI2C?utm_source=share&utm_medium=member_desktop"
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
          role="Javascript Development Intern"
          time="Oct 2023 - Jan 2024"
          thumbnail={thumbHeliverseIcon}
        >
          <b>{'>'}</b> Developed a React Native App with over 100k+ downloads on
          Google Play Store.
          <br />
          <b>{'>'}</b> Enhanced the working of existing code base, fixed old
          errors and integrated complex UI/UX flows with performance
          improvements.
          <br />
          <b>{'>'}</b> Deployed the App on Google Play Store and Apple App Store along with
          integration of real time analytics.
          <br />
          <b>{'>'}</b>{' '}
          <i>Tech Stack: React Native, JavaScript, Redux, Firebase</i>
          <br />
          <b>{'>'}</b>{' '}
          <Link
            bref="https://www.linkedin.com/in/siddharthpal20/overlay/1705644843087/single-media-viewer/?profileId=ACoAADOzlj4BIjboGGKDJTtoAi5JaoiaFT5MbwM"
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
          <b>{'>'}</b> Implemented Glue42, a real-time desktop integration
          technology, across 3+ applications with different frameworks (Vanilla
          Javascript, AngularJS, VueJS, GWT)
          <br />
          <b>{'>'}</b> Developed 3+ Spring Boot APIs for AG Grid-powered
          front-end dashboard
          <br />
          <b>{'>'}</b>{' '}
          <i>
            Tech Stack: JavaScript, AngularJS, VueJS, Spring Boot, Glue42,
            Google Web Toolkit
          </i>
          <br />
          <b>{'>'}</b>{' '}
          <Link
            bref="https://www.linkedin.com/posts/siddharthpal20_summerinternship-fidelityinvestments-intern2023-activity-6978247859582234624-XNq0?utm_source=share&utm_medium=member_desktop"
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
          <b>{'>'}</b> First time experience of working in a team of developers
          and building the frontend of a full stack social media app.
          <br />
          <b>{'>'}</b>{' '}
          <i>Tech Stack: React Native, NodeJS, MongoDB</i>
          <br />
          <b>{'>'}</b>{' '}
          <Link
            bref="https://www.linkedin.com/in/siddharthpal20/overlay/1635503235841/single-media-viewer/?profileId=ACoAADOzlj4BIjboGGKDJTtoAi5JaoiaFT5MbwM"
            target="_blank"
          >
            Link to media
          </Link>
        </ExpGridItem>
      </Section>
    </SimpleGrid>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../components/chakra'
