document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Bạn đã đến: ${day}/${month}/${year}`;
    
  
    document.body.classList.add('animate');
    document.querySelector('.container').classList.add('animate');


    setTimeout(() => {
        outputDiv.style.opacity = '1';
    }, 4000);  


    setTimeout(() => {
        window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=Obem39WugRsIgLHQ";  
    }, 7000);  
});
