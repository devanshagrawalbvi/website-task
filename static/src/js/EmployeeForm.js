// Example JavaScript code (using jQuery for simplicity):
$("#myForm").submit(function (e) {
  e.preventDefault(); // Prevent the default form submission
  var formData = $(this).serialize(); // Serialize the form data

  $.ajax({
    type: "POST",
    url: "/employee/form", // Define the URL for form submission
    data: formData,
    success: function (data) {
      alert("Data is submitted");
    },
  });
});
