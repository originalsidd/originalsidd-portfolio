import { Heading, Text, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbAngel from '../public/images/ytangel.png'
import Image from 'next/image'
import NextLink from 'next/link'

const Music = () => (
  <Layout title="Music">
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title" mb={4}>
        My Music Productions
      </Heading>
      <Section delay={0.2}>
        <Link
          as={NextLink}
          href="https://www.youtube.com/@original-angel"
          passHref
          target="_blank"
        >
          <Image
            src={thumbAngel}
            alt={'Angel - Music Channel'}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
        </Link>
        <Text mt={2} fontSize={24} textAlign={'center'}>
          <b> {'Angel - My Music Channel'}</b>
        </Text>
        <Text fontSize={16} textAlign={'center'}>
          I have a strong knack for music production. I have been pursuing this
          as my major hobby since the summer of 2018. Currently I produce electronic music using Logic
          Pro, previously FL Studio.
        </Text>
      </Section>
    </Section>
  </Layout>
)

export default Music
export { getServerSideProps } from '../components/chakra'
