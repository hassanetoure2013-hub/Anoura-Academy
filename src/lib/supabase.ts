import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url) throw new Error("VITE_SUPABASE_URL manquante");
if (!anon) throw new Error("VITE_SUPABASE_ANON_KEY manquante");

export const supabase = createClient(url, anon);
