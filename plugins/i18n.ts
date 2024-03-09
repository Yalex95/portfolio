import Cookie from "cookie-universal";
import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import es from "../locales/es.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const $cookies = Cookie();
  let locale = $cookies.get("locale");

  if (!locale) {
    $cookies.set("locale", "en");
    locale = "en";
  }
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: locale,
    fallbackLocale: "en",
    messages: {
      en,
      es,
    },
  });

  vueApp.use(i18n);
});
