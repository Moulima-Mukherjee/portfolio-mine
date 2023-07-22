const texts = [
    " Java Programmer.",
    " Web Developer.",
    " Database Designer.",
    " Poem Writer.",
    " Great Leader.",
    " Active Learner.",
    " Graphic Designer.",
    " Youtuber.",
  ];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  
  function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
  
    if (index < currentText.length) {
      letter = currentText.slice(0, ++index);
    } else {
      letter = currentText.slice(0, index);
    }
  
    document.getElementById("typing-animation").textContent = letter + "|"; // Add text cursor
  
    if (letter.length === currentText.length) {
      setTimeout(backspace, 2000); // Delay before starting the backspacing animation
    } else if (index === currentText.length) {
      setTimeout(type, 500); // Delay before starting the next typing animation
    } else {
      setTimeout(type, 100); // Adjust typing speed (in milliseconds)
    }
  }
  
  function backspace() {
    const currentLength = currentText.length;
  
    if (index > 0) {
      letter = currentText.slice(0, --index);
    } else {
      letter = currentText.slice(0, index);
    }
  
    document.getElementById("typing-animation").textContent = letter + "|"; // Add text cursor
  
    if (index === 0) {
      count++;
      setTimeout(type, 500); // Delay before starting the next typing animation
    } else {
      setTimeout(backspace, 50); // Adjust backspacing speed (in milliseconds)
    }
  }
  
  type(); // Start the typing animation
  