(function () {
  var root = document.documentElement;

  /* --- Light / dark toggle --- */
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* --- Tag filter on the home page --- */
  var filters = document.getElementById('filters');
  var list = document.getElementById('post-list');
  var emptyHint = document.getElementById('empty-hint');
  if (!filters || !list) return;

  var cards = Array.prototype.slice.call(list.querySelectorAll('.card'));

  function applyFilter(value) {
    var visible = 0;
    cards.forEach(function (card) {
      var tags = (card.getAttribute('data-tags') || '').split(',');
      var show = value === '*' || tags.indexOf(value) !== -1;
      card.classList.toggle('is-hidden', !show);
      if (show) visible++;
    });
    if (emptyHint) emptyHint.hidden = visible !== 0;
  }

  filters.addEventListener('click', function (e) {
    var btn = e.target.closest('.chip');
    if (!btn) return;
    filters.querySelectorAll('.chip').forEach(function (c) {
      c.classList.toggle('is-active', c === btn);
    });
    applyFilter(btn.getAttribute('data-filter'));
  });
})();
