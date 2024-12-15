import  express  from "express";
import consultRouter from "./routes/ConsultRoute";
import costRouter from "./routes/constRoute";

const app = express()

app.use(express.json())

app.use('/',costRouter)
app.use('/',consultRouter)

app.listen(3000)
