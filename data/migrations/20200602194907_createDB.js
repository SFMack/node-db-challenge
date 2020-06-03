exports.up = function (knex) {
  return (
    knex.schema
      // projects
      .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.string("description");
        tbl.boolean("completed").defaultTo(false);
      })

      // tasks
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("description").notNullable();
        tbl.string("notes");
        tbl.boolean("completed").defaultTo(false);
        tbl
          .integer("projects_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects");
      })

      // resources
      .createTable("resources", tbl => {
        tbl.increments();
        tbl.string("name").notNullable();
        tbl.string("description");
      })

      // bridge table
      .createTable("project_resources", tbl => {
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects");

        tbl
          .integer("resources_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources");

        // combine the id numbers and make primary key
        tbl.primary(["project_id", "resources_id"]);
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
