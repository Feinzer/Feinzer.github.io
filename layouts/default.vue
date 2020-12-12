<script>
export default {
  name: 'DefaultLayout'
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Circles class="z-10" />
    <Diamonds class="z-20" />
    <Navigation class="relative z-40" /> 
    <Nuxt class="z-30" />
  </div>
</template>
