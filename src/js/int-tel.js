const input = document.querySelector("#phone");
      window.intlTelInput(input, {
        separateDialCode: true,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
      });