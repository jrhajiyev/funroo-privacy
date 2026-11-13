// Dil seçimi: ünvandakı #az, #en ... və ya brauzerin dili; JS işləməsə bütün dillər alt-alta görünür.
(function () {
  var langs = ["az", "en", "tr", "ru", "es", "pt", "de", "fr"];
  document.documentElement.className = "js";
  function pick() {
    var h = (location.hash || "").slice(1);
    if (langs.indexOf(h) >= 0) return h;
    var n = (navigator.language || "en").slice(0, 2).toLowerCase();
    return langs.indexOf(n) >= 0 ? n : "en";
  }
  function show() {
    var l = pick();
    window.scrollTo(0, 0);
    langs.forEach(function (x) {
      document.getElementById(x).classList.toggle("on", x === l);
      document.querySelector('[data-l="' + x + '"]').classList.toggle("on", x === l);
    });
    document.documentElement.lang = l;
  }
  window.addEventListener("hashchange", show);
  show();
})();
