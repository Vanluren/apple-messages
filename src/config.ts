import { homedir } from "os";
import { resolve } from "path";

export const CHAT_DB_PATH = resolve(homedir(), "Library/Messages/chat.db");
