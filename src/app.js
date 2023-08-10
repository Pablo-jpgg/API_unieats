import  express  from "express";
import morgan from "morgan";
//routes
import languajeRoutes from "./routes/languaje.routes";


const app = express();

// Settings
app.set('port', 4000);
//middlewares
app.use(morgan('dev'));

//routes
app.use("/api/languages",languajeRoutes);
export default app;