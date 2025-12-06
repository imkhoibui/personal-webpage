document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("show-hidden");
  
    button.addEventListener("click", function () {
      document.querySelectorAll(".hidden-content").forEach(el => {
        el.hidden = false;            // show the content
      });
  
      button.disabled = true;         // optional: prevent clicking again
      button.innerText = "failed";  // optional: change label
    });
  });
  