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
  <div class="h-full p-8 w-full flex flex-col items-center justify-center">
    <div class="sm:w-1/2 flex flex-col justify-center items-center">
      <Card :type="CardType.IMAGE" />
      <Card :type="CardType.TITLE" content="Daniel Hernández" />
    </div>
    <div class="w-4/5 md:w-1/2 flex flex-col justify-center items-center">
      <Card
        :type="CardType.INFO"
        content="Electronics engineering student and self taught developer with experience on Web, Mobile Apps, Games and Linux kernel development."
      />
    </div>
  </div>
</template>
