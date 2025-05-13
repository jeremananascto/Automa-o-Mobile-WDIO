import { androidBrowserStackCapabalities } from "./capabilities";
import { MOCHA_ANDROID_OUTPUT_DIR } from "../constants/pathconstants";
import { ENV_READER } from "./env_reader";
import { config as sharedconfig } from "./wdio.conf.shared";

export const config = {
  ...sharedconfig,
  
  user: ENV_READER.BROWSERSTACK_USERNAME,
  key: ENV_READER.BROWSERSTACK_ACCESS_KEY,
  
  specs: ["./src/test/specs/andriodDemoApp.spec.js"],
  exclude: [],
  
  capabilities: androidBrowserStackCapabalities,
  
  services: ["browserstack"],
  reporters: [
    "spec",
    [
      "mochawesome",
      {
        outputDir: MOCHA_ANDROID_OUTPUT_DIR,
        outputFileFormat: (opts) => {
          return `results-${opts.cid}.${opts.capabilities.platformName}.json`;
        },
      },
    ],
  ],
  
  onComplete: function (exitCode, config, capabilities, results) {
    const mergeResults = require("wdio-mochawesome-reporter/mergeResults");
    mergeResults(MOCHA_ANDROID_OUTPUT_DIR, "results-*");
  },
};
