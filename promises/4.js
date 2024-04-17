// Function to convert string to title case
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

// Fetching titles from the API
function fetchTitles() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const titles = data.map(post => post.title);
            resolve(titles);
        })
        .catch(error => reject(error));
    });
}

// Function to convert titles to title case
function convertToTitleCase(titles) {
    return new Promise((resolve, reject) => {
        const titlesInTitleCase = titles.map(title => toTitleCase(title));
        resolve(titlesInTitleCase);
    });
}

// Main function to execute the process
function main() {
    fetchTitles()
    .then(titles => {
        return convertToTitleCase(titles);
    })
    .then(titlesInTitleCase => {
        console.log("Titles in Title Case:");
        titlesInTitleCase.forEach(title => console.log(title));
    })
    .catch(error => console.error("Error:", error));
}

// Execute main function
main();
