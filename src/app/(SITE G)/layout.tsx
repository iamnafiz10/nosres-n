import React from "react";
import '@/./app/globals.css';
import {ToastContainer} from "react-toastify";
import Header from "@/app/(SITE G)/Header";
import Footer from "@/app/(SITE G)/Footer";

export const metadata = {
    title: 'Nosres',
    description: 'SITE G',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Footer/>
        <ToastContainer
            bodyClassName="toastBody"
        />
        </body>
        </html>
    )
}
