<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<page-query>
query currentPost($id: ID!) {
  post(id: $id) {
    title
    author
    date
  }
}
</page-query>

<template>
  <div class="post m-10 flex flex-col p-8 shadow bg-fz-light-gray rounded-lg text-white">
    <div class="flex flex-row items-center w-full pb-5">
      <p class="post-title w-full text-center tracking-wider text-5xl font-medium self-center">
        {{ $page.post.title }}
      </p>
      <router-link
        to="/blog"
        class="absolute right-0 h-8 w-8 mr-16 p-2
               text-fz-dark-gray mx-2 bg-fz-green rounded-full shadow
               transition-transform duration-200 transform hover:scale-105"
      >
        <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </router-link>
    </div>
    <div class="markdown-body pt-3 pb-8 px-6">
      <VueRemarkContent />
    </div>
    <div class="self-end">
      <p class="post-author text-sm font-medium text-gray-500">{{ $page.post.author }}</p>
      <p class="post-author text-xs text-gray-500 self-end">{{ $page.post.date }}</p>
    </div>
  </div>
</template>

<style>
@import '../assets/styles/fz-markdown.css';

.post-title,
.post-author,
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  font-family: 'Montserrat', sans-serif;
}
</style>
