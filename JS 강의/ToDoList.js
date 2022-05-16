$(".text").attr("readonly", true);
$(document).on(
  {
    mouseenter: function () {
      $(this).css("background-color", "rgba(255, 255, 255, 0.3)");
      $(this).children(".icon").removeClass("hide");
      $(this).children(".text").addClass("hide");
    },
    mouseleave: function () {
      $(this).css("background-color", "rgba(255, 255, 255, 0.7)");
      $(this).children(".icon").addClass("hide");
      $(this).children(".text").removeClass("hide");
    },
  },
  ".list"
);
$(document).on("click", "#check", function () {
  $(this).parent(".icon").next(".text").toggleClass("text-line");
});
$(document).on("click", "#slash", function () {
  var text = $(this).parent(".icon").next(".text");
  $(this).parents(".list").css("background-color", "rgba(255, 255, 255, 0.7)");
  $(this).parent(".icon").addClass("hide");
  text.removeClass("hide");
  text.attr("readonly", false);
  text.click();
});
$(document).on("click", "#close", function () {
  $(this).closest(".list").remove();
});
function action() {
  var value = $(".input").val();
  $(".main").append(`<div class="list">
  <div class="icon hide">
    <div class="button" id="check">
      <span class="material-symbols-outlined"> done </span>
    </div>
    <div class="button" id="slash">
      <span>/</span>
    </div>
    <div class="button" id="close">
      <span class="material-symbols-outlined"> close </span>
    </div>
  </div>
  <input class="text"></input>
</div>`);
  $(".text").last().val(value);
  $(".input").val("");
}
$(".input").on("keyup", function (key) {
  if (key.keyCode == 13) {
    action();
  }
});
$(".registration").on("click", function () {
  action();
});
