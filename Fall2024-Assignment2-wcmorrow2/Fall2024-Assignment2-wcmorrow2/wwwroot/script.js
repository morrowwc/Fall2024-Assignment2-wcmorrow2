function apiSearch() {
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
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
}
function displayTime() {
    const now = new Date();
    document.getElementById('time').innerText = `Current time is: ${now.toLocaleTimeString()}`;
}