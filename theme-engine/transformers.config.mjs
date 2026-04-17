export default {
  "layers": {
    "brandMode": {
      "enabled": true,
      "outputPattern": "{brand}-{mode}.json"
    },
    "fullThemes": {
      "enabled": true,
      "outputPattern": "{brand}-{mode}-{surface}.json"
    },
    "semantic": {
      "enabled": true,
      "outputPattern": "{brand}-{mode}-{surface}.json"
    },
    "foundation": {
      "enabled": true,
      "outputPattern": "{brand}-{mode}-{surface}-foundation.json"
    },
    "components": {
      "enabled": false,
      "outputPattern": "{brand}-{mode}-{surface}-components.json"
    }
  },
  "output": {
    "directories": {
      "json": "./dist/json",
      "js": "./dist/js",
      "esm": "./dist/esm",
      "css": "./dist/css"
    },
    "namespaces": {
      "semantic": {
        "css": "./dist/css"
      }
    }
  },
  "assets": {
    "copyFonts": true,
    "generateFontsManifest": true
  }
};
