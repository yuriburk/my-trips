import { CloseOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'
import * as SC from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <SC.Container>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <SC.Heading>{heading}</SC.Heading>
    <SC.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </SC.Body>
  </SC.Container>
)

export default PageTemplate
