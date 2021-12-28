const dataFormatter = require('./helpers/dataFormatter');
const getTasks = require('./helpers/getTasks');
const createTask= require('./helpers/createTask');
const deleteTask= require('./helpers/deleteTask');
const updateTask= require('./helpers/updateTask');
exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return await getTasks(event);
    } else if (event.httpMethod === 'POST') {
        return await createTask(event);
    } else if (event.httpMethod === 'PUT') {
        return await updateTask(event);
    } else if (event.httpMethod === 'DELETE') {
        return await deleteTask(event);
    } else {
        return dataFormatter(405, {});
    }
};
