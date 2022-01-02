import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  if (router.isFallback) {
    return <p>Loading</p>
  }

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
              <Image key={`photo-${index}`} src={image.url} alt={place.name} width={1000} height={590} />
            ))}
          </SC.Gallery>
        </SC.Container>
      </SC.Wrapper>
    </>
  )
}

export default PlacesTemplate
