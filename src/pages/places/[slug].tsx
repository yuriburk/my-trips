import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import client, { GET_PLACES, GET_PLACE_BY_SLUG } from 'clients/graphql'
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'clients/graphql/generated/graphql'
import PlacesTemplate, { PlacesTemplateProps } from 'templates/Places'

export default function PlacePage({ place }: PlacesTemplateProps) {
  const router = useRouter()
  if (router.isFallback) {
    return <p>Loading</p>
  }

  return <PlacesTemplate place={place} />
}

export const getStaticPaths = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, { first: 5 })

  return { paths: places.map(({ slug }) => ({ params: { slug } })), fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(GET_PLACE_BY_SLUG, { slug: params?.slug })
  if (!place) {
    return { notFound: true }
  }

  return { props: { place } }
}
