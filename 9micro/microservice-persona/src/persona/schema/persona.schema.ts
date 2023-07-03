import * as mongoose from 'mongoose';

export const PersonaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    identificacion: { type: String, required: true },
  },
  { timestamps: true },
);

PersonaSchema.index({ identificacion: 1 }, { unique: true });
