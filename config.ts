interface processEnv {
  [key: string]: string | undefined;
}

interface Config {
  API_URL: string | undefined;
  APP_NAME: string | undefined;
  DB_URL: string | undefined;
  DEFAULT_PAGE_LIMIT: number;
}

const processEnv: processEnv = {
  API_URL: process.env.API_URL,
  APP_NAME: process.env.APP_NAME,
  DB_URL: process.env.DB_URL,
};

const config: Config = {
  API_URL: processEnv.API_URL,
  APP_NAME: processEnv.APP_NAME,
  DB_URL: process.env.DB_URL,
  DEFAULT_PAGE_LIMIT: 15,
};
export default config;
