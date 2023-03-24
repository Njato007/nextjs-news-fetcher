'use client'
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        {children}
    </ThemeProvider>
  )
}
