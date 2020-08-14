<script>
import Navigation from '~/components/Navigation'

export default {
  name: 'DefaultLayout',
  components: {
    Navigation
  }
}
</script>

<template>
  <div>
    <Navigation /> 
    <Nuxt />
  </div>
</template>
