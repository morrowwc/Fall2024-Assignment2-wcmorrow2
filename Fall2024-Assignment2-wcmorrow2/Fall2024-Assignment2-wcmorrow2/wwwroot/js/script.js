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
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
}
export function displayTime() {
    const now = new Date();
    document.getElementById('time').innerText = `Current time is: ${now.toLocaleTimeString()}`;
    $('#time').show();

}

// Attach to the global window object
window.apiSearch = apiSearch;
window.displayTime = displayTime;