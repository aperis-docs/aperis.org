/** @jsx jsx */

import { jsx, css } from '@emotion/react'
import React from 'react'
import { ItemTitle, PageTitle } from '@riboseinc/paneron-website-common/elements/misc'
import { Card, CardActionLinkExternal, CardActions, CardBody, CardHeader, CardStack } from '@riboseinc/paneron-website-common/elements/cards'
import { BIG_SCREEN_BREAKPOINT_PX } from '@riboseinc/paneron-website-common/ui-constants'
import styled from '@emotion/styled'


const UL = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
`

const Stack = styled(CardStack)`
  align-items: stretch !important;
  @media screen and (min-width: ${BIG_SCREEN_BREAKPOINT_PX}px) {
    width: 80vw;
    & > * { width: 100%; }
  }
`


export default function () {
  return (
    <React.Fragment>
      <PageTitle>
        Aperis
        <br />
        is&nbsp;an&nbsp;open&nbsp;project presentation&nbsp;site&nbsp;framework.
      </PageTitle>
      <Stack>
        <Card>
          <CardHeader>
            <ItemTitle>
              Goals
            </ItemTitle>
          </CardHeader>
          <CardBody allowWrap>
            <UL css={css`margin-bottom: 1rem;`}>
              <li>Unite related software and&nbsp;specifications under a project site</li>
              <li>Unite related projects under an organization/hub site</li>
              <li>News/blog feeds</li>
              <li>Semantic documentation authoring</li>
              <li>Easy deployments</li>
            </UL>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <ItemTitle>
              Get started
            </ItemTitle>
          </CardHeader>
          <CardBody allowWrap>
            <UL>
              <li>Download Paneron Desktop</li>
              <li>Start a dataset using Aperis extension</li>
            </UL>
          </CardBody>
          <CardActions>
            <CardActionLinkExternal href="https://www.paneron.org/">Go to Paneron.org</CardActionLinkExternal>
          </CardActions>
        </Card>
      </Stack>
    </React.Fragment>
  )
}
