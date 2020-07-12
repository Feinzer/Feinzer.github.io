<template>
  <Layout class="absolute h-screen p-8 w-full flex flex-col items-center justify-center">
    <div class="sm:w-1/2 flex flex-col justify-center items-center">
      <Card :type="this.CardType.IMAGE" />
      <Card :type="this.CardType.TITLE" :content="owner.name" />
    </div>
    <div class="sm:w-1/2 flex flex-col justify-center items-center">
      <Card
        :type="this.CardType.INFO"
        content="Electronics engineering student and self taught developer with experience on Web, Mobile Apps, Games and Linux kernel development."
        class="w-2/3"
      />
    </div>
  </Layout>
</template>

<script>
import { CardType } from '@/types/objects.js'

import Card from '@/components/Card.vue'

export default {
  metaInfo: {
    title: 'Daniel Hernández'
  },
  components: {
    Card
  },
  data() {
    return {
      CardType,
      owner: {
        name: 'Daniel Hernández'
      }
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
