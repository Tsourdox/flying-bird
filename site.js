
var position = { x: 50, y: 50};
var speed = { x: 0, y: 0};
var increaseSpeedX = true;

function initSite() {
    var bird = document.querySelector('img');

    setInterval(function() {
        // Update speed
        var prevSpeedX = speed.x; 
        speed.x += (Math.random() * (increaseSpeedX ? 1 : -1)) / 100;
        speed.y += (Math.random() - 0.5) / 10;
        
        // Limit speed to -1 and 1
        if (speed.x > 1) {
            speed.x = 1;
            increaseSpeedX = false;
        }
        else if (speed.x < -1) {
            speed.x = -1;
            increaseSpeedX = true;
        }
        if (speed.y > 1) {
            speed.y = 1;
        }
        else if (speed.y < -1) {
            speed.y = -1;
        }

        // Flip bird horizontally when flying direction changes
        if (prevSpeedX > 0 && speed.x <= 0) {
            bird.classList.add("flipped");
        }
        else if (prevSpeedX < 0 && speed.x >= 0) {
            bird.classList.remove("flipped");
        }
        
        // Update position
        position.x += speed.x;
        position.y += speed.y;

        // Move bird to oposite side when flying off screen
        if (position.x > 110) {
            position.x = -10;
        }
        else if (position.x < -10) {
            position.x = 110;
        }
        if (position.y > 110) {
            position.y = -10;
        }
        else if (position.y < -10) {
            position.y = 110;
        }
        
        // Set new position of img
        bird.style.left = "" + position.x + "%"; 
        bird.style.top = "" + position.y + "%"; 
    }, 20);
}