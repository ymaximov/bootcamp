const knex = require('knex')
    const db = knex({
    client: 'pg',
    connection: {
      host : 'lucky.db.elephantsql.com',
      port : 5432,
      user : 'mnxmyuab',
      password : '7BCBMMCBPUE65AWVxNPr1lFdd1acwtV1',
      database : 'mnxmyuab'
    }
  });

  db.raw('SELECT * FROM products')
  .then(res=>{
    console.log((res));
  })
  .catch(e=>{
    console.log(e);
  })

  db('products')
  .select('price')
  .where({id:2})
//   .from('products')
  .then(data=>{
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  })