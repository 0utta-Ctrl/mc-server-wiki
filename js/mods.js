(function () {
  var mods = window.MODS || [];
  var tbody = document.getElementById('mod-tbody');
  var search = document.getElementById('mod-search');
  var countEl = document.getElementById('mod-count');
  var categoryFilter = document.getElementById('category-filter');
  var sortOrder = document.getElementById('sort-order');

  // Populate category dropdown dynamically from window.MODS
  if (categoryFilter) {
    var categories = new Set();
    mods.forEach(function (m) {
      if (Array.isArray(m.category)) {
        m.category.forEach(function (cat) {
          categories.add(cat);
        });
      }
    });

    Array.from(categories).sort().forEach(function (cat) {
      var opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      categoryFilter.appendChild(opt);
    });
  }

  function render() {
    var q = (search.value || '').toLowerCase().trim();
    var catVal = categoryFilter ? categoryFilter.value : 'all';
    var sortVal = sortOrder ? sortOrder.value : 'name-asc';

    // Filter by search query and category
    var filtered = mods.filter(function (m) {
      var matchesQ = m.name.toLowerCase().indexOf(q) !== -1;
      var matchesCat = catVal === 'all' || (Array.isArray(m.category) && m.category.indexOf(catVal) !== -1);
      return matchesQ && matchesCat;
    });

    // Sort list
    filtered.sort(function (a, b) {
      if (sortVal === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else if (sortVal === 'name-desc') {
        return b.name.localeCompare(a.name);
      } else if (sortVal === 'category-asc') {
        var catA = (a.category && a.category[0]) ? a.category[0] : '';
        var catB = (b.category && b.category[0]) ? b.category[0] : '';
        var catCompare = catA.localeCompare(catB);
        return catCompare !== 0 ? catCompare : a.name.localeCompare(b.name);
      }
      return 0;
    });

    countEl.textContent = filtered.length + ' of ' + mods.length + ' mods shown';

    if (filtered.length === 0) {
      tbody.innerHTML = '';
      document.getElementById('mod-empty').hidden = false;
      return;
    }
    document.getElementById('mod-empty').hidden = true;

    tbody.innerHTML = filtered.map(function (m) {
      var badgeClass = m.source === 'Modrinth' ? 'modrinth' : (m.source === 'CurseForge' ? 'curseforge' : '');
      var categoriesText = Array.isArray(m.category) ? m.category.join(', ') : 'Uncategorized';

      // Source badge now acts directly as the clickable link
      var sourceBadgeLink = '<a href="' + escapeHtml(m.url) + '" target="_blank" rel="noopener noreferrer" class="source-badge ' + badgeClass + '" style="text-decoration: none; display: inline-block;">' + escapeHtml(m.source) + ' &#8599;</a>';

      // Official wiki link checking
      var hasWiki = m.official_wiki && m.official_wiki.indexOf('http') === 0;
      var wikiCell = hasWiki
        ? '<a href="' + escapeHtml(m.official_wiki) + '" target="_blank" rel="noopener noreferrer">Wiki &#8599;</a>'
        : '<span style="color: var(--color-text-faint);">-</span>';

      return '<tr>' +
        '<td><strong>' + escapeHtml(m.name) + '</strong></td>' +
        '<td>' + escapeHtml(categoriesText) + '</td>' +
        '<td>' + sourceBadgeLink + '</td>' +
        '<td>' + wikiCell + '</td>' +
        '</tr>';
    }).join('');
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  if (search) search.addEventListener('input', render);
  if (categoryFilter) categoryFilter.addEventListener('change', render);
  if (sortOrder) sortOrder.addEventListener('change', render);

  render();
})();