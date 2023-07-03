import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    identificacion: { type: String, required: true },
    representante: { type: String, required: true },
    curso: { type: String, required: true },
  },
  { timestamps: true },
);

StudentSchema.index({ nombre: 1 }, { unique: true });
StudentSchema.index({ identificacion: 1 }, { unique: true });
