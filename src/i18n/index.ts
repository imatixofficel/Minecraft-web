import { subscribeKey } from 'valtio/utils'
import { options, getAppLanguage } from '../optionsStorage'
import { fa, faPatterns } from './fa'

export type AppLang = 'en' | 'fa'

export const SUPPORTED_LANGUAGES: Array<{ code: AppLang, label: string }> = [
  { code: 'en', label: 'English' },
  { code: 'fa', label: 'فارسی' },
]

/** localStorage key read by the initial loader in index.html (runs before the app bundle) */
export const LANG_STORAGE_KEY = 'matix-lang'

export const getCurrentLang = (): AppLang => {
  const lang = String(getAppLanguage() ?? 'en').toLowerCase()
  return lang.startsWith('fa') ? 'fa' : 'en'
}

export const translateText = (text: string): string => {
  if (getCurrentLang() !== 'fa' || typeof text !== 'string') return text
  const direct = fa[text]
  if (direct) return direct
  for (const [regex, fn] of faPatterns) {
    const m = regex.exec(text)
    if (m) return fn(...m)
  }
  return text
}

const applyLanguage = () => {
  const lang = getCurrentLang()
  const root = document.documentElement
  root.classList.toggle('lang-fa', lang === 'fa')
  root.lang = lang
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang)
  } catch { }
}

export const setAppLanguage = (lang: AppLang) => {
  options.language = lang
}

export const toggleAppLanguage = () => {
  setAppLanguage(getCurrentLang() === 'fa' ? 'en' : 'fa')
}

window.translateText = translateText
applyLanguage()

subscribeKey(options, 'language', applyLanguage)

/** Apply a language change: simple reload when not in game, otherwise it takes effect on next reload */
export const changeLanguageAndRefresh = (lang: AppLang, inGame: boolean) => {
  setAppLanguage(lang)
  if (!inGame) setTimeout(() => window.location.reload(), 300)
}
