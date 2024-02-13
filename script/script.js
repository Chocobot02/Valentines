document.addEventListener("DOMContentLoaded", function() {
    function performActions() {
      let audio = document.getElementById('jejemusic');
      audio.play();
      
      var container = document.querySelector('.container');
      container.classList.toggle('flip');
      container.classList.toggle('dissapear');

      setTimeout(function() {
        let mail = document.querySelector('.mail');
        mail.style.display = 'none';
      }, 1200);

      setTimeout(function() {
        var popup = document.getElementById("content");
        popup.style.display = "block";
      }, 1000);

      function startRaining() {
        const container = document.getElementById("bg-info");
        const numRaindrops = 120;
        const images = ['./resources/images/flower1.jpg',
        './resources/images/flower2.jpg',
         './resources/images/flower3.jpeg',
          './resources/images/flower4.jpeg',
           './resources/images/flower5.jpeg'];

        for (let i = 0; i < numRaindrops; i++) {
          const raindrop = document.createElement("div");
          raindrop.classList.add("raindrop");
          
          // Randomly select an image path
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImagePath = images[randomIndex];
          raindrop.style.backgroundImage = `url('${randomImagePath}')`;
          
          const delay = Math.random() * 3;
          const duration = Math.random() * 4 + 2; 
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          
          raindrop.style.left = `${x}px`;
          raindrop.style.top = `${y}px`;
          raindrop.style.animationDelay = `${delay}s`;
          raindrop.style.animationDuration = `${duration}s`;
          
          container.appendChild(raindrop);
        }
      }
      
      setTimeout(startRaining, 1500);
    }
let action = document.getElementById("jeje");
action.addEventListener("click", performActions);
})