interface EnvConfig {
  WALLET_CONNECT_PROJECT_ID: string;
  ENV: string;
}

export const getEnvConfig = (): EnvConfig => {
  return {
    WALLET_CONNECT_PROJECT_ID:
      import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || "",
    ENV: import.meta.env.VITE_ENV || "development",
  };
};

export const isDev = () => getEnvConfig().ENV === "development";
export const isTest = () => getEnvConfig().ENV === "test";
export const isProd = () => getEnvConfig().ENV === "production";
