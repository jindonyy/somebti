import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/provider/AuthProvider';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '썸BTI',
    description: '썸BTI 💘 너도 연애 할 수 있어!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
                    integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
                    crossOrigin="anonymous"
                ></script>
            </head>
            <body className={inter.className}>
                {
                    <Suspense>
                        <AuthProvider>{children}</AuthProvider>
                    </Suspense>
                }
            </body>
        </html>
    );
}
