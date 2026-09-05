import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "El Racó de Huelva — marisco fresco de Huelva en Mollet del Vallès";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Marcellus desde Google Fonts. Si no se puede, la tarjeta sale igual. */
async function fuenteMarcellus() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Marcellus&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text());
    const url = css.match(/src: url\((https:[^)]+)\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

/**
 * Tarjeta que ve quien recibe el enlace por WhatsApp o lo encuentra en
 * Google. Sin esto se compartía un enlace pelado, sin foto ni nombre.
 */
export default async function Image() {
  const [fondo, logo, marcellus] = await Promise.all([
    readFile(join(process.cwd(), "public/HeroBg.jpg")),
    readFile(join(process.cwd(), "public/logo.png")),
    fuenteMarcellus(),
  ]);

  const fondoSrc = `data:image/jpeg;base64,${fondo.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const display = marcellus ? "Marcellus" : "serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          backgroundColor: "#0D2E3D",
        }}
      >
        <img
          src={fondoSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, objectFit: "cover" }}
        />
        {/* Satori no entiende el atajo `background` con degradado:
            hay que darle backgroundImage. Y tampoco entiende `inset`:
            sin medidas explícitas el div sale de tamaño cero. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            backgroundImage:
              "linear-gradient(180deg, rgba(13,46,61,0.55) 0%, rgba(13,46,61,0.72) 45%, rgba(13,46,61,0.97) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0 68px 62px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 20,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#D4AF8A",
              }}
            >
              Mollet del Vallès
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: display,
                fontSize: 78,
                lineHeight: 1.05,
                color: "#F4E7D6",
                marginTop: 18,
              }}
            >
              El Racó de Huelva
            </div>
            <div style={{ display: "flex", width: 96, height: 2, backgroundColor: "#BB471F", marginTop: 26 }} />
            <div style={{ fontSize: 28, color: "rgba(249,246,241,0.88)", marginTop: 26 }}>
              Marisco fresco traído directamente desde Huelva y Sanlúcar
            </div>
          </div>

          <img
            src={logoSrc}
            alt=""
            width={128}
            height={128}
            style={{ borderRadius: 64, backgroundColor: "#F9F6F1", padding: 10 }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: marcellus
        ? [{ name: "Marcellus", data: marcellus, style: "normal", weight: 400 }]
        : undefined,
    },
  );
}
