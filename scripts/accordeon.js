$(document).ready(function () {
  $(".set > span").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
      $(".set > span span").removeClass("minus").addClass("plus");
    } else {
      $(".set > span span").removeClass("minus").addClass("plus");
      $(this).find("span").removeClass("plus").addClass("minus");
      $(".set > span").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this).siblings(".content").slideDown(200);
    }
  });
});
