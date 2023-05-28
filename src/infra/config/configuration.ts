type Config = {
  port: number,
  appName: string,
  databaseUrl: string,
}

export default (): Config => ({
  port: parseInt(process.env.PORT) || 3000,
  appName: process.env.APP_NAME,
  databaseUrl: process.env.DATABASE_URL
});