import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { SkillsSection, SkillsType } from '../components/skills'
import Layout from '../components/layouts/article'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoDiscord
} from 'react-icons/io5'
import HackText from '../components/hack'
import { useState } from 'react'

const Page = () => {
  const [hack, setHack] = useState(
    `Hello :) I'm a software developer based in India!`
  )
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('blackAlpha.800', '#A7D42A')}
          color={useColorModeValue('#A7D42A', '#300')}
          fontFamily="monospace"
          fontWeight="bold"
          p={3}
          mb={6}
          align="center"
          fontSize={15}
        >
          <HackText text={hack} setText={setHack}>
            {hack}
          </HackText>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Siddharth Pal
            </Heading>
            <p>
              <i>Also known as ORIGINALSIDD</i>
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              width="auto"
              height="auto"
              display="inline-block"
              borderRadius="full"
              src="/images/sidd.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            I develop solutions with creativity and innovation. Solving
            real-life problems with unique ideas and code is as exciting as it
            gets!
          </Paragraph>
          <Paragraph>
            I have experience in Full Stack Development ranging from MERN based
            to Java based development, including a bit of Machine Learning and
            Cloud Computing.
          </Paragraph>
          <Paragraph>
            In my free time, I enjoy engaging in various activities like{' '}
            <Link
              as={NextLink}
              href="https://www.youtube.com/@original-angel"
              passHref
              target="_blank"
            >
              music-production,
            </Link>{' '}
            <Link
              as={NextLink}
              href="https://codeforces.com/profile/originalsidd"
              passHref
              target="_blank"
            >
              competitive programming,
            </Link>{' '}
            stargazing, and traveling the world.
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <SkillsType>Languages:</SkillsType>
          <SkillsSection>
            C++, C, Java, Python, JavaScript, Rust, R, SQL, PHP, MQL
          </SkillsSection>
          <SkillsType>Frameworks:</SkillsType>
          <SkillsSection>
            React.js, React Native, Node.js, Express.js, Three.js, Django,
            MySQL, PostgreSQL, MongoDB, Redux
          </SkillsSection>
          <SkillsType>Tools:</SkillsType>
          <SkillsSection>
            GIT, Expo, Postman, Docker, Tableau, Power BI, Grafana
          </SkillsSection>
          <SkillsType>Platforms:</SkillsType>
          <SkillsSection>
            Web, Windows, Mac OS, Android, Linux, Arduino
          </SkillsSection>
          <SkillsType>Clouds:</SkillsType>
          <SkillsSection>AWS, GCP, Firebase</SkillsSection>
          <SkillsType>Soft Skills:</SkillsType>
          <SkillsSection>
            Problem Solving, Communication, Leadership, Teamwork, Event
            Management, Public Speaking
          </SkillsSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <SkillsType>2020-2024</SkillsType>
          <SkillsSection>
            B.Tech Computer Science with spec. in Data Science
            <div />
            <i>Vellore Institute of Technology, Vellore, India</i> <div />
            Grade: 8.96 CGPA
          </SkillsSection>
          <SkillsType>2018-2020</SkillsType>
          <SkillsSection>
            Senior Secondary - PCM with Computer Science <div />
            <i>Mira Model School, Delhi, India</i> <div />
            Grade: 95.6%
          </SkillsSection>
          <SkillsType>2008-2018</SkillsType>
          <SkillsSection>
            Secondary - with Computer Science <div />
            <i>Mira Model School, Delhi, India</i> <div />
            Grade: 91.8%
          </SkillsSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Connect
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/originalsidd" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="whatsapp"
                  leftIcon={<IoLogoGithub />}
                >
                  GitHub
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/siddharthpal20"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="linkedin"
                  leftIcon={<IoLogoLinkedin />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/originalsidd_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<IoLogoInstagram />}
                >
                  Instagram
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://discordapp.com/users/CosmicWolf#1202"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="purple"
                  leftIcon={<IoLogoDiscord />}
                >
                  Discord
                </Button>
              </Link>
            </ListItem>
          </List>

          <Heading as="h3" variant="section-title">
            Contact Me
          </Heading>
          <p>
            Send feedback about my projects or ask out for any tech tips!
          </p>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="mailto: originalsidd@gmail.com"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme={useColorModeValue('yellow', 'gray')}
            >
              Mail Me
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
