import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FairLottery - Demo site",
  description: "FairLottery: A lottery protocol that proves the probabilities with zero knowledge.",
  openGraph: {
    title: "FairLottery - Demo site",
    description: "FairLottery: A lottery protocol that proves the probabilities with zero knowledge.",
    url: "fair-lottery.jikuai.dev",
    type: "website",
    siteName: "FairLottery",
    images: [
      {
        url: "https://fair-lottery.jikuai.dev/FairLottery.png",
        width: 500,
        height: 500
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
