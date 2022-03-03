const hamburgerButton = document.getElementById("hamburger");

const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var formStatus = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        formStatus.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            formStatus.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            formStatus.innerHTML =
              "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch(() => {
      formStatus.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
