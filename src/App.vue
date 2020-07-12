<script>
import Navigation from '~/components/Navigation.vue'
import Circles from '~/components/parts/Circles.vue'
import Diamonds from '~/components/parts/Diamonds.vue'

export default {
  name: 'App',
  metaInfo() {
    return {
      title: this.$static.metadata.siteName
    }
  },
  components: {
    Navigation,
    Circles,
    Diamonds
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<template>
  <div>
    <Circles />
    <Diamonds />
    <div class="relative flex flex-col">
      <Navigation />
      <transition name="load">
        <router-view class="route-body" />
      </transition>
    </div>
  </div>  
</template>

<style>
@import 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap';

.route-body {
  transform: translateY(-0.5rem);
}

.load-enter-active,
.load-leave-active {
  transition-property: all;
  transition-duration: 150ms;
}

.load-enter {
  transform: translateY(0rem);
  opacity: 0;
}

.load-enter-active {
  transition-delay: 150ms;
}

.load-leave-active {
  transform: translateY(0rem);
  opacity: 0;
}
</style>
