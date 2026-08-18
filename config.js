// ================================
// AviPrint - Supabase Configuration
// ================================

const SUPABASE_URL =
    "https://pmqmewceqnxsvlhceeef.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_mWPszaFzSHbPp-OHlPGWjw_JdrMU6oQ";


// Create Supabase client

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );
