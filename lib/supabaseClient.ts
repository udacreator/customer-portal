import { createClient } from "@supabase/supabase-js";

// TEMP: hard-coded for demo. We'll move these back to .env later.
const supabaseUrl = "https://lvkqxbqizewjloaqqalz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2a3F4YnFpemV3amxvYXFxYWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNDYwNDksImV4cCI6MjA4MDgyMjA0OX0.cLGe6vlsz7P79IZOkL9EvofyjMCM81i9zxqB9sTEEf8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
