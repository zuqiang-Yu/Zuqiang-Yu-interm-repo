# Implementing Localisation (i18n) with react-i18next

## How does react-i18next handle translations?

react-i18next stores all translated strings in JSON files — one file per language — where each entry maps a stable key to the translated text for that locale. At app startup you initialise i18next with a language detector (which reads the device's system locale by default) and the set of translation resources, then call `I18nextProvider` to make the instance available throughout the component tree. Inside any component, the `useTranslation()` hook returns a `t` function; calling `t('key')` looks up and returns the correct string for the active language, and calling `i18n.changeLanguage('zh')` at runtime switches every `t()` call in the app simultaneously without a reload.

## What challenges arise when localising a React Native app?

Translated strings vary significantly in length — a phrase that fits neatly in English may be considerably longer in German or shorter in Chinese, causing fixed-width layouts to overflow or look sparse. Languages such as Arabic and Hebrew are written right-to-left, which requires the entire layout to be mirrored; React Native has RTL support but it must be explicitly enabled and tested. Date, number, and currency formats differ by locale and need to be handled with a formatting library rather than hardcoded patterns. Images and icons that contain embedded text also need locale-specific versions, adding asset management complexity.

## How would you test localisation support in an app?

At the unit level, mock `useTranslation` in Jest to verify that components call `t()` with the correct keys and render the returned string without modification. For manual testing, change the device or simulator's system language to each supported locale and walk through the key screens, checking for layout overflow, missing translations that fall back to a key string, and correct formatting of dates and numbers. Edge cases worth testing explicitly include very long translations that could truncate or wrap unexpectedly, RTL layout mirroring, and interpolated variables such as `t('greeting', { name: 'Tom' })` rendering the substituted value correctly in every language.
