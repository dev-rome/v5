import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Jerome Haynes | Frontend Engineer";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#050505",
                    backgroundImage: "radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)",
                    backgroundSize: "100px 100px",
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '40px',
                    }}
                >
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'linear-gradient(to bottom right, #00ff9d, #bd00ff)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 50px rgba(0, 255, 157, 0.3)'
                    }}>
                        <div style={{
                            width: '110px',
                            height: '110px',
                            borderRadius: '50%',
                            backgroundColor: '#111',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '50px',
                            fontWeight: 'bold'
                        }}>
                            JH
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 60,
                        fontFamily: "monospace",
                        color: "white",
                        marginBottom: 20,
                        textAlign: "center",
                        textShadow: "0 0 10px rgba(255,255,255,0.5)"
                    }}
                >
                    Jerome Haynes
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 30,
                        color: "#888",
                        fontFamily: "sans-serif",
                        letterSpacing: "4px",
                        textTransform: "uppercase"
                    }}
                >
                    Frontend Engineer
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
