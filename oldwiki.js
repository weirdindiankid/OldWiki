// Check if the current page is a Wikipedia page and doesn't already use Vector skin
if (window.location.hostname.includes('wikipedia.org') && !window.location.href.includes('useskin=vector')) {
    // Check if there are already query parameters in the URL
    if (window.location.href.includes('?')) {
        // Append the vector skin parameter with an ampersand
        window.location.replace(document.URL + '&useskin=vector');
    } else {
        // Add the vector skin parameter with a question mark
        window.location.replace(document.URL + '?useskin=vector');
    }
}
