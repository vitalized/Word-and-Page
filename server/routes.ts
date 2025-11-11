import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      res.json({ success: true, contact });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
