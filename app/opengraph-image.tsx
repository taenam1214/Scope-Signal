import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "ScopeSignal — Construction Change-Order Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0F172A 0%, #1e293b 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#111827",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: "#F59E0B",
              }}
            />
          </div>
          <div style={{ color: "white", fontSize: 32, fontWeight: 700 }}>
            Scope<span style={{ color: "#3B82F6" }}>Signal</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#60a5fa",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Built for commercial subcontractors
          </div>
          <div
            style={{
              color: "white",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 940,
            }}
          >
            Every scope change deserves to be seen.
          </div>
          <div style={{ color: "#94a3b8", fontSize: 28, maxWidth: 880 }}>
            AI-assisted visibility into potentially missed change orders.
          </div>
        </div>

        {/* Footer */}
        <div style={{ color: "#64748b", fontSize: 24 }}>scope-signal.com</div>
      </div>
    ),
    { ...size }
  );
}
