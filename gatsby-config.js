require(`dotenv`).config();

module.exports = {
  pathPrefix: `/understanding-nfts`,
  siteMetadata: {
    siteTitle: `Understanding NFTs`,
    siteTitleAlt: `Understanding Non-fungible Tokens`,
    siteHeadline: `Understanding NFTs`,
    siteDescription: `A series of essays exploring NFTs in the selling of digital art and the underlying technology behind smart contracts.`,
    siteUrl: `https://usrrname.github.io/understanding-nfts`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    author: `@jenninat0r`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        blogPath: `/essays`,
        navigation: [
          {
            title: `essays`,
            slug: `/essays`,
          },
          {
            title: `about`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `@jenninat0r`,
            url: `https://twitter.com/jenninat0r`,
          },
          {
            name: `🎨`,
            url: `https://www.jennifer-chan.com`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`http://fonts.cdnfonts.com/css/gilroy-bold?styles=20880`],
        interval: 300,
        timeout: 30000,
        custom: [
          {
            name: ["Gilroy"],
            file: "/fonts/gilroy.css",
          },
        ],
        web: [
          {
            name: `Gilroy`,
            file: `http://fonts.cdnfonts.com/css/gilroy-bold?styles=20880`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        interval: 300,
        timeout: 30000,
        custom: [
          {
            name: ["Guardian Sans"],
            file: "/fonts/guardian-sans.css",
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          'gatsby-remark-numbered-footnotes',
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
  ]
};
