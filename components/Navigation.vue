<script>
import {
  faEnvelope,
  faInfoCircle,
  faHome,
  faCode,
  faBlog,
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

import Logo from '~/components/Logo'
import FaIcon from '~/components/parts/FaIcon'

export default {
  name: 'Navigation',
  components: {
    Logo,
    FaIcon,
  },
  data: () => ({
    navOpen: false,
    routeLinks: [
      {
        title: 'Home',
        url: '/',
        icon: faHome,
      },
      {
        title: 'Projects',
        url: '/projects',
        icon: faCode,
      },
      {
        title: 'Blog',
        url: '/blog',
        icon: faBlog,
      },
      {
        title: 'About',
        url: '/about',
        icon: faInfoCircle,
      },
    ],
    socialLinks: [
      {
        icon: faInstagram,
        url: 'https://www.instagram.com/feinzer/',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/Foinzer/',
      },
      {
        icon: faGithub,
        url: 'https://github.com/Feinzer/',
      },
      {
        icon: faEnvelope,
        url: 'mailto:danhernan23i@gmail.com',
      },
    ],
  }),
  watch: {
    '$route' () {
      this.navOpen = false
    }
  }
}
</script>

<template>
  <div id="navigation">
    <transition name="fade">
      <span
        @click="navOpen = !navOpen"
        v-show="navOpen"
        class="overlay fixed z-40 md:hidden bg-black top-0 bottom-0 left-0 right-0"
      />
    </transition>
    <transition name="slide">
      <div
        v-show="navOpen"
        class="side-nav absolute z-50 md:hidden text-white w-full sm:w-2/4"
      >
        <div class="flex flex-col w-full px-5">
          <nuxt-link
            v-for="(routeLink, index) in routeLinks"
            :key="index"
            :to="routeLink.url"
            class="flex flex-row items-center mb-4 py-5 pl-10 bg-fz-dark-gray rounded shadow-sm"
          >
            <FaIcon :icon="routeLink.icon" />
            <p class="font-semibold tracking-widest ml-4">
              {{ routeLink.title }}
            </p>
          </nuxt-link>
          <div class="mt-6 flex flex-row justify-around">
            <a
              v-for="(socialLink, index) in socialLinks"
              :key="index"
              :href="socialLink.url"
              target="_blank"
              class="p-4 bg-fz-dark-gray rounded-full shadow-sm flex items-center"
            >
              <FaIcon :icon="socialLink.icon" classes="fa-lg" />
            </a>
          </div>
        </div>
      </div>
    </transition>
    <div
      class="z-10 px-8 py-4 w-full flex justify-between items-center text-white"
    >
      <div class="flex flex-row items-center">
        <div class="mr-6 cursor-pointer md:hidden" @click="navOpen = !navOpen">
          <svg viewBox="0 0 20 20" fill="currentColor" class="w-10 h-10">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <Logo class="mr-4" />
        <div class="hidden md:flex flex-row">
          <nuxt-link
            v-for="(routeLink, index) in routeLinks"
            :key="index"
            :to="routeLink.url"
            class="font-bold nav-link hover:text-fz-green mx-1"
          >
            {{ routeLink.title }}
          </nuxt-link>
        </div>
      </div>
      <div class="hidden md:flex flex-row w-1/4 justify-between">
        <a
          v-for="(socialLink, index) in socialLinks"
          :key="index"
          :href="socialLink.url"
          target="_blank"
          class="hover:text-fz-green transition-colors duration-150"
        >
          <FaIcon :icon="socialLink.icon" classes="fa-2x" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap';

#navigation {
  font-family: 'Montserrat', sans-serif;
}

.side-nav {
  top: 6rem;
}

.overlay {
  opacity: 0.9;
}

.slide-enter-active,
.slide-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-duration: 250ms;
}

.slide-enter {
  opacity: 0;
  transform: translateY(-1rem);
}

.slide-leave-active {
  opacity: 0;
  transform: translateY(-1rem);
}

.fade-enter {
  opacity: 0;
}
.fade-leave-active {
  opacity: 0;
}

.nav-link {
  display: inline-block;
  color: #fff;
  letter-spacing: 3px;
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
.nuxt-link-exact-active {
  color: #77ff85;
}
.nuxt-link-exact-active:after {
  width: 100%;
  opacity: 1;
}
</style>
