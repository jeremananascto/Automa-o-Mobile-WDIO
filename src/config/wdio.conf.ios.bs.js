import { iosBrowserStackCapabalities } from "./capabilities";
import { MOCHA_IOS_OUTPUT_DIR } from "../constants/pathconstants";
import { ENV_READER } from "./env_reader";
import { config as sharedconfig } from "./wdio.conf.shared";

export const config = {
  ...sharedconfig,
  // ==================
  // configurações Browserstack
  // ==================
  user: ENV_READER.BROWSERSTACK_USERNAME,
  key: ENV_READER.BROWSERSTACK_ACCESS_KEY,
  // ==================
  // arquivos de teste especifico
  // ==================
  specs: ["./src/test/specs/iosApp.spec.js"],
  exclude: [],
  // ============
  // Capabilities
  // ============
  capabilities: iosBrowserStackCapabalities,
  // ===================
  // configurações de testes
  // ===================
  services: ["browserstack"],
  reporters: [
    "spec",
    [
      "mochawesome",
      {
        outputDir: MOCHA_IOS_OUTPUT_DIR,
        outputFileFormat: (opts) => {
          return `results-${opts.cid}.${opts.capabilities.platformName}.json`;
        },
      },
    ],
  ],
  
  onComplete: function (exitCode, config, capabilities, results) {
    const mergeResults = require("wdio-mochawesome-reporter/mergeResults");
    mergeResults(MOCHA_IOS_OUTPUT_DIR, "results-*");
  },
};
