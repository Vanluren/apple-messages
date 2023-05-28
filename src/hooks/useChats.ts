import { CHAT_DB_PATH } from "@/config";
import { ALL_MESSAGES_QUERY } from "@/queries/allMessages";
import { GET_MESSAGES_FOR_ID } from "@/queries/getMessagesForId";
import { Chat, RawChat } from "@/types/Chat";
import { camelize } from "@/utils/camelize";
import { useSQL } from "@raycast/utils";
import { useEffect, useMemo, useState } from "react";

export const useGetAllChats = (): {
  isLoading: boolean;
  chats: Chat[];
  error?: Error;
} => {
  const [chats, setChats] = useState<Chat[]>([]);
  const { isLoading, data = [], error } = useSQL<RawChat>(CHAT_DB_PATH, ALL_MESSAGES_QUERY);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const prettyData: Chat[] = data
        .sort((a, b) => (a.message_date > b.message_date ? -1 : 1))
        .map((chat) => camelize(chat) as Chat);

      setChats(prettyData);
    }
  }, [data, isLoading]);

  return {
    isLoading,
    chats,
    error,
  };
};

export const useGetChatsForId = (id: string) => {
  const { isLoading, data = [], error } = useSQL<RawChat>(CHAT_DB_PATH, GET_MESSAGES_FOR_ID.replaceAll(":CHAT_ID", id));

  const prettyData = useMemo(() => {
    if (!isLoading && !error && data) {
      return data.map((chat) => camelize(chat) as Chat);
    }
  }, [data, isLoading, error]);

  return {
    isLoading,
    chats: prettyData,
    error,
  };
};
