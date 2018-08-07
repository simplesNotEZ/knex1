
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resolution').del()
    .then(function () {
      // Inserts seed entries
      return knex('resolution').insert([
        {
          dueDate: "1997-02-01",
          resolution: "Go skiing"
        },
        {
          dueDate: "1997-05-01",
          resolution: "Do stand-up"
        },
        {
          dueDate: "1997-09-01",
          resolution: "Start knitting"
        }
      ]);
    });
};
