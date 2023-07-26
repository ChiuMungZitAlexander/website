document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    document.getElementById("loader-container").style.display = "none";
  }
};
