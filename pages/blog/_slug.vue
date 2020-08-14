<script>
export default {
  name: 'PostTemplate',
  async asyncData({$content, redirect, params}) {
    const post = await $content('/blog', params.slug)
      .fetch()
      .catch(() => {
        console.error(`${ params.slug } not found`)
        redirect('/')
      })
    return { post }
  },
  head() {
    return {
      title: this.post.title
    }
  }
}
</script>

<template>
  <nuxt-content :document="post" />
</template>