const fs = require('fs')

const saveDataFile = (DB) => {
  fs.writeFileSync('./db.json'.JSON.stringify(DB, null, 2), {
    encoding: 'utf-8'
  })
}

module.exports = { saveDataFile }
