(function () {
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem("lang"); } catch (e) {}
  var lang = stored || ((navigator.language || "en").toLowerCase().indexOf("it") === 0 ? "it" : "en");
  root.setAttribute("data-lang", lang);
  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".lang");
    if (!button) { return; }
    function render() { button.textContent = root.getAttribute("data-lang") === "it" ? "English" : "Italiano"; }
    render();
    button.addEventListener("click", function () {
      var next = root.getAttribute("data-lang") === "it" ? "en" : "it";
      root.setAttribute("data-lang", next);
      try { localStorage.setItem("lang", next); } catch (e) {}
      render();
    });
  });
})();
