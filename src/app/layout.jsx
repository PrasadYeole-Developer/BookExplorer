import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Books App | Discover and Explore Books",
  description:
    "Books App lets you discover, search, and explore a wide range of books. You can also filter books by year to find your next great read!",
  keywords: [
    "books",
    "book app",
    "explore books",
    "search books",
    "reading",
    "authors",
    "library",
    "literature",
    "history books",
    "book discovery",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Books App | Discover and Explore Books",
    description:
      "Books App lets you discover, search, and explore a wide range of books. You can also filter books by year to find your next great read!",
    url: "https://book-explorer-puce.vercel.app",
    siteName: "Books App",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="transition-colors duration-200"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
