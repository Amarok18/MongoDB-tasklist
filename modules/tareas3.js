const mongoose = require("mongoose");
const tareas3Model = mongoose.model("Tareas3", {
  Tarea: String,
  Prioridad: String,
  Estado: String,
  Responsable: String,
  Fecha_Vencimiento: Date,
});

module.exports = tareas3Model;
