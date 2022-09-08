module.exports = {
  siteMetadata: {
    title: `harris-test-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('postcss-nested'),
          require('postcss-calc'),
          require('postcss-advanced-variables'),
          require('postcss-pxtorem'),
          require('postcss-mixins'),
          require('postcss-custom-media'),
        ]
      }
    },
  ]
};