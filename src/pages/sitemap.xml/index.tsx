import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import client from 'clients/graphql'
import { GetPlacesQuery } from 'clients/graphql/generated/graphql'
import { GET_PLACES } from 'clients/graphql/queries'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  const fields = places.map(({ slug }) => ({
    loc: `https://my-trips.burk.dev/${slug}`,
    lastmod: new Date().toISOString()
  }))

  fields.push(
    {
      loc: 'https://my-trips.burk.dev',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://my-trips.burk.dev/about',
      lastmod: new Date().toISOString()
    }
  )

  return getServerSideSitemap(ctx, fields)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
