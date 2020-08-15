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
  <div class="post m-3 md:m-10 flex flex-col py-6 md:p-6 shadow bg-fz-light-gray rounded-lg text-white">
    <div class="flex flex-row items-center justify-between w-full px-8 md:px-4 pb-10">
      <span />
      <p class="post-title text-center tracking-wider text-4xl md:text-5xl font-medium">
        {{ post.title }}
      </p>
      <button
        @click="$router.push('/blog')"
        class="h-8 w-8 p-2
              text-fz-dark-gray bg-fz-green rounded-full shadow
              transition-transform duration-200 transform hover:scale-105"
      >
        <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
    <div class="pt-3 pb-16 px-6">
      <nuxt-content :document="post" />
    </div>
    <div class="self-end px-6 md:px-0">
      <p class="post-author text-sm font-medium text-gray-500">{{ post.author }}</p>
      <p class="post-author text-xs text-gray-500 self-end">{{ post.date }}</p>
    </div>
  </div>
</template>
