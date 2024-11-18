function goToNextQuestion() {
    window.location.href = "5.html"; // Replace with the URL of the next question page
}
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  