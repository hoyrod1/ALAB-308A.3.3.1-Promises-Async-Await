//=============================================================//
// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";
//=============================================================//

//=============================================================//
async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  //   let waiting = await central(id);
  //   console.log(waiting);

  //--------------------------------------------------------------------------//
  // This promise retrieves from the imported "vault" function
  // with an object containing the user's name, email, address, and phone data.
  Promise.all([vault(id)])
    .then((x) => {
      console.log("================== All Vault =====================");
      console.log(x[0]);
    })
    .catch((err) => {
      console.log(err);
    });
  //--------------------------------------------------------------------------//
  // This promise retrieves from any of the "dbs" function
  // The user's username, website, and company data associated with the id
  Promise.any([dbs.db1(id), dbs.db2(id), dbs.db3(id)])
    .then((x) => {
      console.log("================== Any dbs =====================");
      console.log(x);
    })
    .catch((err) => {
      console.log(err);
    });
  //--------------------------------------------------------------------------//
  Promise.resolve(dbs.db1(id))
    .then((x) => {
      console.log("================== Resolve dbs =====================");
      console.log(x);
    })
    .catch((err) => {
      console.log(err);
    });

  //--------------------------------------------------------------------------//
  // This promise retrieves from the imported "central" function
  // with the database associated with the id entered
  Promise.any([central(id)])
    .then((x) => {
      console.log("================== Any Central =====================");
      console.log(x);
    })
    .catch((err) => {
      console.log(err);
    });
}
//=============================================================//

//=============================================================//
// function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3,
//   };
// try{
// let waiting = await dbs.db1(id);
// console.log(waiting);
// }catch{
// }
// console.log(dbs.db1(id));

// Promise.any([dbs.db1(id), dbs.db2(id), dbs.db3(id)])
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   Promise.resolve(dbs.db1(id))
//     .then((x) => {
//       console.log(x);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
//=============================================================//

//=============================================================//
// async function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3,
//   };

//   try {
//     let waiting = await dbs.db1(id);
//     console.log(waiting);
//   } catch {
//     console.log(err);
//   }
//   console.log(dbs.db1(id));

// Promise.any([dbs.db1(id), dbs.db2(id), dbs.db3(id)])
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.resolve(dbs.db1(id))
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }
//=============================================================//
getUserData(4);
// console.log("It works");
