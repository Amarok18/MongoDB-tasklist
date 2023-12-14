const mongoose = require("mongoose");
const tareas2Model = mongoose.model("Tareas2", {
  Tarea: String,
  Prioridad: String,
  Estado: String,
  Responsable: String,
  Fecha_Vencimiento: Date,
});

module.exports = tareas2Model;
