exports.config = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.ts"],
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "jasmine",
  reporters: ["dot"],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },
  before: function(capabilities, specs) {
    require("ts-node").register({ files: true });
  }
};
