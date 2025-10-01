/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // tweak these to match your design tokens
        base:  { 900:"#0A0D1A", 800:"#0F1426", 700:"#131A32" },
        'ui-card': "#12182C",
        'ui-stroke': "#1E2641",
        'brand-green': "#16D47B",
        'brand-neon': "#2EEE9A",
        'brand-accent': "#15A361",
        'text-dim': "#8B9BB3",
        'text-body': "#C6D0E5"
      },
      boxShadow: {
        glass: "0 8px 24px rgba(0,0,0,.35)",
        glow: "0 0 0 2px rgba(46,238,154,.15)"
      },
      borderRadius: { xl2: "1rem" }
    }
  },
  plugins: []
}
