import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fsjkfskddgrkjocilkue.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzamtmc2tkZGdya2pvY2lsa3VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMTc4NTcsImV4cCI6MjA3ODU5Mzg1N30.c9__1myNUTkRgiizfc84EjT1pyUPsybaXhC3TxOJPHQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
