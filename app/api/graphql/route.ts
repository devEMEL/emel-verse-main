import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
// Initialize Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const handler = startServerAndCreateNextHandler(server);


export async function POST(req:NextRequest) {
    return handler(req)
}

export async function GET(req:NextRequest) {
    return handler(req)
}



// query GetCollections {
//     collections {
//       id
//       name
//       description
//     }
//   }


// query GetCollections($id: ID!) {
//     collection(id: $id) {
//       id
//       name
//       description
//     }
//   }