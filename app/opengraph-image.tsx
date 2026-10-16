import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "ScopeSignal — Construction Change-Order Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const iconData = await readFile(
    join(process.cwd(), "public/brand/logo_icon2.png")
  );
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

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
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={64} height={64} alt="" />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            <span style={{ color: "white" }}>Scope</span>
            <span style={{ color: "#3B82F6" }}>Signal</span>
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
