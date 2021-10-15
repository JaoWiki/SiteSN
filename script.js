function decidir() {
    var b = parseInt(Math.random() * 10)
    
    if (b >= 5) {
        var s = document.getElementById("image").src = "img/s.png"
        var audio = new Audio("audio/ss.mp4");
        audio.play();
        
    }
    else if (b < 5) {
        var n = document.getElementById("image").src = "img/n.png"
        var audio = new Audio("audio/nn.mp4");
        audio.play();
    }
    else {
        alert("Deu alguma coisa errado")
    }
}



