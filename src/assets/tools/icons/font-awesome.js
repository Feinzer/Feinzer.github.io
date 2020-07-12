import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faInstagram,
  faTwitter,
  faGithub,
  faGitlab
} from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faTwitter, faGithub, faGitlab)

Vue.component('fa-icon', FontAwesomeIcon)
