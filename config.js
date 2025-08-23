export const addressesAndFiles = [
  {
    address: "0x1000",
    fileName: "bootloader.bin",
  },
  {
    address: "0x8000",
    fileName: "partitions.bin",
  },
  {
    address: "0xE000",
    fileName: "boot_app0.bin",
  },
  {
    address: "0x10000",
    fileName: "main.bin",
  },
];

export const configPath = "elements.json";

export const elements = [
  {
    type: "heading",
    label: "WiFi Settings",
  },
  {
    name: "config_ssid",
    value: "",
    label: "WiFi SSID",
    type: "text",
  },
  {
    name: "config_password",
    value: "",
    label: "WiFi Password",
    type: "text",
  },
  {
    type: "heading",
    label: "LNbits Device URL",
  },
  {
    name: "config_device_string",
    value: "",
    label: "Device string, use BitcoinSwitch extension in LNbits",
    type: "text",
  },
  {
    type: "heading",
    label: "Threshold Mode",
  },
  {
    name: "config_threshold_inkey",
    value: "",
    label:
      "THRESHOLD OPTION (use lnurlp extension to make an lnurlp) Invoice/read key from LNbits",
    type: "text",
  },
  {
    name: "config_threshold_amount",
    value: "",
    label: "THRESHOLD OPTION amount to hit to trigger",
    type: "text",
  },
  {
    name: "config_threshold_pin",
    value: "",
    label: "THRESHOLD OPTION pin to trigger",
    type: "text",
  },
  {
    name: "config_threshold_time",
    value: "",
    label: "THRESHOLD OPTION time to turn of for",
    type: "text",
  },
];
