console.log("Hello via Bun!");

import { Hono } from "hono";
import index from "../index.html";

const app = new Hono();

app.get("/api/hello", (c) => c.json({ message: "Привет от Hono!" }));

export default {
    routes: {
        "/": index,
    },
    fetch: app.fetch,
};