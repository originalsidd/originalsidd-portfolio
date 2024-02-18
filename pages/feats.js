import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { FeatGridItem } from '../components/grid-item'

const Feat = () => (
  <Layout title="Feat">
    <Container>
      <Heading as="h3" variant="section-title" mb={4}>
        Achievements
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 1]} gap={6} mb={8}>
          <FeatGridItem
            title="Capstone Winner"
            href="https://www.linkedin.com/posts/siddharthpal20_capstonesuccess-teamachievement-innovation-activity-7162445839720730625-0MtR?utm_source=share&utm_medium=member_desktop"
            time="Jan 2024"
          >
            2nd Prize Winner at LDP Induction Capstone organised by ION Group
            2024
          </FeatGridItem>
          <FeatGridItem
            title="Codeathon Winner"
            href="https://www.linkedin.com/posts/siddharthpal20"
            time="July 2023"
          >
            2nd Prize Winner at Codeathon organised by Fidelity Investments 2023
          </FeatGridItem>
          <FeatGridItem
            title="Make-A-Thon Winner"
            href="https://www.linkedin.com/posts/siddharthpal20_hackathon-innovation-winningteam-activity-7047914272659550208-VNI6?utm_source=share&utm_medium=member_desktop"
            time="April 2023"
          >
            3rd Prize Winner at VIT SELECT Make-A-Thon 2023
          </FeatGridItem>
          <FeatGridItem
            title="Codeforces Rating"
            href="https://codeforces.com/profile/originalsidd"
            time="July 2022"
          >
            Highest Rating: 1309
          </FeatGridItem>
          <FeatGridItem
            title="SIH Shortlist"
            href="https://www.linkedin.com/posts/siddharthpal20_smartindiahackathon-hackathon-technology-activity-6945087685040439296-cbjr?utm_source=share&utm_medium=member_desktop"
            time="June 2022"
          >
            Shortlisted in waitlist for Smart India Hackathon 2022 organised by
            the Government of India
          </FeatGridItem>
          <FeatGridItem
            title="NPSC Work"
            href={null}
            time="March 2020"
            isNotLink
          >
            Worked on a Multi-Media Presentation that was staged at the Annual
            National Progressive Schools Conference at the India International
            Centre, Lodhi Road, New Delhi.
          </FeatGridItem>
        </SimpleGrid>
      </Section>

      <Heading as="h3" variant="section-title" mb={4}>
        Publications
      </Heading>
      <Section delay={0.3}>
        <SimpleGrid columns={[1, 1, 1]} gap={8}>
          <FeatGridItem
            title="Location Based Order Assignment System"
            isNotLink
            underline
            time="March 2023"
          >
            Accepted for presentation at the 2nd International Conference on
            Innovation and Business Intelligence in Multidisciplinary Research
            and Practices organized by the Department of Research & Development
            at Global Institute of Management on March 22, 2023. <br />
            <i>
              The paper is currently under final review for publication in the
              Journal of Small Business Management.
            </i>
          </FeatGridItem>
          <FeatGridItem
            title="Detection and Classification of DDoS Attacks using Machine Learning and Deep Learning"
            isNotLink
            underline
            time="March 2023"
          >
            Accepted for presentation at the 2nd International Conference on
            Innovation and Business Intelligence in Multidisciplinary Research
            and Practices organized by the Department of Research & Development
            at Global Institute of Management on March 22, 2023. <br />
            <i>
              The paper is currently under final review for publication in the
              Journal of Data Acquisition and Processing.
            </i>
          </FeatGridItem>
          <FeatGridItem
            title="Obstacle Detection and Path Planning for Robots"
            isNotLink
            time="March 2023"
          >
            Accepted for presentation at the 2nd International Conference on
            Innovation and Business Intelligence in Multidisciplinary Research
            and Practices organized by the Department of Research & Development
            at Global Institute of Management on March 22, 2023. <br />
            <i>
              The paper is currently under final review for publication in the
              Journal of Data Acquisition and Processing.
            </i>
          </FeatGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Feat
export { getServerSideProps } from '../components/chakra'
