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
    const posts = await $content('/blog')
      .sortBy('createdAt')
      .fetch()
    return { posts }
  },
}
</script>

<template>
  <div class="p-8 flex flex-col items-center justify-center w-full lg:w-5/6 self-center">
    <PostLink 
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
    />
  </div>
</template>