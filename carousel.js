// Selecting the slider container and buttons
const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const nextQuestionBtn = document.querySelector('.next-question-btn');

// Function to move the carousel items
function activate(e) {
  const items = document.querySelectorAll('.item');
  
  // Move the first item to the end when next button is clicked
  if (e.target.matches('.next')) {
    slider.append(items[0]);
  }
  // Move the last item to the beginning when prev button is clicked
  else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);
  }
}

    window.onload = function() {
      var audio = document.getElementById('bgm');
      audio.muted = false;  // Unmute the audio after the page loads
      audio.play();}

// Event listener for carousel navigation buttons (next and prev)
document.addEventListener('click', activate, false);

// Function for Next Question button click
nextQuestionBtn.addEventListener('click', function() {
  // Optional delay to ensure smooth transition before redirect
  setTimeout(function() {
    window.location.href = '3.html';
  }, 500); // 0.5 seconds delay for smooth transition
});
