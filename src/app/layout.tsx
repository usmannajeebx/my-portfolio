import './globals.css'

export const metadata = {
  title: 'Usman Najeeb | AI & Automation Architect',
  description: 'Specialist in GHL, Vapi, Retell AI and n8n integrations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
