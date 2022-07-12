//Hides intro page and shows question 1-------------------------------------------------------------------------

function updateProfile() {
    document.getElementById("inputForm").style.display = "inline-block";
    document.getElementById("outputForm").style.display = "none";
  }

  function submitHandler() {
    document.getElementById("inputForm").style.display = "none";
    document.getElementById("outputForm").style.display = "inline-block";
  }