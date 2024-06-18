/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    SITE_URL: string;
    SENDGRID_API_KEY: string;
    SENDGRID_FROM_EMAIL: string;
    SENDGRID_FROM_NAME: string;
    SENDGRID_TO_EMAIL: string;
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_ACCESS_TOKEN: string;
  }
}
