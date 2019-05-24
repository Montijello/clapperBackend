exports.seed = function(knex, Promise) {
  return knex('films').insert([
    {id:1, title:"Murderball", year: 2008},
    {id:2, title:"Fear and Loathing in Las Vegas", year: 1993},
    {id:3, title:"The Wild Bunch", year: 1969},
    {id:4, title:"War Games", year: 1986},
    {id:5, title:"Ratatouille", year: 2007},
  ])
  .then(() => {
    return knex.raw("SELECT setval('films_id_seq', (SELECT MAX(id) FROM films));")
  })
};
