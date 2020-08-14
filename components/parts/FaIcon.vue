<script>
export default {
  props: {
    icon: {
      required: true,
    },
    classes: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<template>
  <font-awesome-icon :class="classes" :icon="icon" />
</template>
