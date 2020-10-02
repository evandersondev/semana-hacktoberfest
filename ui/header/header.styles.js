import styled from 'styled-components'

import { darken, rgba } from 'polished'
import { motion } from 'framer-motion'

import { media } from 'ui'

export const motionWrapper = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
}

export const Wrapper = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12rem;
  padding: 4rem 1.5rem;
  width: 100%;
  max-width: 134.5rem;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background};

  ${media.lessThan('md')`
    height: 8rem;
  `}
`

export const Logo = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-width: 22rem;
`

export const Navigation = styled.nav`
  display: inline-flex;
`

export const NavItem = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 1.6rem;
  margin-right: 2.5rem;
  position: relative;
  transition: color .25s ease;
  color: ${({ theme }) => theme.colors.text};


  &:last-child {
    padding-left: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};

    &:focus,
    &:hover {
      color: ${({ theme }) => darken(0.15, theme.colors.primary)};
    }

    ${media.greaterThan('md')`
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: .1rem;
        background-color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
      }
    `}

    ${media.lessThan('md')`
      padding-right: 0;
      font-size: 1.2rem;
      white-space: nowrap;
    `}
  }

  &:not(:last-child) {
    ${media.lessThan('lg')`
      display: none;
    `}

    &:before {
      content: ' ';
      position: absolute;
      height: .1rem;
      width: 0;
      bottom: -.5rem;
      left: 0;
      background: ${({ theme }) => theme.colors.text};
      transform: rotate(-1deg);
      transition: 100ms;
    }

    &:hover{
      &:before  {
        width: 100%;
      }
    }
  }
`
