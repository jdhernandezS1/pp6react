import OpenAI from "openai";
import data from "./data";

const fetchOpenAi = (message) => {

    const openai = new OpenAI({
        apiKey: data.API_KEY,
        dangerouslyAllowBrowser:true
    });

    const completion = openai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [
            {
                "role": "user",
                "content": ` ${message}`
            },
        ],
    });

    // completion.then((result) => console.log(result.choices[0].message));
   return completion.content
}

export default fetchOpenAi;
