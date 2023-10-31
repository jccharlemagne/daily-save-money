import expressService from "./service/express";
import mongoService from "./service/mongo";
import natsService from "./service/nats";

mongoService
  .connect()
  .then(() => natsService.listen())
  .then(() => expressService.listen())
  .catch((err) => console.error(`💥  Service broken: ${err}`));
