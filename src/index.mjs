//=============================================================================//
// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";
//=============================================================================//

//=============================================================================//
async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  //--------------------------------------------------------------------------//
  let dbInUse = await central(id);
  //--------------------------------------------------------------------------//

  return Promise.all([vault(id), dbs[dbInUse](id)])
    .then((x) => {
      console.log(
        "========== Retrieve users data from the vault & dbs object using 'id' =========="
      );
      return {
        id: id,
        name: x[0].name,
        username: x[1].username,
        email: x[0].email,
        address: x[0].address,
        phone: x[0].phone,
        website: x[1].website,
        company: x[1].company,
      };
    })
    .catch((err) => {
      console.log(err);
    });
  // return result;
}
//---------------------------------------------------------------------------//
const userData = getUserData(8);

userData.then((data) => {
  console.log(data);
});
//---------------------------------------------------------------------------//

//============================== Practice code ==============================//
// async function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3,
//   };

//--------------------------------------------------------------------------//
// let dbInUse = await central(id);
// console.log(dbInUse);
// dbs[dbInUse](id).then((x) => {
//   console.log(x);
// });

// const userVaultInfo = await vault(id);
// console.log(userVaultInfo);
//--------------------------------------------------------------------------//
// This promise retrieves from the imported "vault" function
// with an object containing the user's name, email, address, and phone data.
// Promise.all([vault(id)])
//   .then((x) => {
//     console.log(
//       "========== Retrieve users data from an object using 'all' =========="
//     );
//     console.log(x[0]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//--------------------------------------------------------------------------//
// This promise retrieves from any of the "dbs" function
// The user's username, website, and company data associated with the id
// Promise.any([dbs.db1(id), dbs.db2(id), dbs.db3(id)])
//   .then((x) => {
//     console.log(
//       "============= Retrieve users data from dbs using 'any' ============="
//     );
//     console.log(x);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//--------------------------------------------------------------------------//
// Promise.resolve(dbs.db1(id))
//   .then((x) => {
//     console.log("==== Retrieve users data from dbs using 'resolve' ====");
//     console.log(x);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//--------------------------------------------------------------------------//
// This promise retrieves from the imported "central" function
// with the database associated with the id entered
// Promise.any([central(id)])
//   .then((x) => {
//     console.log(
//       "== Retrieves the database from the Central function using 'any' =="
//     );
//     console.log(x);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }
//============================================================================//

//============================================================================//
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
// console.log("It works");
