exports.seed = function(knex, Promise) {
  return knex('accounts').insert([
    {id:1, username:"domino", password:"$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK"},
  ])
  .then(() => {
    return knex.raw("SELECT setval('accounts_id_seq', (SELECT MAX(id) FROM accounts));")
  })
};

