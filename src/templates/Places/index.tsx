import React from 'react'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'
import * as SC from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
    }
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>
      <SC.Wrapper>
        <SC.Container>
          <SC.Heading>{place.name}</SC.Heading>
          {place.description && <SC.Body dangerouslySetInnerHTML={{ __html: place.description.html }} />}
          <SC.Gallery>
            {place.gallery.map((image, index) => (
              <img key={`photo-${index}`} src={image.url} alt={place.name} />
            ))}
          </SC.Gallery>
        </SC.Container>
      </SC.Wrapper>
    </>
  )
}

export default PlacesTemplate
