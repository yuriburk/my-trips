import { CloseOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'
import * as SC from './styles'

const AboutTemplate = () => (
  <SC.Container>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <SC.Heading>My Trips</SC.Heading>
    <SC.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </SC.Body>
  </SC.Container>
)

export default AboutTemplate
