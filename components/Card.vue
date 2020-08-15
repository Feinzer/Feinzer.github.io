<script>
import { CardType } from '@/types/objects.js'

export default {
  name: 'Card',
  props: {
    type: Number,
    content: String
  },
  data() {
    return {
      CardType
    }
  },
  computed: {
    cardClass() {
      if (this.type === CardType.IMAGE)
        return 'w-40 h-40 rounded-full flex flex-col items-center justify-center'
      else if (this.type === CardType.TITLE)
        return 'py-3 px-6 rounded-full font-semibold'
      else if (this.type === CardType.INFO) return 'card py-8 px-4'
    }
  },
}
</script>

<template>
  <div
    :class="this.cardClass"
    class="bg-fz-light-gray text-center text-white my-2 shadow-md"
  >
    <div v-if="this.type === this.CardType.IMAGE" class="photo rounded-full" />
    <p v-else>{{ content }}</p>
  </div>
</template>

<style scoped>
.card {
  border-radius: 1.5rem !important;
}

.photo {
  background-image: url('../assets/images/photo.jpg');
  background-position: 50% 35%;
  background-size: 140%;
  width: 9rem;
  height: 9rem;
}
</style>
