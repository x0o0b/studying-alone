$(".list").hover(
  function () {
    $(this).css("background-color", "rgba(255, 255, 255, 0.3)");
    $(this).children(".icon").removeClass("hide");
    $(this).children(".text").addClass("hide");
    $(this)
      .find("#check")
      .on("click", function () {
        $(this).parent(".icon").next(".text").addClass("text-line");
      });
    $(this)
      .find("#close")
      .on("click", function () {
        $(this).closest(".list").remove();
      });
  },
  function () {
    $(this).css("background-color", "rgba(255, 255, 255, 0.7)");
    $(this).children(".icon").addClass("hide");
    $(this).children(".text").removeClass("hide");
  }
);

var val = $(".input").val();
$(".registration").on("click", function () {
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
  <p class="text">${val}</p>
</div>`);
});
