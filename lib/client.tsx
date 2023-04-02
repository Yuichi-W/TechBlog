import { createClient } from "microcms-js-sdk";

// microCMSと接続
export const client = createClient({
    serviceDomain: "pikimarublog",
    apiKey: process.env.API_KEY || '',
})