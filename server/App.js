import NewsController from "./controllers/news.js"
import ProductController from "./controllers/product.js"
import VisitController from "./controllers/visit.js"
import ContactController from "./controllers/contact.js"
import EmailController from "./controllers/email.js"
import BarberController from "./controllers/barber.js"
import AuthenticController from "./controllers/authentic.js"
import UserController from "./controllers/user.js"

import path from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import { check } from "express-validator"
import authenticMiddleware from "./middleware/authenticMiddleware.js"
import roleMiddleware from "./middleware/roleMiddleware.js"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname, "public")))

//Visit
app.post("/api/visit", authenticMiddleware, VisitController.createVisit)

//News
app.post("/api/news", NewsController.add)
app.get("/api/news", NewsController.getAll)
app.delete("/api/news/:newsId", NewsController.deleteOne)

//Product
app.post("/api/product", ProductController.add)
app.get("/api/product", ProductController.getAll)
app.get("/api/product/:productId", ProductController.getOne)
app.delete("/api/product/:productId", ProductController.deleteOne)

//Contact
app.post("/api/contact", ContactController.add)
app.get("/api/contact", ContactController.getAll)
app.delete("/api/contact/:contactId", ContactController.deleteOne)

//Email
app.post("/api/email", EmailController.add)
app.get("/api/email", EmailController.getAll)
app.delete("/api/email/:emailId", EmailController.deleteOne)

//Login
app.post(
  "/api/registration",
  [
    check("username", "Name can`t be empty").notEmpty(),
    // check("username", "Name can`t be short").isLength({ min: 4, max: 10 }),
  ],
  AuthenticController.registration
)
app.post("/api/login", AuthenticController.login)
app.post("/api/logout", AuthenticController.logout)
app.get("/api/users", roleMiddleware(["BARBER"]), AuthenticController.getUsers)
app.get("/api/user", authenticMiddleware, UserController.getUser)
app.patch("/api/user", authenticMiddleware, UserController.updateUser)
app.get("/api/barber", authenticMiddleware, UserController.getBarber)
app.get("/api/barbers", UserController.getBarbers)

//About connection
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection success")
  })
  .catch((err) => {
    console.log("Error connecting to DB")
    console.log(err.message)
  })
