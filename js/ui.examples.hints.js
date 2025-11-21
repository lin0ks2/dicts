/* ==========================================================
 * Проект: MOYAMOVA
 * Файл: ui.examples.hints.js
 * Назначение: Пример использования текущего слова
 *            в зоне .home-hints под сетами
 * Версия: 1.5 (подсветка леммы, безопасный observer)
 * Обновлено: 2025-11-21
 * ========================================================== */

(function () {
  'use strict';

  const A = (window.App = window.App || {});

  /* ----------------------------- Вспомогательные функции ----------------------------- */

  // Язык интерфейса: ru / uk
  function getUiLang() {
    const s = (A.settings && (A.settings.lang || A.settings.uiLang)) || null;
    const attr = (document.documentElement.getAttribute('lang') || '').toLowerCase();
    const v = (s || attr || 'ru').toLowerCase();
    return (v === 'uk') ? 'uk' : 'ru';
  }

  // Экранируем HTML
  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Экранируем для RegExp
  function escapeRegExp(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Подсветка: ИЩЕМ только точное совпадение леммы (без угадывания форм)
  function highlightSentence(sentence, wordObj) {
    if (!sentence) return '';
    const raw = String(sentence);

    // исходное немецкое слово из словаря
    const w = wordObj && wordObj.word ? String(wordObj.word) : '';
    const lemma = w.trim().split(/\s+/).pop(); // отбрасываем артикль у существительных
    if (!lemma) return escapeHtml(raw);

    const re = new RegExp('\\b' + escapeRegExp(lemma) + '\\b', 'i');
    const m = raw.match(re);
    if (!m) {
      // нет точного совпадения — просто возвращаем текст без подсветки
      return escapeHtml(raw);
    }

    const idx = m.index;
    const match = m[0];
    const before = raw.slice(0, idx);
    const after  = raw.slice(idx + match.length);

    return (
      escapeHtml(before) +
      '<span class="hint-word">' + escapeHtml(match) + '</span>' +
      escapeHtml(after)
    );
  }

  // Обеспечиваем наличие заголовка "Пример использования / Приклад вживання"
  function ensureTitle(section) {
    const bodyEl = section.querySelector('#hintsBody');
    if (!bodyEl) return;

    let titleEl = section.querySelector('.hints-title');
    if (!titleEl) {
      titleEl = document.createElement('div');
      titleEl.className = 'hints-title';
      section.insertBefore(titleEl, bodyEl);
    }

    const lang = getUiLang();
    titleEl.textContent = (lang === 'uk')
      ? 'Приклад вживання'
      : 'Пример использования';
  }

  /* ----------------------------- Основной рендер ----------------------------- */

  function renderExampleHint() {
    const section = document.querySelector('.home-hints');
    const body = document.getElementById('hintsBody');
    if (!section || !body) return;

    ensureTitle(section);

    const word = A.__currentWord;
    if (!word || !Array.isArray(word.examples) || !word.examples.length) {
      body.innerHTML = '';
      return;
    }

    const ex = word.examples[0] || {};
    const de = ex.L2 || ex.de || ex.deu || '';
    if (!de) {
      body.innerHTML = '';
      return;
    }

    const uiLang = getUiLang();
    const tr = (uiLang === 'uk')
      ? (ex.uk || ex.ru || '')
      : (ex.ru || ex.uk || '');

    const deHtml = highlightSentence(de, word);
    const trHtml = escapeHtml(tr);

    // По умолчанию показываем только немецкий пример,
    // перевод скрыт (CSS: display:none), кликом по примеру — показываем.
    body.innerHTML =
      '<div class="hint-example">' +
        '<p class="hint-de">' + deHtml + '</p>' +
        (trHtml
          ? '<p class="hint-tr">' + trHtml + '</p>'
          : '') +
      '</div>';
  }

  /* ----------------------------- Инициализация / подписки ----------------------------- */

  // Клик по немецкому примеру — показать/скрыть перевод
  function attachClickHandler() {
    document.addEventListener('click', function (evt) {
      const deEl = evt.target.closest('.hint-de');
      if (!deEl) return;

      const root = deEl.closest('.hint-example');
      if (!root) return;

      const trEl = root.querySelector('.hint-tr');
      if (!trEl) return;

      trEl.classList.toggle('is-visible');
    });
  }

  // Наблюдаем за DOM:
  // как только появляется home-hints + trainer-word + App.__currentWord,
  // и внутри hintsBody ещё НЕТ .hint-example — рисуем подсказку.
  function setupGlobalObserver() {
    if (typeof MutationObserver === 'undefined') {
      // старая среда — хотя бы один раз попробуем
      renderExampleHint();
      return;
    }

    const observer = new MutationObserver(function () {
      const section = document.querySelector('.home-hints');
      const trainer = document.querySelector('.trainer-word');
      const body = document.getElementById('hintsBody');
      if (!section || !trainer || !body || !A.__currentWord) return;

      // если подсказка уже отрисована — ничего не делаем, чтобы не зациклиться
      if (body.querySelector('.hint-example')) return;

      renderExampleHint();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // первый рендер (если домашний уже смонтирован к этому моменту)
    renderExampleHint();
  }

  function init() {
    attachClickHandler();
    setupGlobalObserver();

    // ручной вызов на всякий случай, если понадобится
    (A.HintsExamples = A.HintsExamples || {}).refresh = renderExampleHint;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
