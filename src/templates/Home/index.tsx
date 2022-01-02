import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="Website using Typescript, React, NextJS and Styled Components!"
        canonical="https://my-trips.burk.dev"
        openGraph={{
          url: 'https://my-trips.burk.dev',
          title: 'My Trips',
          description: 'Website using Typescript, React, NextJS and Styled Components!',
          images: [
            {
              url: 'https://my-trips.burk.dev/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
