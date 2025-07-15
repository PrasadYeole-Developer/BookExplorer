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
    "Books App lets you discover, search, and explore a wide range of books by can be also filtered by year. Find your next great read!",
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
      "Books App lets you discover, search, and explore a wide range of books by year and author. Find your next great read!",
    url: "https://your-books-app-url.com",
    siteName: "Books App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Books App Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Books App | Discover and Explore Books",
    description:
      "Books App lets you discover, search, and explore a wide range of books by year and author. Find your next great read!",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="transition-colors duration-200">
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
