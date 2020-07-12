// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Feinzer',
  plugins: [
    { use: 'gridsome-plugin-tailwindcss' },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './content/blog/posts',
        pathPrefix: '/blog',
        template: './src/templates/Post.vue'
      }
    }
  ]
}
