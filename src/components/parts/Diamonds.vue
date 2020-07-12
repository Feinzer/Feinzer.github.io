<script>
export default {
  name: 'Diamonds'
}
</script>

<template>
  <div class="diamonds fixed overflow-hidden w-screen h-screen">
    <div id="diamond1" class="diamond fixed"></div>
    <div id="diamond2" class="diamond fixed"></div>
    <div id="diamond3" class="diamond fixed"></div>
    <div id="diamond4" class="diamond fixed invisible sm:visible"></div>
    <div id="diamond5" class="diamond fixed invisible sm:visible"></div>
    <div id="diamond6" class="diamond fixed"></div>
  </div>
</template>

<style scoped>
.diamonds {
  --d1-Width: 0.75rem;
  --d1-NWidth: -0.75rem;
  --d1-2xWidth: 1.5rem;

  --d2-Width: 1rem;
  --d2-NWidth: -1rem;
  --d2-2xWidth: 2rem;

  --d3-Width: 1rem;
  --d3-NWidth: -1rem;
  --d3-2xWidth: 2rem;

  --d4-Width: 0.5rem;
  --d4-NWidth: -0.5rem;
  --d4-2xWidth: 1rem;

  --d5-Width: 1rem;
  --d5-NWidth: -1rem;
  --d5-2xWidth: 2rem;

  --d6-Width: 0.5rem;
  --d6-NWidth: -0.5rem;
  --d6-2xWidth: 1rem;
}

.diamond {
  width: 0;
  height: 0;
  border-style: solid;
  border-bottom-style: solid;
  border-color: transparent;
  border-bottom-color: #77ff85;
  position: relative;
}
.diamond:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-style: solid;
  border-color: transparent;
  border-top-color: #77ff85;
}

#diamond1 {
  left: 40vw;
  top: 15vh;
  border-width: var(--d1-Width);
  border-bottom-width: var(--d1-2xWidth);
}
#diamond1:after {
  left: var(--d1-NWidth);
  border-width: var(--d1-Width);
  top: var(--d1-2xWidth);
  border-top-width: var(--d1-2xWidth);
}

#diamond2 {
  left: 8vw;
  top: 40vh;
  border-width: var(--d2-Width);
  border-bottom-width: var(--d2-2xWidth);
}
#diamond2:after {
  left: var(--d2-NWidth);
  border-width: var(--d2-Width);
  top: var(--d2-2xWidth);
  border-top-width: var(--d2-2xWidth);
}

#diamond3 {
  left: 40vw;
  top: 74vh;
  border-width: var(--d3-Width);
  border-bottom-width: var(--d3-2xWidth);
}
#diamond3:after {
  left: var(--d3-NWidth);
  border-width: var(--d3-Width);
  top: var(--d3-2xWidth);
  border-top-width: var(--d3-2xWidth);
}

#diamond4 {
  left: 60vw;
  top: -1vh;
  border-width: var(--d4-Width);
  border-bottom-width: var(--d4-2xWidth);
}
#diamond4:after {
  left: var(--d4-NWidth);
  border-width: var(--d4-Width);
  top: var(--d4-2xWidth);
  border-top-width: var(--d4-2xWidth);
}

#diamond5 {
  left: 70vw;
  top: 30vh;
  border-width: var(--d5-Width);
  border-bottom-width: var(--d5-2xWidth);
}
#diamond5:after {
  left: var(--d5-NWidth);
  border-width: var(--d5-Width);
  top: var(--d5-2xWidth);
  border-top-width: var(--d5-2xWidth);
}

#diamond6 {
  left: 90vw;
  top: 50vh;
  border-width: var(--d6-Width);
  border-bottom-width: var(--d6-2xWidth);
}
#diamond6:after {
  left: var(--d6-NWidth);
  border-width: var(--d6-Width);
  top: var(--d6-2xWidth);
  border-top-width: var(--d6-2xWidth);
}
</style>
