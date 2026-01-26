import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // In production (Vercel), assets are in dist/public relative to the root
  // or just 'public' relative to the compiled index.js in 'dist'
  const staticPath = path.resolve(__dirname, "public");

  console.log(`Serving static files from: ${staticPath}`);

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (req, res) => {
    // Skip for files that should have been caught by express.static
    if (req.path.includes(".")) {
      return res.status(404).send("Not found");
    }
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
