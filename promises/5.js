// Function to fetch todos of a user by user ID
function fetchUserTodos(userId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(response => response.json())
        .then(todos => {
            resolve(todos);
        })
        .catch(error => reject(error));
    });
}

// Function to display todos
function displayTodos(todos) {
    console.log("User Todos:");
    todos.forEach(todo => {
        console.log(`[${todo.id}] ${todo.title} - ${todo.completed ? 'Completed' : 'Incomplete'}`);
    });
}

// Main function to execute the process
function main(userId) {
    fetchUserTodos(userId)
    .then(todos => {
        displayTodos(todos);
    })
    .catch(error => console.error("Error:", error));
}

// Example usage
const userId = 1; // Replace with the desired user ID
main(userId);
