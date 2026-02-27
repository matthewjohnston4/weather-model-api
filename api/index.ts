import express, { Request, Response } from "express";
import { ApolloServer } from "@apollo/server";
import { models } from "./data.js";

const app = express();

const typeDefs = `#graphql
  type RunTime {
    hour: Int
    minute: Int
  }

  type Run {
    label: String
    start: RunTime
    duration: Int
    limit: Int
  }

  type Model {
    name: String
    res: Float
    minFrameSize: Int
    viewLinks: [String]
    runs: [Run]
  }

  type Query {
    models: [Model]
  }
`;

const resolvers = {
  Query: {
    models: () => models,
  },
};

let server: ApolloServer | null = null;

async function getServer() {
  if (!server) {
    server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await server.start();
  }
  return server;
}

app.use(express.json());

app.post("/", async (req: Request, res: Response) => {
  const srv = await getServer();
  const result = await srv.executeOperation({
    query: req.body.query,
    variables: req.body.variables,
  });
  res.json(result);
});

app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "GraphQL API - POST queries to this endpoint" });
});

export default app;

// Local development server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});