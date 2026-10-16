/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';

function HelloWorld({ name }) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <div className="flex flex-col items-center gap-2 p-8">
      <h1 className="text-2xl font-bold">{t('greeting')}</h1>
      <p className="text-lg text-gray-600">{t('welcome', { name })}</p>
      <p className="text-sm text-gray-500">{t('description')}</p>
      <p className="text-sm">{t('currentLanguage', { lng: i18n.language })}</p>
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        {t('switchLanguage')}
      </button>
    </div>
  );
}

export default HelloWorld;
