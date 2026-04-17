module.exports = {
  apps: [
    {
      name: "timurmone",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3030",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
      },
      max_memory_restart: "384M",
      autorestart: true,
      watch: false,
    },
  ],
};
