document.addEventListener("DOMContentLoaded", function() {
    fetch('header.json')
        .then(response => response.json())
        .then(data => {
            const navMain = document.getElementById("nav_main");

            // Add navigation links
            data.links.forEach(item => {
                const link = document.createElement("a");
                link.href = item.href;
                link.textContent = item.text;
                navMain.appendChild(link);
                navMain.appendChild(document.createTextNode(" | ")); // Maintain separators
            });
            navMain.lastChild.remove(); // Remove the last separator

            // Add script element
            const script = document.createElement("script");
            script.src = data.script.src;
            script.crossOrigin = data.script.crossorigin;
            document.body.appendChild(script);
        })
        .catch(error => console.error("Failed to load navigation:", error));
});


document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.json')
    .then(response => response.json())
    .then(data => {
            const footer = document.getElementById("footer");

            // Add navigation links
            const nav = document.createElement("nav");
            data.links.forEach(item => {
                    const link = document.createElement("a");
                    link.href = item.href;
                    link.target = item.target;
                    link.textContent = item.text;
                    nav.appendChild(link);
                    nav.appendChild(document.createTextNode(" | ")); // Maintain separators
            });
            nav.lastChild.remove(); // Remove the last separator
            footer.appendChild(nav);

            // Add footer text with company and certification links
            const paragraph = document.createElement("p");
            paragraph.textContent = data.footer.text + " ";

            const developerLink = document.createElement("a");
            developerLink.href = data.footer.developer.href;
            developerLink.textContent = data.footer.developer.text;
            paragraph.appendChild(developerLink);

            data.footer.certifications.forEach((cert, index) => {
                    paragraph.appendChild(document.createTextNode(", "));
                    const certLink = document.createElement("a");
                    certLink.href = cert.href;
                    certLink.textContent = cert.text;
                    paragraph.appendChild(certLink);
            });

            footer.appendChild(paragraph);
    })
    .catch(error => console.error("Failed to load footer:", error));
});

// Function to validate using external script
function validateWithScript() {
    const script = document.createElement("script");
    script.src = "https://lint.page/kit/4d0fe3.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
}