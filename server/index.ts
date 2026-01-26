import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

// In Vercel, static files are served from the root 'dist/public' after build
// But for the serverless function, we need to point to the right place
const staticPath = path.resolve(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

app.get("*", (req, res) => {
  if (req.path.includes(".")) {
    return res.status(404).send("Not found");
  }
  res.sendFile(path.join(staticPath, "index.html"));
});

// Export for Vercel serverless
export default app;

// Only listen if not running as a serverless function
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
