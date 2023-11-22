import http from "http"

import app from "./app.js"

const server = http.createServer(app)
const port = 8080