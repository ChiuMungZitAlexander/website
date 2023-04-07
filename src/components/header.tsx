import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next'

import Logo_EN from '../assets/images/logo_en.svg'
import Logo_ZH from '../assets/images/logo_zh.svg'
import G from '../assets/icons/github.svg'
import F from '../assets/icons/facebook.svg'
import T from '../assets/icons/twitter.svg'
import L from '../assets/icons/linkedin.svg'
import Z from '../assets/icons/zhihu.svg'
import Lang from '../assets/icons/language.svg'

export const Header = () => {
  const { t } = useTranslation()
  const { language, changeLanguage } = useI18next()

  return (
    <div className="flex items-center px-8 py-4 text-white">
      <div className="flex grow justify-center gap-4">
        <nav>{t('about')}</nav>
        <nav>{t('music')}</nav>
        <nav>{t('coding')}</nav>
      </div>
      {language === 'en' ? <Logo_EN width="12rem" /> : <Logo_ZH width="12rem" />}
      <div className="flex grow justify-center items-center gap-4 ">
        <a
          href="https://github.com/ChiuMungZitAlexander"
          target="_blank"
        >
          <G
            height="1.5rem"
            width="1.5rem"
          />
        </a>
        <a
          href="https://www.facebook.com/alexandermengzhezhao/"
          target="_blank"
        >
          <F
            height="1.5rem"
            width="1.5rem"
          />
        </a>
        <a
          href="https://twitter.com/alexandermzchiu"
          target="_blank"
        >
          <T
            height="1.5rem"
            width="1.5rem"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/alexandermzchiu/"
          target="_blank"
        >
          <L
            height="1.5rem"
            width="1.5rem"
          />
        </a>
        <a
          href="https://www.zhihu.com/people/alexanderchiumungzit"
          target="_blank"
        >
          <Z
            height="1.5rem"
            width="1.5rem"
          />
        </a>
        <div
          onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
          className="h-6 w-6 ml-4 cursor-pointer"
        >
          <Lang
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  )
}
