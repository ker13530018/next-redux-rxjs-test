// next.config.js
const env = process.env.NODE_ENV || 'develop'
module.exports = (phase, { defaultConfig }) => {
  console.log('env =>', env)
  /* config options here */
  if (env === 'develop') {
    return {
      /* development only config options here */
      serverRuntimeConfig: {
        API_URL: 'http://localhost:3000/api',
      },
      publicRuntimeConfig: {
        API_URL: 'http://localhost:3000/api',
      },
    }
  }

  return {
    /* config options for all phases except development here */
    serverRuntimeConfig: {
      API_URL: 'http://localhost:3000/api',
    },
    publicRuntimeConfig: {
      API_URL: 'http://localhost:3000/api',
    },
  }
}
