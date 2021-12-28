const { table } = require('./airtable');
const dataFormatter = require('./dataFormatter');
module.exports = async (event) => {
    const fields = JSON.parse(event.body);
    try {
        const createdTask = await table.create([{ fields }]);
        return dataFormatter(200, createdTask);
    } catch (err) {
        console.error(err);
        return dataFormatter(500, {});
    }
};
