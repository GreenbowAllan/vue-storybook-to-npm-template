import LearnVueButton from "./components/LearnVueButton.vue";

export default {
  install: (app: any, _options: any) => {
    app.component("LearnVueButton", LearnVueButton);
  },
};
