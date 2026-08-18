const SUPABASE_URL = "https://pmqmewceqnxsvlhceeef.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "YOUR_NEW_PUBLISHABLE_KEY";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
