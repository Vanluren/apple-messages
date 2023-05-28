import { Chat } from "@/types/Chat";
import { ActionPanel, List } from "@raycast/api";

type ChatListItemProps = Chat;

type ActionPanelProps = {
  guid: string;
};
const Action = ({ guid }: ActionPanelProps) => {
  return (
    <ActionPanel>
      <Action title="Open" onAction={() => console.log(`${guid} selected`)} />
    </ActionPanel>
  );
};

const ChatListItem = ({ chatIdentifier, guid }: ChatListItemProps) => {
  return <List.Item title={chatIdentifier} />;
};
export default ChatListItem;
