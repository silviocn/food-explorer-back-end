require("dotenv/config")
require("express-async-errors")
const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const express = require("express")
const routes = require("./routes")
const app = express()
const uploadConfig = require("./configs/uploads")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use(routes)
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
migrationsRun()

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({status: "error", message: error.message})
  }
  return response.status(500).json({status: "error", message: "Internal server error"});
});

const PORT = process.env.PORT || 3333; // telling which port to use, use 3333 if doesn't found 
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));