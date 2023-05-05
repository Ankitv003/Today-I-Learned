import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dnfeikjlzjgxxymgaazp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuZmVpa2psempneHh5bWdhYXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwNTE5MjYsImV4cCI6MTk5ODYyNzkyNn0.3V3H7Yk-F4nL0Xp3nHj1hma4_vEEBbrBBP8ee-PMDRg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
