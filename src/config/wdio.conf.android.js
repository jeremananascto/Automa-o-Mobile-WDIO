import {
  singleAndroidDeviceCapabalities,
  multiAndroidDeviceCapabalities,
} from "./capabilities";
import { MOCHA_ANDROID_OUTPUT_DIR } from "../constants/pathconstants";
import { config as sharedconfig } from "./wdio.conf.shared";

export const config = {
  ...sharedconfig,
  
  port: 4723,
  
  specs: ["./src/test/specs/andriodDemoApp.spec.js"],
  exclude: [],
  
  capabilities:
    process.env.RUN_MODE == "parallel"
      ? multiAndroidDeviceCapabalities
      : singleAndroidDeviceCapabalities,
  
  services: ["appium"],
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
