import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";

const todoModel = sequelize.define("Todo", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default todoModel;
