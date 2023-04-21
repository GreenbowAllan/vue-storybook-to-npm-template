// This is the root file from where the package will be generated.
export { default as HelloWorld } from "./components/HelloWorld.vue";
export { default as HelloWorlds } from "./components/HelloWorlds.vue";
export { default as AtomButton } from "./components/atoms/button/AtomButton.vue";
export { default as AtomInput } from "./components/atoms/input/AtomInput.vue";
export { default as AtomIcon } from "./components/atoms/icon/AtomIcon.vue";
export { default as AtomTextArea } from "./components/atoms/textarea/AtomTextarea.vue";

// import static stylesheets so that rollup will inlcude this in the package
// note that scss variables need to be imported using the vite.config.ts
import "./styles/shared.css";
