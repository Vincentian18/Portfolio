// Typing Animation
const typingElement = document.querySelector('.typing');
const textArray = ["Thakur Vivek Bimlesh", "Web Developer", "Tech Enthusiast"];
let typingIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[typingIndex].length) {
    typingElement.textContent += textArray[typingIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[typingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    typingIndex++;
    if (typingIndex >= textArray.length) typingIndex = 0;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, 500);
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields!");
  } else {
    alert("Thank you for contacting me, " + name + "!");
    contactForm.reset();
  }
});
