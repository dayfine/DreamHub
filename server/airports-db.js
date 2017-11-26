const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost:5432/airports');

client.connect(err => console.log(err));

function query(sql, params, cb) {
  return new Promise(function(resolve, reject) {
    client.query(sql, params, function(err, result) {
      if (err) return reject(err);
      resolve(result);
    })
  })
}

function sync(cb) {
  const sql = require('./airports-sql');
  return query(sql, null);
}

function list() {
  var sql = `
    SELECT id, icao_code, iata_code, name, city, country
    FROM airports
  `;
  return query(sql, null)
    .then(function(result){
      return result.rows;
    });
}

// function find (properties) {
//   var sql = `
//     SELECT id, icao_code, iata_code, name, city, country
//     FROM airports
//   `;
//   var params;
//   console.log(properties)

//   if (properties.name){
//     sql = `${sql} WHERE airports.name = $1;`;

//     params = [ properties.name ];
//   }

//   if (properties.city){
//     sql = `${sql} WHERE airports.city = $1;`;

//     params = [ properties.city ];
//   }

//   if (properties.iata_code){
//     sql = `${sql} WHERE airports.iata_code = $1;`;

//     params = [ properties.iata_code ];
//   }

//   return query(sql, params)
//     .then(function(result){
//       console.log(result)
//       return result.rows;
//     });
// }

module.exports = { sync, list };
