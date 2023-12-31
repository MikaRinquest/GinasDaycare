import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { MotionPlugin } from "@vueuse/motion";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//Import fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
//Component allows us to call the icons from fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//This imports which kind of icons we can use
// import { fas } from "@fortawesome/free-solid-svg-icons"; //This only lets us use solid icons (free version)
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faCopyright,
  faX,
  faBars,
} from "@fortawesome/free-solid-svg-icons"; //This only lets us use solid icons (free version)
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; //This only lets us use brand icons (free version)

library.add(
  faPhone,
  faEnvelope,
  faTwitter,
  faLocationDot,
  faClock,
  faCopyright,
  faX,
  faBars
);

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(MotionPlugin)
  .use(VueSweetalert2)
  .mount("#app");
