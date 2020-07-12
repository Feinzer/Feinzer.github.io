<script>
export default {
  name: 'Circles'
}
</script>

<template>
  <div class="circles fixed overflow-hidden w-screen h-screen">
    <div
      id="circle1"
      class="fixed rounded-full shadow-xl bg-fz-light-gray"
    ></div>
    <div
      id="circle2"
      class="fixed rounded-full shadow-xl bg-fz-light-gray"
    ></div>
    <div
      id="circle3"
      class="fixed rounded-full shadow-xl bg-fz-light-gray"
    ></div>
    <div
      id="circle4"
      class="fixed rounded-full shadow-xl bg-fz-light-gray"
    ></div>
    <div
      id="circle5"
      class="fixed rounded-full shadow-xl bg-fz-light-gray"
    ></div>
    <div
      id="circle6"
      class="fixed rounded-full shadow-xl bg-fz-light-gray"
    ></div>
  </div>
</template>

<style>
#circle1 {
  width: 30vw;
  height: 30vw;
  right: -12vw;
  bottom: -12vw;
}

#circle2 {
  width: 18vw;
  height: 18vw;
  bottom: -6vw;
  left: -6vw;
}

#circle3 {
  width: 35vw;
  height: 35vw;
  top: 35vw;
  left: -18vw;
}

#circle4 {
  width: 24vw;
  height: 24vw;
  top: -13vw;
  left: 55vw;
}

@media screen and (min-width: 768px) {
  #circle1 {
    width: 20vw;
    height: 20vw;
    right: -10vw;
    top: 5vw;
  }

  #circle2 {
    width: 18vw;
    height: 18vw;
    bottom: -6vw;
    left: -6vw;
  }

  #circle3 {
    width: 15vw;
    height: 15vw;
    top: 12vw;
    left: 10vw;
  }

  #circle4 {
    width: 16vw;
    height: 16vw;
    top: -8vw;
    left: 30vw;
  }

  #circle5 {
    width: 14vw;
    height: 14vw;
    bottom: -7vw;
    right: 5vw;
  }

  #circle6 {
    width: 8vw;
    height: 8vw;
    top: 14vw;
    right: 25vw;
  }
}
</style>
