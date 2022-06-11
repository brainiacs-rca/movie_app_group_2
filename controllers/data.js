// const axios = require("axios");
// exports.skill = async (where) => {
//   const data = await axios.default.get(
//     `https://parseapi.back4app.com/classes/All_Programming_Languages?limit=20&order=ProgrammingLanguage&keys=ProgrammingLanguage${where || ""}`,
//     {
//       headers: {
//         "X-Parse-Application-Id": "XpRShKqJcxlqE5EQKs4bmSkozac44osKifZvLXCL",
//         "X-Parse-Master-Key": "Mr2UIBiCImScFbbCLndBv8qPRUKwBAq27plwXVuv",
//       },
//     }
//   );
//   return data.data.results;
// };
// exports.purposes = [];
// exports.Skills = async (req, res) => {
//     const where = encodeURIComponent(JSON.stringify({
//         "ProgrammingLanguage": {
//             "$gte": req.body.skill
//           }
//       }));
//     const data = await this.skill(where);
//     console.log(data)
// };
