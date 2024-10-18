document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Bạn đã đến: ${day}/${month}/${year}`;
    
    outputDiv.style.opacity = '0';  
    outputDiv.style.animation = 'none'; 
    setTimeout(() => {
        outputDiv.style.animation = 'timeTravel 2s ease-out forwards';  // Re-apply animation
    }, 10);

    setTimeout(() => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";  // Interstellar Soundtrack link
    }, 5000);  
});
