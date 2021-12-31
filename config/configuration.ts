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
  port: parseInt(process.env.PORT) || 8080,
});
