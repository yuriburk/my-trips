import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import client, { GET_PAGES, GET_PAGE_BY_SLUG } from 'clients/graphql'
import PageTemplate, { PageTemplateProps } from 'templates/Page'
import { GetPageBySlugQuery, GetPagesQuery } from 'clients/graphql/generated/graphql'

export default function AboutPage({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading</p>
  }

  return <PageTemplate heading={heading} body={body} />
}

export const getStaticPaths = async () => {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 5 })

  return { paths: pages.map(({ slug }) => ({ params: { slug } })), fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, { slug: params?.slug })
  if (!page) {
    return { notFound: true }
  }

  return { props: { heading: page.heading, body: page.body.html } }
}
