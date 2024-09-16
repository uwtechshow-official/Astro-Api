import axios from 'axios'

const NPM_REGISTRY_URL = 'https://registry.npmjs.org/'

async function npmStalk(packageName) {
  if (!packageName) {
    throw new Error('NPM package name is required.')
  }

  try {
    const response = await axios.get(`${NPM_REGISTRY_URL}${packageName}`)
    const packageData = response.data

    const packageDetails = {
      name: packageData.name,
      version: packageData['dist-tags']?.latest || 'N/A',
      description: packageData.description,
      author: packageData.author?.name || 'N/A',
      license: packageData.license,
      homepage: packageData.homepage || 'N/A',
      repository: packageData.repository?.url || 'N/A',
      keywords: packageData.keywords || [],
      dependencies: packageData.dependencies || {},
      maintainers: packageData.maintainers.map((maintainer) => maintainer.name),
      createdAt: packageData.time?.created || 'N/A',
      updatedAt: packageData.time?.modified || 'N/A',
      versions: Object.keys(packageData.versions || {}),
    }

    return packageDetails
  } catch (error) {
    console.error('Error fetching package data:', error)
    throw new Error('Failed to fetch package data from npm.')
  }
}

export { npmStalk }
