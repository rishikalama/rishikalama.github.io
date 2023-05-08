//alert('AJAX!')

// date type of JASON:
// STRING: "Hello"
// number: 12
// booleans: true false
// Array
// Object

// JSON.parse()

// JSON.stringify()
let btn = document.querySelector('#btn');
let msg = document.getElementById('msg');

btn.addEventListener('click', function() {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://api.spoonacular.com/recipes/complexSearch?apiKey=7d1b48a04102400fa28627737fbbc5e8&query=italian&number=19');
    myRequest.onload = function() {
        let myData = myRequest.responseText;
        let myJSData = JSON.parse(myData);
        showInHtml(myJSData.results);
    }
    myRequest.send();
});

function showInHtml(info) {
    //msg.innerHTML = ''; // Clear any existing content in the div
    for (let i = 0; i < info.length; i++) {
        // Create HTML elements to display the title and servings
        let titleEl = document.createElement('h2');
        titleEl.textContent = info[i].title;
        let servingsEl = document.createElement('img');
        servingsEl.src = info[i].image;
        // Append the elements to the msg div
        msg.appendChild(titleEl);
        msg.appendChild(servingsEl);
    }
}




// async function grabInfo() {
//     const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=7d1b48a04102400fa28627737fbbc5e8');
//     const info = await response.json(); // Use json() method to parse the response as JSON
//     console.log(info);
// }