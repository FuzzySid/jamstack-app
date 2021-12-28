const { table } = require('./airtable');
const dataFormatter = require('./dataFormatter');
module.exports = async (event) => {
    const { id, ...fields } = JSON.parse(event.body);
    try {
        const updatedTask = await table.update([{ id, fields }]);
        return dataFormatter(200, updatedTask);
    } catch (err) {
        console.error(err);
        return dataFormatter(500, {});
    }
};
