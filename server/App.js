import express from "express"
import mongoose from "mongoose"
import BarberController from "./controllers/barber.js"

const app = express()
app.use(express.json())

// //Barber
// app.post("/api/barber", BarberController.add)
// app.get("/api/barber", BarberController.getAll)
// app.get("/api/barber/:barberId", BarberController.getOne)
// app.patch("/api/barber/:barberId", BarberController.update)
// app.delete("/api/barber/:barberId", BarberController.deleteOne)

//About connection
app.listen(4000, () => {
  console.log("Server is running on port 4000")
})

// mongoose
//   .connect(
//     "..."
//   )
//   .then(() => {
//     console.log("DB connection success")
//   })
//   .catch((err) => {
//     console.log("Error connecting to DB")
//     console.log(err.message)
//   })
