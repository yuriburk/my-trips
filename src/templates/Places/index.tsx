import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import { NextSeo } from 'next-seo'

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
      text: string
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
      <NextSeo
        title={`${place.name} - My Trips`}
        description={place.description?.text}
        canonical="https://my-trips.burk.dev"
        openGraph={{
          url: 'https://my-trips.burk.dev',
          title: `${place.name} - My Trips`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: place.name
            }
          ],
          site_name: 'My Trips'
        }}
      />
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
