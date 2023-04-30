import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import WolfIcon from './icons/wolf'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transform: scale(1.2);
    transition: 200ms ease;
  }
  &:hover > svg {
    transform: scale(1.4);
    color: #f8bf3c;
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <WolfIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="Montserrat"
          fontWeight="bold"
          ml={3}
        >
          Siddharth Pal
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
