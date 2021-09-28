require(`dotenv`).config();

module.exports = {
  pathPrefix: `/understanding-nfts`,
  siteMetadata: {
    siteTitle: `Understanding NFTs`,
    siteTitleAlt: `Understanding Non-fungible Tokens`,
    siteHeadline: `Understanding NFTs`,
    siteDescription: `A series of essays exploring NFTs in the selling of digital art and the underlying technology behind smart contracts.`,
    siteUrl: `https://usrrname.github.io/understanding-nfts`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@jenninat0r`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `blog`,
            slug: `/blog`,
          },
          {
            title: `about`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `twitter`,
            url: `https://twitter.com/jenninat0r`,
          },
          {
            name: `homepage`,
            url: `https://www.jennifer-chan.com`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        // If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
        // See: https://github.com/LekoArts/gatsby-themes/tree/master/examples/minimal-blog#changing-your-fonts
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Understanding NFTs - a minimal blog`,
        short_name: `minimal-blog`,
        description: `A minimal blog exploring NFTs`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ]
};
