import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { breakpoints, colors, spacing } from '@/shared/theme'
import { CoverHoverOverlay, CoverIcon, ProgressOverlay } from './VideoPreview.styles'

export const HOVER_BORDER_SIZE = '2px'

type MainProps = {
  main: boolean
}

type ContainerProps = {
  clickable: boolean
} & MainProps

type ScalesWithCoverProps = {
  scalingFactor: number
}

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`

export const CoverWrapper = styled.div`
  max-width: 650px;
  width: 100%;
`

export const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;

  transition-property: box-shadow, transform;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation: ${fadeIn} 0.5s ease-in;
`

const mainContainerCss = css`
  @media screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;
  }
`

export const Container = styled.article<ContainerProps>`
  width: 100%;
  color: ${colors.gray[300]};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};

  display: inline-flex;
  flex-direction: column;
  ${({ main }) => main && mainContainerCss}

  ${({ clickable }) =>
    clickable &&
    `
				&:hover {
					${CoverContainer} {
						transform: translate(-${spacing.xs}, -${spacing.xs});
						box-shadow: ${spacing.xs} ${spacing.xs} 0 ${colors.blue['500']};
					}

					${CoverHoverOverlay} {
						opacity: 1;
					}
					
					${CoverIcon} {
						transform: translateY(0);
					}

					${ProgressOverlay} {
						bottom: ${HOVER_BORDER_SIZE};
					}
				}
			`};
`

const mainInfoContainerCss = css`
  @media screen and (min-width: ${breakpoints.medium}) {
    margin: ${spacing.xxl} 0 0 ${spacing.xl};
  }
`

export const InfoContainer = styled.div<MainProps>`
  width: 100%;
  display: flex;
  margin-top: ${({ main }) => (main ? spacing.m : spacing.s)};
  ${({ main }) => main && mainInfoContainerCss};
`

export const AvatarContainer = styled.div<ScalesWithCoverProps>`
  width: calc(40px * ${(props) => props.scalingFactor});
  min-width: calc(40px * ${(props) => props.scalingFactor});
  height: calc(40px * ${(props) => props.scalingFactor});
  margin-right: ${spacing.xs};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`

export const MetaContainer = styled.div<MainProps>`
  margin-top: ${({ main }) => (main ? spacing.s : spacing.xs)};
  width: 100%;
`