import server from "@jccharlemagne/server";
import healthzController from "./controller/healthz";
import authRoutes from "./route/auth";

const app = server.app;

app.get("/healthz", healthzController.get);
app.use("/auth", authRoutes);

app.use(server.errorHandler);

export default server.app;
