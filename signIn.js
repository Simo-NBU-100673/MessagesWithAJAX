//gets the button for submit of the form
let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (event) => {

    // Preventing form to submit
    event.preventDefault();

    // Creating XML object to make a POST request to handle.php
    let xhrObject = new XMLHttpRequest();
    xhrObject.open("POST", "handle.php", true);

    // Send the form data through ajax to php
    let form = document.querySelector("form");
    let formData = new FormData(form); // creating new formData object

    // Send the form data to handle.php
    xhrObject.send(formData); // sending the form data to php

    // Response from PHP back-end
    xhrObject.onload = () => {
        if (xhrObject.readyState === XMLHttpRequest.DONE) {
            if (xhrObject.status === 200) {
                let data = xhrObject.response;
                // console.log(data);
                handleResponse(data);
            }
        }
    }

    //remove the input values from the form
    form.reset();
});

function handleResponse(response) {
    let responseDiv = document.querySelector(".response");
    let data = JSON.parse(response);


    if (data.title === "" || data.description === "") {
        let h4 = document.querySelector("h4");
        //set css style for h4 element to display block
        h4.style.display = "block";

        setTimeout(() => {
            h4.style.display = "none";
        }, 5000);
        return;
    }

    //create a div as a last child of responseDiv and add the response to it as innerHTML
    let div = document.createElement("div");

    //create class for the div which will be messageWrapper
    div.classList.add("messageWrapper");

    //create 3 divs for the messageWrapper every one of them will have text which will be from response[0] and response[1] and response[2] because response is php array which has 3 elements send with echo json_encode(response);
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    //add the text to the divs from data[0] and data[1] and data[2]
    div1.innerHTML = data.title;
    div1.classList.add("message");

    div2.innerHTML = data.description;
    div2.classList.add("message");

    div3.innerHTML = data.time;
    div3.classList.add("message");

    //add the divs to the messageWrapper
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);

    responseDiv.appendChild(div);
}

