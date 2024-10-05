import CONFIG from './config.js';

export function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: CONFIG.API_ENDPOINT + '?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': CONFIG.API_KEY
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (var i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }
            $('#searchResults').show();

            $('#searchResults').html(results);
        })
        .fail(function () {
            alert('error');
        });
}
export function imfeelinglucky() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: CONFIG.API_ENDPOINT + '?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': CONFIG.API_KEY
        }
    })
        .done(function (data) {
            if (data.webPages && data.webPages.value.length > 0) {
                // Redirect to the first search result URL
                window.location.href = data.webPages.value[0].url;
            } else {
                alert('No results found');
            }
        })
        .fail(function () {
            alert('error');
        });
}

export function displayTime() {
    const now = new Date();
    document.getElementById('time').innerText = `Current time is: ${now.toLocaleTimeString()}`;
    $('#time').show();
    $('#time').dialog();

}
export function changeBackground() {
    var images = ['backsplash1.jpg', 'backsplash2.jpg', 'backsplash3.jpg', 'backsplash4.jpg'];
    var imagesAvailible = [];
    images.forEach((image) => {
        if (image != document.body.style.backgroundImage.slice(15, -2)){
            imagesAvailible.push(image);
        }
    });
    console.log(document.body.style.backgroundImage.slice(15, -2));
    console.log(imagesAvailible.length);
    
    // Select a random image
    const randomImage = images[Math.floor(Math.random() * imagesAvailible.length)];
    // Set the background image of the body
    document.body.style.backgroundImage = `url('../assets/${randomImage}')`;
}


// Attach to the global window object
window.apiSearch = apiSearch;
window.imfeelinglucky = imfeelinglucky;
window.displayTime = displayTime;
window.changeBackground = changeBackground;