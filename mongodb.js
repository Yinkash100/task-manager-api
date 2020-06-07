//CRUD with Mongodb

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id.length);
// console.log(id.toHexString());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connnect to database");
    }
    // console.log("Connected Correctly");
    const db = client.db(databaseName);
    //  db.collection("users").insertOne(
    //    {
    //      _id: id,
    //      name: "Andromeda",
    //      age: 27,
    //    },
    //    (error, result) => {
    //      if (error) {
    //        return console.log("Unable to insert user");
    //      }
    //      console.log("inserted", result.ops);
    //    }
    //  );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "plutonium",
    //       age: 2,
    //     },
    //     {
    //       name: "MI Abaga",
    //       age: 2,
    //     },
    //     {
    //       name: "promise",
    //       age: 30,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    //  db.collection("tasks").insertMany(
    //    [
    //      {
    //        name: "Go collect library card",
    //        description:
    //          "Go tho the library, greet the people there and tell them that your mummy said you should cllect her library card for her.",
    //        completed: true,
    //      },
    //      {
    //        name: "Cook Beans",
    //        description:
    //          "Gbe Ewa Kana. Ewa Sokoto ni o. kii'n se ewa ti e maa'n k ninu code",
    //      },
    //      {
    //        name: "Rest",
    //        description: "Leave what u are doing and sleep",
    //        completed: false,
    //      },
    //    ],
    //    (error, result) => {
    //      if (error) {
    //        return console.log("Unable to insert tasks");
    //      }
    //      console.log(result.ops);
    //    }
    //  );

    //  db.collection("tasks").findOne(
    //    { _id: new ObjectID("5ed1c5869a48e91ff8605e44") },
    //    (error, task) => {
    //      if (error) {
    //        return console.log("Unable to fetch");
    //      }
    //      console.log("Task", task);
    //    }
    //  );

    //  db.collection("users")
    //    .find({ name: "Andromeda" })
    //    .toArray((error, users) => {
    //      console.log([users]);
    //    });

    //  db.collection("users")
    //    .find({ name: "Andromeda" })
    //    .count((error, count) => {
    //      console.log(count);
    //    });

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("tasks")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5ed1c5869a48e91ff8605e44"),
    //     },
    //     {
    //       $set: {
    //         completed: false,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       description: "",
    //     },
    //     {
    //       $set: {
    //         felacio: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("users")
      .deleteOne({
        age: 30,
        name: "promise",
      })
      .then((result) => {
        console.log("deleted", result.deletedCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
