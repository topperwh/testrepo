var button = document.getElementById('button');

button.onclick = function() {
    var div = document.getElementById('play');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};