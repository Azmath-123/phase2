async function createTask(body, userData) {
    try {
        console.log('Inside taskService');
        console.log(body, userData);
        //Read the File
        //Find the respective user
        //if user is not found, invalid / Bad Request
        //Write an Algorithm to generate a random string of length 20
        let taskPayload = {
            name: req.body.name,
            taskId: 'randomString',
            isCompleted: false
        }
        //findUser.tasks push the latest task 
        //Shallow Copy and Deep Copy
        return {
            message: "Task has been added successfully",
            status: true,
            statusCode: 200
        }
    } catch (error) {
        console.log('Inside taskService : createTask method, error while creating a task');
        return {
            message: "Internal Server Error",
            status: false,
            statusCode: 500
        }
    }
}
export default { createTask };