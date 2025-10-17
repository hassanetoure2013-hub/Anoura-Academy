import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;

type SupabaseClientInstance = ReturnType<typeof createClient>;

let supabase: SupabaseClientInstance | null = null;

if (!url || !anon) {
	console.warn("Supabase non configuré : utilisez le fallback local.");
} else {
	supabase = createClient(url, anon);
}

export { supabase };
