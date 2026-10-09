import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const envOk = Boolean(SUPABASE_URL && SUPABASE_ANON);

export default function App() {
  if (!envOk) {
    return (
      <div
        style={{
          minHeight: "100vh",
          padding: "24px",
          background: "#FBFBF8",
          color: "#1B2B24",
          fontFamily: "Inter, system-ui, sans-serif",
          lineHeight: 1.6
        }}
      >
        <h1 style={{ fontSize: "20px", marginBottom: "12px" }}>
          Env vars em falta no runtime
        </h1>
        <p style={{ fontSize: "14px", marginBottom: "16px" }}>
          O build passou mas o browser nao recebeu as variaveis. Verifica na Vercel
          (Settings, Environment Variables) se as duas existem com o ambiente
          Production marcado, e faz Redeploy.
        </p>
        <ul style={{ fontSize: "13px", paddingLeft: "20px" }}>
          <li>VITE_SUPABASE_URL: {SUPABASE_URL ? "presente" : "em falta"}</li>
          <li>VITE_SUPABASE_ANON_KEY: {SUPABASE_ANON ? "presente" : "em falta"}</li>
        </ul>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
