import { createClient } from "microcms-js-sdk";

// microCMSと接続
console.log(process.env.API_KEY)
export const client = createClient({
    serviceDomain: "pikimarublog",
    apiKey: process.env.API_KEY || '',
})