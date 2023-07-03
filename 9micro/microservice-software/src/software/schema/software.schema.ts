import * as mongoose from 'mongoose';

export const SoftwareSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  requerimientos: { type: String, required: true },
  idioma: { type: String, required: true },
});
