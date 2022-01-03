import client, { GET_PLACES } from 'clients/graphql'
import { GetPlacesQuery } from 'clients/graphql/generated/graphql'
import { MapProps } from 'components/Map'
import HomeTemplate from 'templates/Home'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    props: { places, revalidate: 10 }
  }
}
