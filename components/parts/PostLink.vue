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
    class="post-link flex flex-col md:flex-row w-full md:w-3/4 md:h-48 mb-6 rounded-lg bg-fz-light-gray text-white hover:shadow-md"
  >
    <div class="thumbnail-outer w-full md:w-72 h-64 md:h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
      <div
        :style="`background-image: url(${require('~/assets/images/blog/' + post.thumbnail)})`"
        class="thumbnail h-full transition-transform duration-500 ease-out bg-no-repeat bg-cover bg-center"
      />
    </div>
    <div class="p-4 w-full h-full flex flex-col md:items-center justify-between">
      <div class="pl-3 pt-3 flex flex-col justify-between h-full w-full">
        <div>
          <p class="text-2xl font-semibold mb-3">{{ post.title }}</p>
          <p>{{ post.description }}</p>
        </div>
        <p class="text-sm pt-2 text-gray-500">{{ post.author }}</p>
      </div>
      <p class="text-xs my-2 pr-2 text-gray-500 whitespace-no-wrap self-end">
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
