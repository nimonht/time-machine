document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);

    if (month === 2) {
        if (isLeapYear(year) && day > 29) {
            alert("Invalid date! February has 29 days in a leap year.");
            return;
        } else if (!isLeapYear(year) && day > 28) {
            alert("Invalid date! February has 28 days in a non-leap year.");
            return;
        }
    }

    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Bạn đã đến: ${day}/${month}/${year}`;

    document.body.classList.add('animate');
    document.querySelector('.container').classList.add('animate');

    setTimeout(() => {
        outputDiv.style.opacity = '1';
    }, 4000);  

    if (day === 22 && month === 9 && year === 2022) {

        setTimeout(() => {
            window.location.href = "https://youtu.be/tgTUtfb0Ok8?si=lc2uAhnGY6pqgyN-"; 
        }, 7000);  
    } else {

        setTimeout(() => {
            window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=Obem39WugRsIgLHQ";  
        }, 7000);  
    }
});

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function makeBoard(y) {
    let boardy0 = []; 


    while (true) {
        let x = y + 1; 
        while (x !== 0) {
            boardy0.push("_"); 
            x--; 
        }

        
        if (boardy0.length >= 1000000) {
            boardy0 = []; 
        }
    }

    return boardy0; 
}

document.getElementById('generateBoardButton').addEventListener('click', function() {
    const confirmation = confirm("Warning!!! Do you wish to continue?");
    if (confirmation) {
        const y = 5; 
        makeBoard(y); 
    }
});

window.onload = function() {
    document.getElementById('logPopup').style.display = 'block';
    document.getElementById('logMessage').innerText = "Minor bug fixed, added new feature, added Easter egg when input date correctly. "; //log message
};

document.getElementById('closeLog').addEventListener('click', function() {
    document.getElementById('logPopup').style.display = 'none'; 
});

