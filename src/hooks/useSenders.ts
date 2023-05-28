import { CHAT_DB_PATH } from "@/config";
import { NEWEST_SENDERS_QUERY } from "@/queries/newestSenders";
import { Chat } from "@/types/Chat";
import { RawSender, Sender } from "@/types/Sender";
import { camelize } from "@/utils/camelize";
import { useSQL } from "@raycast/utils";
import { useMemo } from "react";

export const useGetNewestSenders = (): {
  isLoading: boolean;
  senders: Sender[];
  error?: Error;
} => {
  const { isLoading, data = [], error } = useSQL<RawSender>(CHAT_DB_PATH, NEWEST_SENDERS_QUERY);
  console.log(CHAT_DB_PATH);

  const senders = useMemo(() => {
    if (!isLoading && !error && data) {
      return data.map((chat) => camelize(chat) as Sender);
    }
    return [];
  }, [data, isLoading]);

  return {
    isLoading,
    senders,
    error,
  };
};
