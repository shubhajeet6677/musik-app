/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_YOUTUBE_API_KEY: string;
  readonly VITE_GENIUS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  YT: any;
  onYouTubeIframeAPIReady: () => void;
}