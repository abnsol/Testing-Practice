import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,

  {
    languageOptions: { 
      globals: globals.node
    }
  },

  {
    rules : {
      "no-unused-vars" : "warn",
      "semi" : ["error","always"],
      "no-undef" : 0
    }
  }
 
];

