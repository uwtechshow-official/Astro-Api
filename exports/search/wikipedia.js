import fetch from 'node-fetch'

export async function wikipedia(query) {
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json`
  const articleUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=&explaintext=&titles=`

  try {
    // Fetch search results
    const searchResponse = await fetch(apiUrl)
    const searchData = await searchResponse.json()

    if (searchData.query.search.length === 0) {
      return null
    }

    // Filter results to include only titles
    const filteredResults = searchData.query.search.map((item) => ({ title: item.title }))

    // Randomly select one title from the filtered results
    const randomIndex = Math.floor(Math.random() * filteredResults.length)
    const selectedTitle = filteredResults[randomIndex].title

    // Fetch the article extract based on the selected title
    const articleResponse = await fetch(`${articleUrl}${encodeURIComponent(selectedTitle)}&format=json`)
    const articleData = await articleResponse.json()

    const pages = articleData.query.pages
    const pageId = Object.keys(pages)[0]
    const articleExtract = pages[pageId].extract

    return {
      title: selectedTitle,
      description: articleExtract, // Changed 'extract' to 'description'
    }
  } catch (error) {
    console.error('Error fetching Wikipedia data:', error)
    return null
  }
}
