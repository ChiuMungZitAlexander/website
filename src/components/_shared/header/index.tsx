import { useState } from 'react'
import { Link } from 'gatsby'
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next'
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery'

import { Modal } from '@/components/modal'

import Logo from '@/assets/images/logo.png'
import G from '@/assets/icons/github.svg'
import F from '@/assets/icons/facebook.svg'
import T from '@/assets/icons/twitter.svg'
import L from '@/assets/icons/linkedin.svg'
import Z from '@/assets/icons/zhihu.svg'
import Lang from '@/assets/icons/language.svg'
import Bars from '@/assets/icons/bars.svg'
import XMark from '@/assets/icons/xmark.svg'

export const Header = () => {
  const { t } = useTranslation()
  const { language, changeLanguage } = useI18next()
  const isMobile = useMediaQuery('(max-width: 48rem)')

  const [open, setOpen] = useState(false)

  if (isMobile) {
    return (
      <>
        <Modal
          open={open}
          setOpen={setOpen}
          maskClassName="bg-opacity-100 !bg-white"
        >
          <div className="h-full w-full flex flex-col">
            <div
              className="h-[5.375rem] flex justify-between items-center px-4 py text-black"
              onClick={() => setOpen(false)}
            >
              <img
                alt="logo"
                className="w-24 object-contain"
                src={Logo}
              />
              <XMark
                height="1.5rem"
                width="1.5rem"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-4">
              <Link
                className="text-2xl"
                to="/"
              >
                {t('about')}
              </Link>
              <Link
                className="text-2xl"
                to="/music"
              >
                {t('music')}
              </Link>
              <Link
                className="text-2xl"
                to="/coding"
              >
                {t('coding')}
              </Link>
            </div>
            <div className="flex justify-center items-center gap-4 mb-20">
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
              <div className="self-stretch border-l border-l-black" />
              <div
                onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
                className="h-6 w-6 cursor-pointer"
              >
                <Lang
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </Modal>
        <div className="h-[5.375rem] flex items-center justify-between px-4 py text-white">
          <img
            alt="logo"
            className="w-24 object-contain invert"
            src={Logo}
          />
          <div onClick={() => setOpen(true)}>
            <Bars
              height="1.5rem"
              width="1.5rem"
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="h-[5.375rem] flex items-center px-8 py-4 text-white">
      <div className="flex grow justify-center gap-4 font-medium capitalize">
        <Link
          className="w-16 text-center"
          to="/"
        >
          {t('about')}
        </Link>
        <Link
          className="w-16 text-center"
          to="/music"
        >
          {t('music')}
        </Link>
        <Link
          className="w-16 text-center"
          to="/coding"
        >
          {t('coding')}
        </Link>
      </div>
      <img
        alt="logo"
        className="h-16 object-contain invert"
        src={Logo}
      />
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
        <div className="self-stretch border-l border-l-white" />
        <div
          onClick={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
          className="h-6 w-6 cursor-pointer"
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
