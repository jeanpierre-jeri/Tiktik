import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'lao41zcy',
  dataset: 'production',
  apiVersion: '2022-09-28',
  useCdn: false,
  token: process.env.SANITY_API_EDITOR_TOKEN
})
