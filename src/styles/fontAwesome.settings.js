import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEllipsisH,
  faSearch,
  faEllipsisV,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEllipsisH);
library.add(faEllipsisV);
library.add(faSearch);
library.add(faSmile);
Vue.component("font-awesome-icon", FontAwesomeIcon);
