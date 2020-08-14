<script>
export default {
  name: 'Home',
  async asyncData({ $content }) {
    const posts = await $content('/blog').fetch()
    return { posts }
  },
}
</script>

<template>
  <div>
  </div>
</template>
