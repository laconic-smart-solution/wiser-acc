module.exports = {
  apps: [
    {
      name: 'wiser-acc',
      script: 'serve.js',
      cwd: __dirname,
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      env: {
        PORT: 4322
      }
    }
  ]
};
