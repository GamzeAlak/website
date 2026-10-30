/**
 * Dr. Gamze ALAK — Modern Extensible i18n Engine
 * Supports 21 languages, client-side path routing (/tr, /en, /de, etc.),
 * dynamic URL synchronization with replaceState/pushState, RTL support,
 * and a searchable 2-column language switcher dropdown.
 */

(function () {
    'use strict';

    // Global registry for locales
    window.I18N_LOCALES = window.I18N_LOCALES || {};

    const I18N = {
        config: {
            defaultLocale: 'tr',
            storageKey: 'gamzealak_lang',
            supportedLocales: {
                'tr': {
                    code: 'tr',
                    label: 'TR',
                    name: 'Türkçe',
                    flag: 'icons/flags/tr.png',
                    htmlLang: 'tr',
                    dir: 'ltr',
                    searchTerms: 'turkish turkce tr turkey turkiye'
                },
                'en': {
                    code: 'en',
                    label: 'EN',
                    name: 'English',
                    flag: 'icons/flags/gb.png',
                    htmlLang: 'en',
                    dir: 'ltr',
                    searchTerms: 'english ingilizce en uk usa united kingdom'
                },
                'de': {
                    code: 'de',
                    label: 'DE',
                    name: 'Deutsch',
                    flag: 'icons/flags/de.png',
                    htmlLang: 'de',
                    dir: 'ltr',
                    searchTerms: 'german deutsch almanca de germany deutschland'
                },
                'fr': {
                    code: 'fr',
                    label: 'FR',
                    name: 'Français',
                    flag: 'icons/flags/fr.png',
                    htmlLang: 'fr',
                    dir: 'ltr',
                    searchTerms: 'french francais fransizca fr france'
                },
                'zh': {
                    code: 'zh',
                    label: 'ZH',
                    name: '中文',
                    flag: 'icons/flags/cn.png',
                    htmlLang: 'zh-CN',
                    dir: 'ltr',
                    searchTerms: 'chinese cince zhongwen cn china mandarin'
                },
                'ru': {
                    code: 'ru',
                    label: 'RU',
                    name: 'Русский',
                    flag: 'icons/flags/ru.png',
                    htmlLang: 'ru',
                    dir: 'ltr',
                    searchTerms: 'russian rusca russkiy ru russia'
                },
                'es': {
                    code: 'es',
                    label: 'ES',
                    name: 'Español',
                    flag: 'icons/flags/es.png',
                    htmlLang: 'es',
                    dir: 'ltr',
                    searchTerms: 'spanish espanol ispanyolca es spain espana'
                },
                'ar': {
                    code: 'ar',
                    label: 'AR',
                    name: 'العربية',
                    flag: 'icons/flags/sa.png',
                    htmlLang: 'ar',
                    dir: 'rtl',
                    searchTerms: 'arabic arapca ar saudi arabia arab'
                },
                'ja': {
                    code: 'ja',
                    label: 'JA',
                    name: '日本語',
                    flag: 'icons/flags/jp.png',
                    htmlLang: 'ja',
                    dir: 'ltr',
                    searchTerms: 'japanese japonca nihongo ja jp japan'
                },
                'fi': {
                    code: 'fi',
                    label: 'FI',
                    name: 'Suomi',
                    flag: 'icons/flags/fi.png',
                    htmlLang: 'fi',
                    dir: 'ltr',
                    searchTerms: 'finnish fince suomi fi finland'
                },
                'da': {
                    code: 'da',
                    label: 'DA',
                    name: 'Dansk',
                    flag: 'icons/flags/dk.png',
                    htmlLang: 'da',
                    dir: 'ltr',
                    searchTerms: 'danish danca dansk da dk denmark'
                },
                'pl': {
                    code: 'pl',
                    label: 'PL',
                    name: 'Polski',
                    flag: 'icons/flags/pl.png',
                    htmlLang: 'pl',
                    dir: 'ltr',
                    searchTerms: 'polish polski lehce pl poland polska'
                },
                'bg': {
                    code: 'bg',
                    label: 'BG',
                    name: 'Български',
                    flag: 'icons/flags/bg.png',
                    htmlLang: 'bg',
                    dir: 'ltr',
                    searchTerms: 'bulgarian bulgarca bg bulgaria'
                },
                'af': {
                    code: 'af',
                    label: 'AF',
                    name: 'Afrikaans',
                    flag: 'icons/flags/za.png',
                    htmlLang: 'af',
                    dir: 'ltr',
                    searchTerms: 'afrikaans afrika af za south africa'
                },
                'id': {
                    code: 'id',
                    label: 'ID',
                    name: 'Bahasa Indonesia',
                    flag: 'icons/flags/id.png',
                    htmlLang: 'id',
                    dir: 'ltr',
                    searchTerms: 'indonesian endonezce bahasa id indonesia'
                },
                'hi': {
                    code: 'hi',
                    label: 'HI',
                    name: 'हिन्दी',
                    flag: 'icons/flags/in.png',
                    htmlLang: 'hi',
                    dir: 'ltr',
                    searchTerms: 'hindi hintce hi in india'
                },
                'ur': {
                    code: 'ur',
                    label: 'UR',
                    name: 'اردو',
                    flag: 'icons/flags/pk.png',
                    htmlLang: 'ur',
                    dir: 'rtl',
                    searchTerms: 'urdu urduca ur pk pakistan'
                },
                'fa': {
                    code: 'fa',
                    label: 'FA',
                    name: 'فارسی',
                    flag: 'icons/flags/ir.png',
                    htmlLang: 'fa',
                    dir: 'rtl',
                    searchTerms: 'persian farsi farsca fa ir iran'
                },
                'pt': {
                    code: 'pt',
                    label: 'PT',
                    name: 'Português',
                    flag: 'icons/flags/pt.png',
                    htmlLang: 'pt',
                    dir: 'ltr',
                    searchTerms: 'portuguese portugues portekizce pt portugal brazil'
                },
                'el': {
                    code: 'el',
                    label: 'EL',
                    name: 'Ελληνικά',
                    flag: 'icons/flags/gr.png',
                    htmlLang: 'el',
                    dir: 'ltr',
                    searchTerms: 'greek ellinika yunanca el gr greece'
                },
                'nl': {
                    code: 'nl',
                    label: 'NL',
                    name: 'Nederlands',
                    flag: 'icons/flags/nl.png',
                    htmlLang: 'nl',
                    dir: 'ltr',
                    searchTerms: 'dutch nederlands hollandaca flemmish nl netherlands holland'
                }
            }
        },

        currentLocale: 'tr',

        /**
         * Register a new locale dynamically
         */
        registerLocale(code, metadata, dictionary) {
            this.config.supportedLocales[code] = metadata;
            if (dictionary) {
                window.I18N_LOCALES[code] = dictionary;
            }
            this.renderSelectorOptions();
        },

        /**
         * Get nested value from dictionary using dot notation (e.g., 'hero.subtitle')
         */
        getNestedValue(obj, keyPath) {
            if (!obj || !keyPath) return null;
            const parts = keyPath.split('.');
            let current = obj;
            for (let i = 0; i < parts.length; i++) {
                if (current[parts[i]] === undefined || current[parts[i]] === null) {
                    return null;
                }
                current = current[parts[i]];
            }
            return current;
        },

        /**
         * Translate a key with optional fallback and parameter interpolation
         */
        t(key, paramsOrFallback) {
            const locale = this.currentLocale;
            const dict = window.I18N_LOCALES[locale] || window.I18N_LOCALES[this.config.defaultLocale] || {};
            let val = this.getNestedValue(dict, key);

            // Fallback to default locale if missing in current locale
            if (val === null && locale !== this.config.defaultLocale) {
                const defaultDict = window.I18N_LOCALES[this.config.defaultLocale] || {};
                val = this.getNestedValue(defaultDict, key);
            }

            if (val === null) {
                return (typeof paramsOrFallback === 'string') ? paramsOrFallback : key;
            }

            if (typeof val === 'string' && typeof paramsOrFallback === 'object' && paramsOrFallback !== null) {
                Object.keys(paramsOrFallback).forEach(placeholder => {
                    val = val.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), paramsOrFallback[placeholder]);
                });
            }

            return val;
        },

        /**
         * Detect basePath, locale, and whether locale is explicit in pathname
         */
        detectRouting() {
            const supported = Object.keys(this.config.supportedLocales);
            const pathname = window.location.pathname;

            // Handle file: protocol
            if (window.location.protocol === 'file:') {
                // Check hash e.g. index.html#/en or #/tr
                const hashMatch = (window.location.hash || '').match(/^#\/?([a-zA-Z]{2}(-[a-zA-Z]{2})?)/);
                if (hashMatch && supported.includes(hashMatch[1].toLowerCase())) {
                    return { locale: hashMatch[1].toLowerCase(), basePath: '', hasLocaleInPath: true };
                }
                const queryLang = new URLSearchParams(window.location.search).get('lang');
                if (queryLang && supported.includes(queryLang.toLowerCase())) {
                    return { locale: queryLang.toLowerCase(), basePath: '', hasLocaleInPath: false };
                }
                const storedLang = localStorage.getItem(this.config.storageKey);
                if (storedLang && supported.includes(storedLang.toLowerCase())) {
                    return { locale: storedLang.toLowerCase(), basePath: '', hasLocaleInPath: false };
                }
                return { locale: this.config.defaultLocale, basePath: '', hasLocaleInPath: false };
            }

            // Clean pathname of /index.html or /index.htm or /index.php
            const cleanPath = pathname.replace(/\/(index\.(html?|php))?$/i, '');
            const segments = cleanPath.split('/').filter(Boolean);

            let matchedLocale = null;
            let langIndex = -1;

            // Check if any segment matches supported language
            for (let i = segments.length - 1; i >= 0; i--) {
                const seg = segments[i].toLowerCase();
                if (supported.includes(seg)) {
                    matchedLocale = seg;
                    langIndex = i;
                    break;
                }
            }

            if (matchedLocale && langIndex !== -1) {
                const basePath = '/' + segments.slice(0, langIndex).join('/');
                return {
                    locale: matchedLocale,
                    basePath: basePath === '/' ? '' : basePath,
                    hasLocaleInPath: true
                };
            }

            // Base path without language segment
            const basePath = segments.length > 0 ? '/' + segments.join('/') : '';

            // Query parameter fallback (?lang=en)
            const queryLang = new URLSearchParams(window.location.search).get('lang');
            if (queryLang && supported.includes(queryLang.toLowerCase())) {
                return { locale: queryLang.toLowerCase(), basePath, hasLocaleInPath: false };
            }

            // Stored preference
            const storedLang = localStorage.getItem(this.config.storageKey);
            if (storedLang && supported.includes(storedLang.toLowerCase())) {
                return { locale: storedLang.toLowerCase(), basePath, hasLocaleInPath: false };
            }

            // Default locale
            return { locale: this.config.defaultLocale, basePath, hasLocaleInPath: false };
        },

        /**
         * Update the browser URL without full page reload.
         * When useReplace is true (e.g. on initial load), history.replaceState is used.
         */
        syncUrl(locale, useReplace = false) {
            if (window.location.protocol === 'file:') {
                // In local file: mode, use hash to give visual feedback without browser security error
                try {
                    const cleanHash = (window.location.hash || '').replace(/^#\/?([a-zA-Z]{2}(-[a-zA-Z]{2})?)?/, '');
                    const targetHash = '#/' + locale + (cleanHash ? '/' + cleanHash.replace(/^#/, '') : '');
                    if (window.location.hash !== targetHash) {
                        window.location.hash = targetHash;
                    }
                } catch (e) {}
                return;
            }

            const { basePath } = this.detectRouting();
            const hash = window.location.hash || '';
            const search = window.location.search;

            // Filter out ?lang= from search query if present to keep URL clean
            let cleanSearch = '';
            if (search) {
                const params = new URLSearchParams(search);
                params.delete('lang');
                const remaining = params.toString();
                if (remaining) cleanSearch = '?' + remaining;
            }

            const targetPath = `${basePath}/${locale}`;
            const targetUrl = `${targetPath}${cleanSearch}${hash}`;

            if (window.location.pathname !== targetPath) {
                if (useReplace) {
                    window.history.replaceState({ locale }, '', targetUrl);
                } else {
                    window.history.pushState({ locale }, '', targetUrl);
                }
            }
        },

        /**
         * Translate all DOM nodes with data-i18n attributes
         */
        translateDOM(root = document) {
            // Update [data-i18n]
            const elements = root.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                const translation = this.t(key);
                if (translation && translation !== key) {
                    if (/<[a-z][\s\S]*>/i.test(translation)) {
                        el.innerHTML = translation;
                    } else {
                        el.textContent = translation;
                    }
                }
            });

            // Update attributes like data-i18n-attr="placeholder:key,aria-label:key"
            const attrElements = root.querySelectorAll('[data-i18n-attr]');
            attrElements.forEach(el => {
                const mapping = el.getAttribute('data-i18n-attr');
                if (!mapping) return;
                mapping.split(',').forEach(pair => {
                    const [attr, key] = pair.split(':').map(s => s.trim());
                    if (attr && key) {
                        const translation = this.t(key);
                        if (translation && translation !== key) {
                            el.setAttribute(attr, translation);
                        }
                    }
                });
            });

            // Dedicated attribute shortcuts
            root.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
                const key = el.getAttribute('data-i18n-aria-label');
                const val = this.t(key);
                if (val) el.setAttribute('aria-label', val);
            });

            root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                const val = this.t(key);
                if (val) el.placeholder = val;
            });

            root.querySelectorAll('[data-i18n-title]').forEach(el => {
                const key = el.getAttribute('data-i18n-title');
                const val = this.t(key);
                if (val) el.title = val;
            });

            // Update Document Title and Meta Description
            const metaTitle = this.t('meta.title');
            if (metaTitle && metaTitle !== 'meta.title') {
                document.title = metaTitle;
            }

            const metaDescEl = document.querySelector('meta[name="description"]');
            const metaDesc = this.t('meta.description');
            if (metaDescEl && metaDesc && metaDesc !== 'meta.description') {
                metaDescEl.setAttribute('content', metaDesc);
            }

            // Update <html lang="..." dir="...">
            const localeConfig = this.config.supportedLocales[this.currentLocale];
            if (localeConfig) {
                if (localeConfig.htmlLang) {
                    document.documentElement.lang = localeConfig.htmlLang;
                }
                const dir = localeConfig.dir || 'ltr';
                document.documentElement.setAttribute('dir', dir);
                if (dir === 'rtl') {
                    document.documentElement.classList.add('is-rtl');
                } else {
                    document.documentElement.classList.remove('is-rtl');
                }
            }
        },

        /**
         * Set the active locale, update UI, storage, URL, and DOM
         */
        setLocale(locale, updateUrl = true, useReplace = false) {
            const normalized = locale.toLowerCase();
            if (!this.config.supportedLocales[normalized]) {
                console.warn(`[i18n] Locale "${locale}" is not supported.`);
                return;
            }

            this.currentLocale = normalized;
            try {
                localStorage.setItem(this.config.storageKey, normalized);
            } catch (e) {
                // Storage may be disabled in some private modes
            }

            this.translateDOM();
            this.updateSelectorUI();

            if (updateUrl) {
                this.syncUrl(normalized, useReplace);
            }

            // Dispatch global event so other components can react
            window.dispatchEvent(new CustomEvent('i18n:localeChanged', {
                detail: { locale: normalized }
            }));
        },

        /**
         * Render the dropdown with search input and 2-column options
         */
        renderSelectorOptions() {
            const dropdown = document.getElementById('langDropdown');
            if (!dropdown) return;

            dropdown.innerHTML = `
                <div class="lang-dropdown-header">
                    <div class="lang-search-wrapper">
                        <svg class="lang-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input type="text" id="langSearchInput" class="lang-search-input" placeholder="${this.currentLocale === 'tr' ? 'Dil ara...' : 'Search language...'}" autocomplete="off" spellcheck="false">
                        <button type="button" id="langSearchClear" class="lang-search-clear" aria-label="Clear" style="display: none;">×</button>
                    </div>
                </div>
                <div class="lang-options-grid" id="langOptionsGrid" role="menu"></div>
            `;

            const grid = document.getElementById('langOptionsGrid');
            const localesList = Object.values(this.config.supportedLocales);

            localesList.forEach(loc => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = `lang-option ${loc.code === this.currentLocale ? 'active' : ''}`;
                btn.setAttribute('data-lang', loc.code);
                btn.setAttribute('data-search', `${loc.name} ${loc.label} ${loc.code} ${loc.searchTerms || ''}`.toLowerCase());
                btn.setAttribute('role', 'menuitem');
                btn.innerHTML = `
                    <img src="${loc.flag}" alt="${loc.name}" class="lang-option-flag" loading="lazy">
                    <span class="lang-option-name">${loc.name}</span>
                    <span class="lang-option-code">${loc.label}</span>
                    <svg class="lang-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                `;

                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.setLocale(loc.code, true, false);
                    this.closeDropdown();
                });

                grid.appendChild(btn);
            });

            // Instant search filtering
            const searchInput = document.getElementById('langSearchInput');
            const clearBtn = document.getElementById('langSearchClear');

            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    const q = e.target.value.trim().toLowerCase();
                    if (clearBtn) {
                        clearBtn.style.display = q ? 'block' : 'none';
                    }
                    const items = grid.querySelectorAll('.lang-option');
                    let matchesCount = 0;
                    items.forEach(item => {
                        const searchText = item.getAttribute('data-search') || '';
                        if (!q || searchText.includes(q)) {
                            item.style.display = 'flex';
                            matchesCount++;
                        } else {
                            item.style.display = 'none';
                        }
                    });

                    // Empty state check
                    let emptyMsg = grid.querySelector('.lang-empty-msg');
                    if (matchesCount === 0) {
                        if (!emptyMsg) {
                            emptyMsg = document.createElement('div');
                            emptyMsg.className = 'lang-empty-msg';
                            emptyMsg.textContent = this.currentLocale === 'tr' ? 'Sonuç bulunamadı' : 'No language found';
                            grid.appendChild(emptyMsg);
                        }
                        emptyMsg.style.display = 'block';
                    } else if (emptyMsg) {
                        emptyMsg.style.display = 'none';
                    }
                });

                if (clearBtn) {
                    clearBtn.addEventListener('click', () => {
                        searchInput.value = '';
                        searchInput.dispatchEvent(new Event('input'));
                        searchInput.focus();
                    });
                }
            }
        },

        /**
         * Update language selector trigger button and dropdown active class
         */
        updateSelectorUI() {
            const current = this.config.supportedLocales[this.currentLocale] || this.config.supportedLocales[this.config.defaultLocale];
            
            const currentFlag = document.getElementById('langCurrentFlag');
            const currentCode = document.getElementById('langCurrentCode');

            if (currentFlag) {
                currentFlag.src = current.flag;
                currentFlag.alt = current.name;
            }
            if (currentCode) {
                currentCode.textContent = current.label;
            }

            // Update active state in dropdown
            const options = document.querySelectorAll('.lang-option');
            options.forEach(opt => {
                const lang = opt.getAttribute('data-lang');
                if (lang === this.currentLocale) {
                    opt.classList.add('active');
                } else {
                    opt.classList.remove('active');
                }
            });
        },

        closeDropdown() {
            const dropdown = document.getElementById('langDropdown');
            const trigger = document.getElementById('langBtn');
            if (dropdown && trigger) {
                dropdown.classList.remove('open');
                trigger.setAttribute('aria-expanded', 'false');
            }
        },

        toggleDropdown() {
            const dropdown = document.getElementById('langDropdown');
            const trigger = document.getElementById('langBtn');
            if (dropdown && trigger) {
                const isOpen = dropdown.classList.toggle('open');
                trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                if (isOpen) {
                    const searchInput = document.getElementById('langSearchInput');
                    if (searchInput) {
                        searchInput.value = '';
                        searchInput.dispatchEvent(new Event('input'));
                        setTimeout(() => searchInput.focus(), 80);
                    }
                }
            }
        },

        /**
         * Initialize the i18n engine
         */
        init() {
            const routing = this.detectRouting();
            this.currentLocale = routing.locale;

            // Render selector & bind events
            this.renderSelectorOptions();
            this.updateSelectorUI();
            this.translateDOM();

            // Synchronize the URL:
            // If the user visits domain.com without /tr, immediately use replaceState to show domain.com/tr!
            // If testing under file: protocol, synchronizes hash (#/tr).
            this.syncUrl(this.currentLocale, true);

            // Bind trigger button
            const trigger = document.getElementById('langBtn');
            if (trigger) {
                trigger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleDropdown();
                });
            }

            // Close on click outside
            document.addEventListener('click', (e) => {
                const selector = document.getElementById('langSelector');
                if (selector && !selector.contains(e.target)) {
                    this.closeDropdown();
                }
            });

            // Close on Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeDropdown();
                }
            });

            // Handle browser Back / Forward buttons
            window.addEventListener('popstate', (e) => {
                const routingOnPop = this.detectRouting();
                if (routingOnPop.locale !== this.currentLocale) {
                    this.setLocale(routingOnPop.locale, false);
                }
            });

            // Handle hash changes under file: protocol
            if (window.location.protocol === 'file:') {
                window.addEventListener('hashchange', () => {
                    const routingOnHash = this.detectRouting();
                    if (routingOnHash.locale !== this.currentLocale) {
                        this.setLocale(routingOnHash.locale, false);
                    }
                });
            }
        }
    };

    window.I18N = I18N;

    // Run automatically when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => I18N.init());
    } else {
        I18N.init();
    }
})();
