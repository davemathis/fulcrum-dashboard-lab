export default function Home() {

  const buildTime = process.env.BUILD_TIME || "unknown"
  const environment = process.env.ENVIRONMENT || "local"
  const version = process.env.APP_VERSION || "dev"
  const hostname = process.env.HOSTNAME || "unknown"

  return (
    <main>
      <h1>Fulcrum Dashboard Lab</h1>

      <p>This is a test Next.js container running in Azure.</p>

      <h2>Deployment Info</h2>

      <ul>
        <li><b>Environment:</b> {environment}</li>
        <li><b>Version:</b> {version}</li>
        <li><b>Build Time:</b> {buildTime}</li>
        <li><b>Container Hostname:</b> {hostname}</li>
      </ul>

      <p>
        Change a value and redeploy to verify Container Apps revision updates.
      </p>
    </main>
  )
}
