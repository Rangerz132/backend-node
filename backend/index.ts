import express from "express";
import postRoutes from "./routes/postRoutes";
import { logger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(logger);

app.use("/", (req, res) => {
	res.send("hola");
});

app.use("/posts", postRoutes);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
