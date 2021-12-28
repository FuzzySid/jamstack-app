const { table } = require('./airtable');
const dataFormatter = require('./dataFormatter');
module.exports = async (event) => {
    try {
        const tasks = await table.select().firstPage();
        const formattedTasks = tasks.map((course) => ({
            id: course.id,
            ...course.fields,
        }));
        return dataFormatter(200, formattedTasks);
    } catch (err) {
        console.error(err);
        return dataFormatter(500, {});
    }
};
