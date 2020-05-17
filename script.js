function goToConnect(el) {

    setTimeout(function() {
        window.location = "#connect";
    }, 299);
}

let jokeRequest = new XMLHttpRequest();
jokeRequest.open("GET", "https://official-joke-api.appspot.com/jokes/programming/random");
jokeRequest.send();
jokeRequest.onload = () => {
    if (jokeRequest.status == 200) {
        joke = JSON.parse(jokeRequest.response);
        setup = document.querySelector(".setup");
        setup.innerText = joke[0].setup;
        setup = document.querySelector(".punchline");
        setup.innerText = joke[0].punchline;

    } else {
        console.log(`error ${jokeRequest.status} ${jokeRequest.statusText}`);
    }
}