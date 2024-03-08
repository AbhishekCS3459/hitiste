import mongoose from "mongoose";

interface DBServiceInterface {
  connectDB(): Promise<boolean>;
  disconnectDB(): Promise<void>;
}

// here I am igonoring S in Solid principle as I am using both connect and disconnect in same class
export default class DBService implements DBServiceInterface {
  DB_Name: string;
  private DB_URL: string;

  constructor() {
    this.DB_Name = "MongoDB";
    this.DB_URL = process.env.MONGO_URL || "mongodb://localhost:27017";
  }

  connectDB(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      mongoose.connect(this.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as mongoose.ConnectOptions);

      const db = mongoose.connection;

      db.on("error", (error) => {
        console.error("Connection error:", error);
        reject(error);
      });

      db.once("open", () => {
        console.log(`Connected to ${this.DB_Name} the database`);
        resolve(true);
      });
    });
  }

  disconnectDB(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      mongoose.disconnect();

      const db = mongoose.connection;

      db.on("disconnected", () => {
        console.log("Disconnected from the database");
        resolve();
      });

      db.on("error", (error) => {
        console.error("Disconnection error:", error);
        reject(error);
      });
    });
  }
}
