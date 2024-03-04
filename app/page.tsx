import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section style={{ background: "rgb(210, 194, 176)" }}>
      <h1>LIKHA By Alna & Marga • customized creations</h1>
      <Image
        src={"/logo.png"}
        alt="logo"
        width={500}
        height={500}
        style={{ display: "block", padding: "0 40px" }}
      />
      <Link
        href={"tel:9164000821"}
        style={{
          fontSize: "16px",
          padding: "16px 32px",
          borderRadius: "4px",
          textTransform: "uppercase",
          background: "#111",
          color: "white",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Message us to order
      </Link>
    </section>
  );
}
