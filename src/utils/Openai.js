import { REACT_APP_OPENAI_API_KEY } from "./constants";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: REACT_APP_OPENAI_API_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser:true
  });

  export default openai