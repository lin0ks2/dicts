/* ==========================================================
 * Проект: MOYAMOVA
 * Файл: view.stats.js
 * Назначение: Экран статистики — теперь с 3 страницами
 * Версия: 1.3 (фиксированные круги + заголовки сверху)
 * Обновлено: 2025-11-22
 * ========================================================== */

(function () {
  'use strict';

  const A = (window.App = window.App || {});

  /* --------------------------------------------------------------
     Хелпер: локализация текстов
  -------------------------------------------------------------- */
  function __(ru, uk) {
    const lang = (A.settings && (A.settings.uiLang || A.settings.lang)) || 'ru';
    return lang === 'uk' ? uk : ru;
  }

  /* --------------------------------------------------------------
     Построение одного кольца
  -------------------------------------------------------------- */
  function renderRingLayer(idx, angle, color, total) {
    const scale = total === 1 ? 1 : (1 - idx * 0.18);
    return (
      '<div class="stats-ring-layer" style="--ring-scale:' + scale + '">' +
        '<div class="stats-ring-layer__ring" ' +
        'style="--ring-angle:' + angle + 'deg; --ring-color:' + color + '"></div>' +
      '</div>'
    );
  }

  /* --------------------------------------------------------------
     Построение круга данных
  -------------------------------------------------------------- */
  function renderRingSet(title, items) {
    if (!items || !items.length) return '';

    const totalLayers = items.length;
    const layers = items.map(function (item, i) {
      return renderRingLayer(i, item.angle, item.color, totalLayers);
    }).join('');

    return (
      '<div class="stats-ring-set">' +
        '<div class="stats-ring-set__title">' + title + '</div>' +
        '<div class="stats-ring-set__circle">' +
          '<div class="stats-ring-set__circle-inner">' +
            layers +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  /* --------------------------------------------------------------
     Генерация легенды под кругом
  -------------------------------------------------------------- */
  function renderLegend(items) {
    if (!items || !items.length) return '';
    return (
      '<div class="stats-ring-legend">' +
        items.map(function (item) {
          return (
            '<div class="stats-ring-legend__item">' +
              '<div class="stats-ring-legend__dot" style="--ring-color:' + item.color + '"></div>' +
              '<div class="stats-ring-legend__label">' + item.label + '</div>' +
              '<div class="stats-ring-legend__value">' + item.value + '</div>' +
            '</div>'
          );
        }).join('') +
      '</div>'
    );
  }

  /* --------------------------------------------------------------
     Пейджер (без свайпов)
  -------------------------------------------------------------- */
  function setupStatsPager(root) {
    if (!root) return;

    var cards = root.querySelectorAll('.stats-lang-card');
    if (!cards.length) return;

    cards.forEach(function (card) {
      var body = card.querySelector('.stats-lang-card__body');
      if (!body) return;

      var pages = body.querySelectorAll('.stats-page');
      var dots  = body.querySelectorAll('.stats-page-dot');
      if (!pages.length || !dots.length) return;

      var current = 0;

      function goTo(idx) {
        idx = Math.max(0, Math.min(idx, pages.length - 1));
        current = idx;

        pages.forEach(function (p, i) {
          p.classList.toggle('is-active', i === current);
        });
        dots.forEach(function (d, i) {
          d.classList.toggle('is-active', i === current);
        });
      }

      dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
          goTo(Number(dot.dataset.page));
        });
      });
    });
  }

  /* --------------------------------------------------------------
     Основной рендер
  -------------------------------------------------------------- */
  function mount(stats, activeLang) {
    const container = document.getElementById('viewStats');
    if (!container) return;

    const langKeys = Object.keys(stats.byLang);
    if (!langKeys.length) {
      container.innerHTML = '<p style="padding:16px; opacity:.7">Нет статистики</p>';
      return;
    }

    const html = (
      '<div class="stats-card">' +
        '<div class="stats-lang-list">' +
          langKeys.map(function (L) {
            const data = stats.byLang[L];
            const isActive = (L === activeLang) ? ' is-active' : '';

            return (
              '<article class="stats-lang-card dicts-card' + isActive + '" data-lang="' + L + '">' +

                '<header class="stats-lang-card__header">' +
                  '<div class="stats-lang-card__title">' + data.title + '</div>' +
                  '<div class="stats-lang-card__meta">' + data.learned + '</div>' +
                  '<div class="stats-lang-card__decks">' + data.decks + '</div>' +
                '</header>' +

                '<div class="stats-lang-card__body">' +

                  '<div class="stats-pages">' +

                    /* Страница 1 — базовые части речи */
                    '<div class="stats-page stats-page--core is-active" data-page="0">' +
                      renderRingSet(
                        __("Основные части речи", "Основні частини мови"),
                        data.coreRings
                      ) +
                      renderLegend(data.coreLegend) +
                    '</div>' +

                    /* Страница 2 — доп. части речи */
                    '<div class="stats-page stats-page--other" data-page="1">' +
                      renderRingSet(
                        __("Другие части речи", "Інші частини мови"),
                        data.otherRings
                      ) +
                      renderLegend(data.otherLegend) +
                    '</div>' +

                    /* Страница 3 — аналитика */
                    '<div class="stats-page stats-page--analytics" data-page="2">' +
                      data.activityHtml +
                    '</div>' +

                  '</div>' + // .stats-pages

                  '<div class="stats-pages-dots">' +
                    '<button class="stats-page-dot is-active" data-page="0"></button>' +
                    '<button class="stats-page-dot" data-page="1"></button>' +
                    '<button class="stats-page-dot" data-page="2"></button>' +
                  '</div>' +

                '</div>' + // body

              '</article>'
            );
          }).join('') +
        '</div>' +
      '</div>'
    );

    container.innerHTML = html;
    setupStatsPager(container);
  }

  /* --------------------------------------------------------------
     Публичный API
  -------------------------------------------------------------- */
  A.ViewStats = {
    mount
  };
})();
