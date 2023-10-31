import server from "@jccharlemagne/server";
import healthzController from "./controller/healthz";
import userRoutes from "./route/user";

const app = server.app;

app.get("/healthz", healthzController.get);
app.use("/", userRoutes);

app.use(server.errorHandler);

export default app;
