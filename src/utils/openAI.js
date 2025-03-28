import OpenAI from 'openai';
import { gpt_API_Key } from './constants';

const client = new OpenAI({
  apiKey: gpt_API_Key, // This is the default and can be omitted
  dangerouslyAllowBrowser : true
});
 export default client;