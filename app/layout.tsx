export const metadata = {
  title: "Fulcrum Dashboard Lab",
  description: "Next.js container test"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", padding: "40px" }}>
        {children}
      </body>
    </html>
  )
}
