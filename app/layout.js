import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "fairLottery - Demo site",
  description: "fairLottery: A lottery protocol that proves the probabilities without sharing other information.",
  openGraph: {
    title: "fairLottery - Demo site",
    description: "fairLottery: A lottery protocol that proves the probabilities without sharing other information.",
    url: "fair-lottery.jikuai.codes",
    type: "website",
    image: "fair-lottery.jikuai.codes/FairLottery.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
