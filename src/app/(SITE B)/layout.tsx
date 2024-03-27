import '@/./app/globals.css';
import Header from "@/app/(SITE B)/Header";

export const metadata = {
    title: 'Nosres',
    description: 'SITE B',
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
        </body>
        </html>
    )
}
