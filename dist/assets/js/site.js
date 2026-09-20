(function () {
  var button = document.querySelector('[data-nav-toggle]');
  var navigation = document.querySelector('[data-navigation]');
  var header = document.querySelector('[data-site-header]');

  if (button && navigation) {
    var setOpen = function (isOpen) {
      button.setAttribute('aria-expanded', String(isOpen));
      navigation.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
    };

    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });

    navigation.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setOpen(false);
    });
  }

  if (header) {
    var updateHeader = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 16);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }
})();
