document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("#navbar li a");
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action of the link
      // Remove active class from all links
      links.forEach(function (link) {
        link.classList.remove("active");
      });
      // Add active class to clicked link
      event.target.classList.add("active");
    });
  });
});
