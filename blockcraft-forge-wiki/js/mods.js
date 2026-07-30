(function () {
  var mods = window.MODS || [];
  var tbody = document.getElementById('mod-tbody');
  var search = document.getElementById('mod-search');
  var countEl = document.getElementById('mod-count');
  var chips = document.querySelectorAll('.filter-chip');
  var activeSource = 'all';

  function render() {
    var q = (search.value || '').toLowerCase().trim();
    var filtered = mods.filter(function (m) {
      var matchesQ = m.name.toLowerCase().indexOf(q) !== -1;
      var matchesSource = activeSource === 'all' || m.source.toLowerCase() === activeSource;
      return matchesQ && matchesSource;
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
      return '<tr>' +
        '<td>' + escapeHtml(m.name) + '</td>' +
        '<td><span class="source-badge ' + badgeClass + '">' + escapeHtml(m.source) + '</span></td>' +
        '<td><a href="' + m.url + '" target="_blank" rel="noopener noreferrer">View mod page &rarr;</a></td>' +
        '</tr>';
    }).join('');
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  search.addEventListener('input', render);
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      chip.setAttribute('aria-pressed', 'true');
      activeSource = chip.dataset.source;
      render();
    });
  });

  render();
})();
