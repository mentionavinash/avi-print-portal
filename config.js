const SUPABASE_URL =
    "https://pmqmewceqnxsvlhceeef.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_mWPszaFzSHbPp-OHlPGWjw_JdrMU6oQ";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );
