<script>
import { CardType } from '@/types/objects.js'

import Card from '@/components/Card'

export default {
  name: 'Home',
  transition: 'load',
  head () {
    return {
      title: 'Daniel Hernández - Feinzer'
    }
  },
  components: {
    Card
  },
  data: () => ({
    CardType
  })
}
</script>

<template>
  <div class="absolute h-full w-full p-8 flex flex-col items-center justify-center">
    <div class="sm:w-3/4 flex flex-col justify-center items-center">
      <Card :type="CardType.IMAGE" />
      <Card :type="CardType.TITLE" content="Daniel Hernández" />
    </div>
    <div class="w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col justify-center items-center">
      <Card
        :type="CardType.INFO"
        content="Electronics engineering student and self taught developer with experience on Web, Mobile Apps, Games and Linux kernel development."
      />
    </div>
  </div>
</template>
