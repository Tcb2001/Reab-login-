document.addEventListener("DOMContentLoaded", function() {
    
    setTimeout(function() {
        const splashScreen = document.getElementById('splash-screen');
        const selectionScreen = document.getElementById('selection-screen');

        
        splashScreen.style.opacity = 0;

       
        setTimeout(function() {
            splashScreen.classList.add('d-none'); 
            selectionScreen.classList.remove('d-none'); 
            selectionScreen.style.display = "block"; 
        }, 500); // 
    }, 3000); 
});
