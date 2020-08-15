<script>
export default {
  name: 'PostTemplate',
  transition: 'load',
  head() {
    return {
      title: this.post.title + ' - Feinzer'
    }
  },
  async asyncData({$content, redirect, params}) {
    const post = await $content('/blog', params.slug)
      .fetch()
      .catch(() => {
        console.error(`${ params.slug } not found`)
        redirect('/')
      })
    return { post }
  }
}
</script>

<template>
  <nuxt-content :document="post" />
</template>