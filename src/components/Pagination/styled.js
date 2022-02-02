import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { ArrowLeft } from "@styled-icons/bootstrap/ArrowLeft"
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight"

export const PaginationWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`

export const PaginationLink = styled(AniLink)`
  align-items: center;
  display: flex;
  text-decoration: none;
`

export const ArrowLeftIcon = styled(ArrowLeft)`
  color: var(--primary-link-color);
  width: 20px;
  margin-right: 15px;
`
export const ArrowRightIcon = styled(ArrowRight)`
  color: var(--primary-link-color);
  width: 20px;
  margin-left: 15px;
`