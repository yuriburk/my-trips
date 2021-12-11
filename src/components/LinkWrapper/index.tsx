import React from 'react'
import Link from 'next/link'

import * as SC from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return (
    <SC.Container>
      <Link href={href}>{children}</Link>
    </SC.Container>
  )
}

export default LinkWrapper
