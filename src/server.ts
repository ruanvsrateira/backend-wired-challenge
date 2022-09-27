import { app } from "./app";
import { SERVER_PORT, DATABASE_URL } from "./settings";
import { connect } from "mongoose";

async function bootstrap() {
  connect(DATABASE_URL).then(() => {
    app.emit("connectedOnDatabase");
  });

  app.on("connectedOnDatabase", () => {
    app.listen(SERVER_PORT, () => {
      console.log("Servidor rodando na porta 3333");
    });
  });
}

bootstrap();
