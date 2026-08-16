// WinBD Pro Supabase browser client.
// Only the publishable key belongs in frontend code. Never add a service-role/secret key here.
const SUPABASE_URL = 'https://jgdsxhjtepwraxdxvyol.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Jom3UKqxiqy4RjSjOakVXA_9hjSsldd';
if (!window.supabase) throw new Error('Supabase browser library failed to load.');
window.winbdSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});