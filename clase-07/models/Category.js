import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Category", categorySchema);

/**
 * name
 * - string
 * - requerido
 * - min: 2
 * - max: 50
 * - trim
 *
 * description
 * - string
 * - min: 5
 *
 */
