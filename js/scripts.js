$(document).ready(function () {

  // Modal

  $(".modal").on("click", function (e) {
    console.log(e);
    if (($(e.target).hasClass("modal-main") || $(e.target).hasClass("close-modal")) && $("#loading").css("display") == "none") {
      closeModal();
    }
  });

  // -> Modal

  // Mostrar Saludo
  $("#showGreeting").on("click", function () {
    showModal("Greeting");
  });

  $("#showText").on("click", function () {
    showModal("Text");
  });

  $("#showForm").on("click", function () {
    showModal("Form");
  });

  $("#showLoading").on("click", function () {
    loading(true);
    setTimeout(function () {
      loading(false);
    }, 3000);
  });

});
