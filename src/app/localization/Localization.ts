import i18n from 'i18next';
import LanguageDetector from './LanguageDetector';
import {logError} from 'utils/Logger';

export default {
  initAsync: async (resources: any) => {
    try {
      const language = LanguageDetector.getCurrentLocale();
      if (!language) {
        if (__DEV__) {
          // noinspection ExceptionCaughtLocallyJS
          throw new Error("Can't detect language");
        }
      }

      await i18n.init({
        resources,
        fallbackLng: 'en',
        lng: language,
        keySeparator: false,
      });
    } catch (e) {
      logError(e);
    }
  },
};
