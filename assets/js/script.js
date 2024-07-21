const errorAlertElement = document.getElementById("error-alert");

document.getElementById("btn-submit").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const fullname = document.getElementById("fullname").value;
  const message = document.getElementById("message").value;
  const successToast = new bootstrap.Toast(
    document.getElementById("success-toast")
  );

  if (email && fullname && message) {
    successToast.show();
    clearForm();
  } else {
    errorAlertElement.classList.remove("d-none");
  }
});

document.getElementById("clear").addEventListener("click", function () {
  clearForm();
});

const clearForm = () => {
  document.getElementById("email").value = "";
  document.getElementById("fullname").value = "";
  document.getElementById("message").value = "";
  errorAlertElement.classList.add("d-none");
};
