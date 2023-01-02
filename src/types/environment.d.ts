export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_URL: string
    }
  }
  namespace Express {
    interface Request {
      user?: object
    }
  }
}
