import { Detail, List } from "@raycast/api";
import ChatListItem from "./components/ChatListItem";
import { useGetAllChats } from "./hooks/useChats";
import { useGetNewestSenders } from "./hooks/useSenders";

export default function Command() {
  const { isLoading, senders, error } = useGetNewestSenders();

  if (error) {
    <Detail markdown="Example for proper error handling" />;
  }
  if (isLoading) {
    <Detail markdown="Loading..." />;
  }
  return (
    <List>
      {senders?.map((sender) => (
        <List.Item key={sender.chatIdentifier} title={sender.chatIdentifier}></List.Item>
      ))}
    </List>
  );
}
