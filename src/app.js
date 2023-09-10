import  express  from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
//routes
import languajeRoutes from "./routes/languaje.routes";
import leaguesRoutes from "./routes/leagues.routes";
import loginRoutes from "./routes/login.routes";
import matchesRoutes from "./routes/matches.routes";

const app = express();

app.use(bodyParser.json()); // Para analizar application/json
app.use(bodyParser.urlencoded({ extended: true })); // Para analizar application/x-www-form-urlencoded
// Configura CORS para permitir todas las solicitudes (¡Ajusta esto según tus necesidades de seguridad!)
app.use(cors());

// Settings
app.set('port', 4000);
//middlewares
app.use(morgan('dev'));

//routes
app.use("/api/login", loginRoutes);
app.use("/api/languages", languajeRoutes);
app.use("/api/leagues", leaguesRoutes);
app.use("/api/matches", matchesRoutes);

export default app;