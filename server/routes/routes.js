import express from "express"
import { check } from "express-validator"
import authenticMiddleware from "../middleware/authenticMiddleware.js"
import roleMiddleware from "../middleware/roleMiddleware.js"
import NewsController from "../controllers/news.js"
import ProductController from "../controllers/product.js"
import VisitController from "../controllers/visit.js"
import ContactController from "../controllers/contact.js"
import EmailController from "../controllers/email.js"
import AuthenticController from "../controllers/authentic.js"
import PurсhaseController from "../controllers/purchase.js"
import UserController from "../controllers/user.js"

const router = express.Router()

router.post("/visit", authenticMiddleware, VisitController.createVisit)

router.delete(
  "/visit/:visitId",
  authenticMiddleware,
  VisitController.deleteVisit
)
router.patch(
  "/visit/:visitId",
  authenticMiddleware,
  roleMiddleware(["BARBER"]),
  VisitController.updateVisit
)

router.post(
  "/registration",
  [
    check("username", "Name can`t be empty").notEmpty(),
    // check("username", "Name can`t be short").isLength({ min: 4, max: 10 }),
  ],
  AuthenticController.registration
)

router.get("/visits", authenticMiddleware, VisitController.getAllVisits)

router.post("/news", NewsController.add)

router.get("/news", NewsController.getAll)

router.delete("/news/:newsId", NewsController.deleteOne)

router.post("/product", ProductController.add)

router.get("/product", ProductController.getAll)

router.get("/product/:productId", ProductController.getOne)

router.delete("/product/:productId", ProductController.deleteOne)

router.post("/purchase", authenticMiddleware, PurсhaseController.createPurchase)

router.get(
  "/purchase",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  PurсhaseController.getAllPurchases
)

router.post("/contact", ContactController.addContactFeedback)

router.get(
  "/contact",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  ContactController.getAllContactFeedbacks
)

router.post("/email", EmailController.add)

router.get(
  "/email",
  authenticMiddleware,
  roleMiddleware(["ADMIN"]),
  EmailController.getAll
)

router.post(
  "/registration",
  [
    check("username", "Name can`t be empty").notEmpty(),
  ],
  AuthenticController.registration
)

router.post("/login", AuthenticController.login)

router.post("/logout", AuthenticController.logout)

router.get(
  "/users",
  authenticMiddleware,
  roleMiddleware(["BARBER"]),
  AuthenticController.getUsers
)
router.get("/user", authenticMiddleware, UserController.getUser)

router.patch("/user", authenticMiddleware, UserController.updateUser)

router.patch("/userNumberBarbershop", authenticMiddleware, UserController.updateNumberBarbershop)

router.get("/barber", authenticMiddleware, UserController.getBarber)

router.get("/barbersAll", UserController.getBarbers)

router.get(
  "/barbers",
  authenticMiddleware,
  UserController.getAppointmentHistory
)

router.get(
  "/user/appointmentHistory",
  authenticMiddleware,
  UserController.getAppointmentHistory
)

router.get(
  "/user/purchaseHistory",
  authenticMiddleware,
  UserController.getUserPurchaseHistory
)

export default router
