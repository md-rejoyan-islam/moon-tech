import app from "./app/index.js";
import { hostname, port } from "./app/secret.js";
import mongoBDConnect from "./config/db.js";
import { errorLogger, logger } from "./helpers/logger.js";

// app listen
app.listen(port, () => {
  mongoBDConnect();
  logger.info(
    `server is running on http://localhost:${port} or http://${hostname}:${port}`
  );
});

// error handling for unhandledRejection
process.on("unhandledRejection", (error) => {
  errorLogger.error(error);
  process.exit(1);
});
// error handling for uncaughtException
process.on("uncaughtException", (error) => {
  errorLogger.error(error);
  process.exit(1);
});
