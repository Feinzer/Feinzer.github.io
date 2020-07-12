<script>
export default {
  metaInfo: {
    title: 'Blog'
  },
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.posts = 
      this.$page.allPost.edges.sort((a, b) => 
        new Date(a.node.date).getTime() - new Date(b.node.date).getTime())
  }
}
</script>

<page-query>
query PostsQuery {
  allPost {
    edges {
      node {
        id
        path
        title
        author
        date
        thumbnail
      }
    }
  }
}
</page-query>

<template>
  <div class="p-16 flex flex-col items-center">
    <router-link
      :to="post.node.path"
      v-for="post in posts"
      :key="post.node.id"
      class="post-link w-3/4 h-32 mb-6 rounded-lg bg-fz-light-gray text-white flex flex-row hover:shadow-md"
    >
      <div class="thumbnail-outer w-64 h-32 overflow-hidden rounded-l-lg">
        <div
          :style="`background-image: url('${post.node.thumbnail}')`"
          class="thumbnail transition-transform duration-500 ease-out
                 h-32 bg-no-repeat bg-cover bg-center"
        />
      </div>
      <div class="p-6 w-4/5 flex flex-col justify-center items-stretch">
        <p class="text-2xl font-semibold">{{ post.node.title }}</p>
        <p class="text-gray-500">{{ post.node.author }}</p>
        <p class="text-xs pt-2 text-gray-400 self-end ">{{ post.node.date }}</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.thumbnail-outer:hover .thumbnail,
.post-link:hover .thumbnail {
  transform: scale(1.15);
}
</style>
