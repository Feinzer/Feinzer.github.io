<script>
import { FormatDate } from '~/plugins/tools'

export default {
  name: 'PostLink',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    FormatDate
  }
}
</script>

<template>
  <nuxt-link
    :to="`blog/${post.slug}`"
    class="post-link flex flex-col md:flex-row w-full md:w-3/4 md:h-32 mb-6 rounded-lg bg-fz-light-gray text-white hover:shadow-md"
  >
    <div class="thumbnail-outer w-full md:w-64 h-48 md:h-32 overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
      <div
        :style="`background-image: url(${require('~/assets/images/blog/' + post.thumbnail)})`"
        class="thumbnail h-full transition-transform duration-500 ease-out bg-no-repeat bg-cover bg-center"
      />
    </div>
    <div class="p-4 w-full flex flex-col md:flex-row md:items-center justify-between">
      <div class="pl-3">
        <p class="text-2xl font-semibold">{{ post.title }}</p>
        <p class="text-sm mt-2 text-gray-500">{{ post.author }}</p>
      </div>
      <p class="text-xs pt-2 pr-2 text-gray-500 whitespace-no-wrap self-end">
        {{ FormatDate(post.createdAt) }}
      </p>
    </div>
  </nuxt-link>
</template>

<style scoped>
.thumbnail-outer:hover .thumbnail,
.post-link:hover .thumbnail {
  transform: scale(1.15);
}
</style>
