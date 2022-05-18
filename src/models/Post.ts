import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

export interface IPostAttributes {
    id?: number;
    message: string;
    date: Date;
    userId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IPostInstance extends Model<IPostAttributes>, IPostAttributes {}

const Post = sequelize.define<IPostInstance>("Post", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUID,
        unique: true,
    },
    message: {
        allowNull: true,
        type: DataTypes.TEXT,
    },
    date: {
        allowNull: false,
        type: DataTypes.DATE,
        unique: true,
    },
    userId: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
});

export default Post;
