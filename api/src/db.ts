// import dotenv from 'dotenv';
// import { Sequelize } from 'sequelize';
// import fs from 'fs';
// import path from 'path';

// dotenv.config();
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`, {
//   logging: false, 
//   native: false, 
// });

// const basename = path.basename(__filename);
// const modelDefiners: any[] = [];

// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)).default);
//   });

// modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

// const entries = Object.entries(sequelize.models);
// const capsEntries = entries.map(([key, value]) => [key[0].toUpperCase() + key.slice(1), value]);
// sequelize.models = Object.fromEntries(capsEntries);

// // Add associations if needed
// // For example:
// // const { Recipe, Diet } = sequelize.models;
// // Recipe.belongsToMany(Diet, {through: "RecipeDiet"});
// // Diet.belongsToMany(Recipe, {through: "RecipeDiet"});

// export default {
//   ...sequelize.models,
//   conn: sequelize,
// };