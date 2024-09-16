import googleIt from 'google-it'

export async function GoogleSearch(query) {
  try {
    const results = await googleIt({ query })
    return {
      Creator: 'Astro',
      status: 200,
      results,
    }
  } catch (error) {
    // console.error('Error performing Google search:', error)
    return {
      Creator: 'Astro',
      status: 500,
      error: 'Failed to perform search',
    }
  }
}
