import Vue from "vue";
import VueTailwind from "vue-tailwind";
import { TModal } from "vue-tailwind/dist/components";

const settings = {
  "t-modal": {
    component: TModal,
    props: {
      fixedClasses: {
        overlay:
          "z-40  overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50",
        wrapper: "relative mx-auto z-50 max-w-lg px-3 py-12",
        modal: "overflow-visible relative  rounded",
        body: "p-3",
        footer: " p-3 rounded-b",
        close:
          "flex items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
      },
      classes: {
        overlay: "bg-black  ",
        wrapper: "",
        modal: "",
        body: "p-3 bg-white rounded-lg ",
        header:
          "bg-transparent px-2 pb-3  font-bold  text-xl  bg-transparent  text-left  text-black",
        footer: "hidden ",
        close: "hidden ",
        closeIcon: "fill-current h-4 w-4",
        overlayEnterClass: "opacity-0",
        overlayEnterActiveClass: "transition ease-out duration-100",
        overlayEnterToClass: "opacity-100",
        overlayLeaveClass: "opacity-100",
        overlayLeaveActiveClass: "transition ease-in duration-75",
        overlayLeaveToClass: "opacity-0",
        enterClass: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveClass: "",
        leaveActiveClass: "",
        leaveToClass: "",
      },
      variants: {},
    },
  },
};

Vue.use(VueTailwind, settings);
