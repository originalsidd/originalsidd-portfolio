import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Link } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/projects/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        // height={200}
      />
      <LinkOverlay as="div" href={`/projects/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ExpGridItem = ({ children, title, time, thumbnail, role }) => (
  <Box display="flex" flexDirection="row" mb={-4}>
    <Box>
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        height={120}
      />
    </Box>
    <Box w="100%" display="flex" flexDirection="column" ml={5}>
      <Box display="flex" flexDirection="column" w="100%">
        <Text fontWeight="bold" fontSize={20} lineHeight={1}>
          {title}
        </Text>
        <Text fontWeight="medium" fontSize={18}>
          {role}
        </Text>
        <Text fontSize={14} fontStyle="italic">
          {time}
        </Text>
      </Box>
      <Text fontSize={14}>{children}</Text>
    </Box>
  </Box>
)

export const FeatGridItem = ({
  children,
  title,
  time,
  href,
  isNotLink,
  underline
}) => (
  <Box display="flex" flexDirection="row" mb={-4}>
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      ml={5}
      borderBottomWidth={underline ? 2 : 0}
      pb={underline ? 2 : 0}
    >
      <Box display="flex" flexDirection="column" w="100%">
        <Text fontSize={20}>{title}</Text>
        <Text fontSize={14} fontStyle="italic">
          {time}
        </Text>
      </Box>
      <Text fontSize={14}>{children}</Text>
      {!isNotLink && (
        <Link href={href} target="_blank">
          <Text fontSize={14}>Link to media</Text>
        </Link>
      )}
    </Box>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
