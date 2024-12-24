import { Client, Databases , Account} from "appwrite";

export const PROJECT_ID = "6605908a240c4692ac83";
export const DATABASE_ID = "660592645a2e05a9d6e0";
export const COLLECTION_ID_MESSAGES = "66059278cb6d5e60541d";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6605908a240c4692ac83");

export const databases = new Databases(client);
export const account = new Account(client);


export default client;
