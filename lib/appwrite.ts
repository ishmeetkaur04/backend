import { Client, Account, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("69b10c1500259a0da1fe");

export const account = new Account(client);
export { ID };