const { table } = require('./airtable');
const dataFormatter = require('./dataFormatter');
module.exports = async (event) => {
    const { id } = JSON.parse(event.body);
    try {
        const deletedTask = await table.destroy(id);
        return dataFormatter(200, deletedTask);
    } catch (err) {
        console.error(err);
        return dataFormatter(500, {});
    }
};
