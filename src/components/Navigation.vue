<script>
export default {
  name: 'Navigation'
}
</script>

<template>
  <nav
    class="z-10 px-8 py-4 w-full flex justify-between items-center text-white"
  >
    <div class="logo text-5xl font-bold flex flex-row">
      <span>F</span>
      <span class="text-fz-green">z</span>
    </div>
    <div
      class="links font-bold mx-auto md:ml-10 text-center md:text-left text-base flex flex-col md:flex-row"
    >
      <router-link class="nav-link hover:text-fz-green mx-2" to="/">
        Home
      </router-link>
      <router-link class="nav-link hover:text-fz-green mx-2" to="/projects">
        Projects
      </router-link>
      <router-link class="nav-link hover:text-fz-green mx-2" to="/blog">
        Blog
      </router-link>
      <router-link class="nav-link hover:text-fz-green mx-2" to="/about">
        About
      </router-link>
    </div>
    <div class="social z-10 text-3xl sm:text-3xl flex flex-col sm:flex-row">
      <a
        href="https://www.instagram.com/feinzer/"
        class="icon transition-colors duration-150 hover:text-fz-green sm:ml-8 sm:mb-0"
      >
        <fa-icon :icon="['fab', 'instagram']" />
      </a>
      <a
        href="https://twitter.com/Foinzer/"
        class="icon transition-colors duration-150 hover:text-fz-green sm:ml-8 sm:mb-0"
      >
        <fa-icon :icon="['fab', 'twitter']" />
      </a>
      <a
        href="https://github.com/Feinzer/"
        class="icon transition-colors duration-150 hover:text-fz-green sm:ml-8 sm:mb-0"
      >
        <fa-icon :icon="['fab', 'github']" />
      </a>
      <a
        href="https://gitlab.com/Feinzer/"
        class="icon transition-colors duration-150 hover:text-fz-green sm:ml-8 sm:mb-0"
      >
        <fa-icon :icon="['fab', 'gitlab']" />
      </a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  font-family: 'Montserrat', sans-serif;
}

.nav-link {
  display: inline-block;
  color: #fff;
  letter-spacing: 5px;
  text-transform: uppercase;
  position: relative;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  padding: 15px;
  outline: 0;
}

.nav-link:after {
  content: '';
  position: absolute;
  height: 2px;
  background-color: #77ff85;
  opacity: 0;
  width: 0;
  left: 50%;
  bottom: 0;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-transition: 200ms ease all;
  transition: 200ms ease all;
}

.nav-link:hover:after {
  width: 100%;
  opacity: 1;
}

.router-link-exact-active {
  color: #77ff85;
}

.router-link-exact-active:after {
  width: 100%;
  opacity: 1;
}
</style>
