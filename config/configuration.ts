/**
 * This file organizes environment variables into logical configuration objects.
 *
 * Note: When an environment variable is defined both in a `.env` file and in
 *       the runtime environment (i.e. it appears in the output of `$ env`),
 *       the definition in the runtime environment takes precedence.
 *       Reference: https://docs.nestjs.com/techniques/configuration
 */
export default () => ({
  env: process.env.NODE_ENV || 'development',
  projectId: process.env.PROJECT_ID || 'nest-ambassador',
  port: parseInt(process.env.PORT) || 5000,

  // database
  database: {
    main: {
      host: process.env.DB_MAIN_HOST || 'db',
      port: parseInt(process.env.DB_MAIN_PORT) || 3306,
      username: process.env.DB_MAIN_USERNAME || 'root',
      password: process.env.DB_MAIN_PASSWORD || null,
      database: process.env.DB_MAIN_DATABASE || 'ambassador',
    },
    // Note: The test database currently uses many of the same
    //       environment variables as the main database.
    test: {
      host: process.env.DB_MAIN_HOST || 'db',
      port: parseInt(process.env.DB_MAIN_PORT) || 3306,
      username: process.env.DB_MAIN_USERNAME || 'root',
      password: process.env.DB_MAIN_PASSWORD || null,
      database: process.env.DB_TEST_DATABASE || 'ambassadortest',
    },
  },

  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
    ttl: process.env.JWT_TTL || '30d',
  },
});
