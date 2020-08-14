<script>
export default {
  name: 'PostLink',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <nuxt-link
    :to="`/blog/${ post.slug }`"
    class="post-link w-3/4 h-32 mb-6 rounded-lg bg-fz-light-gray text-white flex flex-row hover:shadow-md"
  >
    <div class="thumbnail-outer w-64 h-32 overflow-hidden rounded-l-lg">
      <div
        :style="`background-image: url(${require('../assets/images/blog/' + post.thumbnail)})`"
        class="thumbnail transition-transform duration-500 ease-out h-32 bg-no-repeat bg-cover bg-center"
      />
    </div>
    <div class="p-6 w-4/5 flex flex-row items-center justify-between">
      <div class="w-full pl-3">
        <p class="text-2xl font-semibold">{{ post.title }}</p>
        <p class="text-gray-500">{{ post.author }}</p>
      </div>
      <p
        class="text-xs pt-2 pr-2 text-gray-400 whitespace-no-wrap self-end"
      >
        {{ post.date }}
      </p>
    </div>
  </nuxt-link>
</template>