document.querySelectorAll('.faq-question').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = btn.closest('.faq-item');
    var isOpen = item.getAttribute('data-open') === 'true';
    var answer = item.querySelector('.faq-answer');
    item.setAttribute('data-open', String(!isOpen));
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0px';
    }
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
});
