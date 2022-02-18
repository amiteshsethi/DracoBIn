var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')
var input = document.querySelectorAll('.inputing')

// function alert(message, type) {
//     var wrapper = document.createElement('div')
//     wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

//     alertPlaceholder.append(wrapper)
//     return
// }

if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
        alert('Submitted , Key:secret')
        // alert('Congrats ur DracoBin has been Created.', 'success');
        // input.innerText = "";
    })
}

async function encryptData() {
    try {
        const url = 'https://classify-web.herokuapp.com/api/encrypt';
        const jsonData = JSON.stringify({ 
            data: "Hello world!", key: "secret"
        });
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: jsonData
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


