window.addEventListener('scroll', function() {
    var scrollUpButton = document.getElementById('scrollUpButton');
    if (window.scrollY > 100) { // Adjust this value as needed
      scrollUpButton.classList.add('show');
    } else {
      scrollUpButton.classList.remove('show');
    }
  });
  
  document.getElementById('scrollUpButton').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });