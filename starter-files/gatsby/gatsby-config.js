// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Slicks Slice',
    siteUrl: 'https://gatsby.pizza',
    description: 'Best Pizza in Tampa',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // This is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '21hy9mek',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANTIY_TOKEN,
      },
    },
  ],
};
