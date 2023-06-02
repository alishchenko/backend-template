interface processEnv {
  [key: string]: string | undefined;
}

interface Config {
  HOST: string | undefined;
  PORT: number | undefined;
  LEVEL_INFO: string | undefined;
  APP_NAME: string | undefined;
  DB_URL: string | undefined;
  DEFAULT_PAGE_LIMIT: number;
}

const processEnv: processEnv = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  LEVEL_INFO: process.env.LEVEL_INFO,
  APP_NAME: process.env.APP_NAME,
  DB_URL: process.env.DB_URL,
};

const config: Config = {
  LEVEL_INFO: processEnv.LEVEL_INFO ? processEnv.LEVEL_INFO : 'info',
  HOST: processEnv.HOST ? processEnv.HOST : 'localhost',
  PORT: processEnv.PORT ? Number(processEnv.PORT) : 8080,
  APP_NAME: processEnv.APP_NAME,
  DB_URL: processEnv.DB_URL,
  DEFAULT_PAGE_LIMIT: 15,
};
export default config;
