import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Maison Coffee — specialty Arabica grown in the highlands of Sơn La, Vietnam";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const youngSerif = await readFile(
    join(process.cwd(), "app/fonts/YoungSerif-Regular.ttf")
  );
  const reglo = await readFile(join(process.cwd(), "app/fonts/Reglo-Bold.otf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #12301A 0%, #1E4A2A 60%, #245B33 100%)",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: 6,
            color: "#F4C978",
            fontFamily: "Reglo",
            marginBottom: 24,
          }}
        >
          FROM MAI SƠN · SƠN LA · VIETNAM
        </div>
        <div
          style={{ fontSize: 96, color: "#FBF8EC", fontFamily: "Young Serif" }}
        >
          maison coffee
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#BFE0BE",
            marginTop: 24,
            fontFamily: "Reglo",
          }}
        >
          Specialty Arabica Roasted at Origin
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Young Serif", data: youngSerif, style: "normal", weight: 400 },
        { name: "Reglo", data: reglo, style: "normal", weight: 700 },
      ],
    }
  );
}
