const mongoose = require("mongoose");
const tareas1Model = mongoose.model('Tareas',{
    Tarea: String,
    Prioridad: String,
    Estado: String,
    Responsable: String,
    Fecha_Vencimiento: Date
})

module.exports = tareas1Model;