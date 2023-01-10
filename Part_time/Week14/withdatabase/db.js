const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'lucky.db.elephantsql.com',
      port : 5432,
      user : 'mnxmyuab',
      password : '7BCBMMCBPUE65AWVxNPr1lFdd1acwtV1',
      database : 'mnxmyuab'
    }
  });

  // knex.select('*')
  // .from('country')
  // .then(rows => {
  //   console.log(rows);
  // })
  // .catch(e=>{
  //   console.log(e);
  // })

  knex('users')
  .select('*')
  // .update({email: 'yaniv@yaniv.com'})
  // .where({username: 'aaa'})
  // .insert([
  //   {username: 'yaniv', email: 'yyy@yahoo.com', password: 'fgnos'},
  //   {username: 'ppp', email: 'ppp@pp.com', password: 'fgnogids'}
  // ])
  .del()
  .where({username: 'yaniv'})
  .returning('*')
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  })


  