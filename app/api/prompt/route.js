import Prompt from "@models/prompt";
import { connectToDb } from "@utils/database";

export const GET = async (req, res) => {
    try {
        await connectToDb();
        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 201 })
    } catch (error) {
        return new Response("Failed to find all prompts", { status: 500 });
    }
}