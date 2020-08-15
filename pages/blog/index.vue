<script>
import PostLink from '~/components/parts/PostLink'

export default {
  name: 'Blog',
  transition: 'load',
  head () {
    return {
      title: 'Blog - Feinzer'
    }
  },
  components: {
    PostLink
  },
  async asyncData({ $content }) {
    const posts = await $content('/blog').fetch()
    return { posts }
  },
}
</script>

<template>
  <div class="p-8 flex flex-col items-center">
    <PostLink 
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
    />
  </div>
</template>