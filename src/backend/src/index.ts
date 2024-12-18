import  express  from "express";
import consultRouter from "./routes/ConsultRoute";
import costRouter from "./routes/constRoute";
const cors = require('cors')

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type'],
  };

const app = express()
app.use(cors(corsOptions))
app.use(express.json())

app.use('/',costRouter)
app.use('/',consultRouter)

app.listen(3000)
