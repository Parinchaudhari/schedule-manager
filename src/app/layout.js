import { Inter } from "next/font/google";
import "./globals.css";
import { LoaderSpinner, NavbarComponent } from "./components";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "@/app/Contexts/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
        <LoaderSpinner/>
        <Toaster/>
        <NavbarComponent />
        {children}
        </AppContextProvider>
        </body>
    </html>
  );
}
