import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./../globals.css";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/components/theme-provider";
import { useSelectedLayoutSegments } from "next/navigation";
import { ApolloClientProvider } from "../../main";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get current route segments
  // const segments = useSelectedLayoutSegments();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ApolloClientProvider>
        <body className={poppins.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Layout>{children}</Layout>
          </ThemeProvider>
        </body>
      </ApolloClientProvider>
    </html>
  );
}
