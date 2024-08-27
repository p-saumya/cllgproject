// Function to highlight text
function highlightText() {
    var searchTerm = document.getElementById('searchBar').value;
    var elements = document.querySelectorAll('.highlightable');

    elements.forEach(function (element) {
        var text = element.textContent;
        var index = text.toLowerCase().indexOf(searchTerm.toLowerCase());

        if (index !== -1) {
            var highlightedText = text.substring(index, index + searchTerm.length);
            var newText = text.replace(new RegExp(highlightedText, 'gi'), '<mark>' + highlightedText + '</mark>');
            element.innerHTML = newText;
        }
    });
}