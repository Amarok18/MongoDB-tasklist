const express = require("express");
const connectDB = require("./db.js")
const tareas1Model = require("./modules/tarea.js")
const tareas2Model = require("./modules/tareas2.js")
const tareas3Model = require("./modules/tareas3.js")
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/tareas", async (req, res) => {
  const tareas = await tareas1Model.find({})
  return res.send({tareas:tareas});
});
app.get("/tareas2", async (req, res) => {
  const tareas2 = await tareas2Model.findOne({Tarea:"Entregables MongoDb"});
  return res.send({ tareas2: tareas2 });
});
app.get("/tareas3", async (req, res) => {
  const tareas3 = await tareas3Model.find({Prioridad:"Baja"});
  return res.send({ tareas3: tareas3 });
});
app.get("/eliminar1", async (req, res) => {
  const tareas = await tareas1Model.deleteOne({Estado:"Pendiente"})
  return res.send(tareas);
});
app.get("/eliminar2", async (req, res) => {
  const tareas2 = await tareas2Model.deleteOne({Tarea:"Entregables MongoDb"});
  return res.send(tareas2 );
});
app.get("/eliminar3", async (req, res) => {
  const tareas3 = await tareas3Model.deleteOne({Prioridad:"Baja"});
  return res.send(tareas3);
});
app.get("/agregartareas1", async (req, res) => {
  const tareas = new tareas1Model({
    Tarea: "APEX",
    Prioridad: "Alta",
    Estado: "Completado",
    Responsable: "Jose",
    Fecha_Vencimiento: new Date(2023, 11, 17),
  });
  await tareas.save();
  res.send({tareas:tareas})
});
app.get("/agregartareas2", async (req, res) => {
 const tareas2 = new tareas2Model({
   Tarea: "CRUD",
   Prioridad: "Media",
   Estado: "En Progreso",
   Responsable: "Jose",
   Fecha_Vencimiento: new Date(2023, 11, 17),
 });
 await tareas2.save();
 res.send({ tareas2: tareas2 });
});
app.get("/agregartareas3", async (req, res) => {
  const tareas3 = new tareas3Model({
    Tarea: "Soccer",
    Prioridad: "Baja",
    Estado: "Completado",
    Responsable: "Jose",
    Fecha_Vencimiento: new Date(2023, 11, 17),
  });
  await tareas3.save();
  res.send({ tareas3: tareas3 });
});
app.get("/updatetareas", async (req, res) => {
  const tareas = await tareas1Model.updateOne({Estado: "Completado"},{"$set":{Tarea:"Bases de Datos"}});
  return res.send({ tareas: tareas });
});
app.get("/updatetareas2", async (req, res) => {
  const tareas2 = await tareas2Model.updateMany(
    { Prioridad: "Media" },
    { $set: { Estado: "Pendiente" } }
  );
  return res.send({ tareas2: tareas2 });
});
app.get("/updatetareas3", async (req, res) => {
  const tareas3 = await tareas3Model.updateOne({Tarea: "React Chakra Ui"},{"$set":{Estado:"Completado"}});
  return res.send({ tareas3: tareas3 });
});
app.listen(port, () => {
  connectDB();
  console.log(`Listening on port ${port}`);
});
