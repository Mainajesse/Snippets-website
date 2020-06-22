  function uncheck() {
    document.getElementById("navi-toggle").checked = false;
  } // Uncheck menu function

  (function ($) {
    $("body").toggleClass(localStorage.toggled);
    $(".darkSwitch").on("click tap", function () {
      if (localStorage.toggled != "dark-theme") {
        $("body").toggleClass("dark-theme", true);
        localStorage.toggled = "dark-theme";
      } else {
        $("body").toggleClass("dark-theme", false);
        localStorage.toggled = "";
      }
    });

    if ($("body").hasClass("dark-theme")) {
      $(".darkSwitch").prop("checked", true);
    } else {
      $(".darkSwitch").prop("checked", false);
    }
  })(jQuery); //Darktheme function