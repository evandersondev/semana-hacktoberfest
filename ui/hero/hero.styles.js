import styled from 'styled-components'
import { rgba } from 'polished'
import { motion } from 'framer-motion'
import { media } from 'ui'

export const makeAnimation = delay => ({
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
      },
    },
  },
})

export const Wrapper = styled.section`
  align-items: center;
  padding: 12rem 0 9rem;

  ${media.greaterThan('md')`
    height: 100vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 14.5rem;
    padding: 20rem 0 20rem;
  `}
`

export const Illustration = styled(motion.img)`
  display: none;
  width: 100%;

  ${media.greaterThan('md')`
    display: block;
  `}
`

export const Title = styled(motion.h2)`
  font-size: clamp(2.6rem, 7vw, 4.2rem);
  font-weight: 700;
  padding: 5rem 0 2rem;
  max-width: 58rem;
`

export const Text = styled(motion.p)`
  padding-bottom: 3rem;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  line-height: 1.5;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`
