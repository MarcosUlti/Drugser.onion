function searchGoogle() {
    var searchTerm = document.getElementById("searchInput").value;
    if (searchTerm.trim() !== "") {
        var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
        window.location.href = searchUrl;
    }
}