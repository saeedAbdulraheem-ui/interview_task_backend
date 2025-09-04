"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const Ajv = require("ajv");
const app = express();
const ajv = new Ajv();
app.use(cors());
app.use(express.json());
const pitchSchema = {
    type: "object",
    properties: {
        company: { type: "string" },
        problem: { type: "string" },
        solution: { type: "string" },
        traction: { type: "string", nullable: true },
        ask: { type: "string" },
        tone: { type: "string" },
    },
    required: ["company", "problem", "solution", "ask", "tone"],
    additionalProperties: false,
};
const validateInput = ajv.compile(pitchSchema);
// mock generator function
function mockGenerator(data) {
    return {
        headline: `${data.company} is dealing with ${data.problem}`,
        subhead: `solution: ${data.solution}`,
        body: `in ${data.tone} tone, the traction is: ${data.traction ?? "N/A"}.`,
        disclaimers: "not-real mock narrative.",
        meta: { request_id: uuidv4() },
    };
}
// logging
function logger(req, res, next) {
    const start = Date.now();
    const requestId = uuidv4();
    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(JSON.stringify({
            request_id: requestId,
            status: res.statusCode,
            duration_ms: duration,
        }));
    });
    next();
}
app.use(logger);
// POST /execute
app.post("/execute", (req, res) => {
    const valid = validateInput(req.body);
    if (!valid) {
        return res.status(400).json({ error: validateInput.errors });
    }
    const output = mockGenerator(req.body);
    return res.status(200).json(output);
});
// GET /health
app.get("/health", (_req, res) => {
    res.json({ ok: true });
});
// start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map