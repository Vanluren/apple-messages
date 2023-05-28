export const GET_MESSAGES_FOR_ID = `
SELECT
    message.date,
    message.text,
    message.is_from_me,
    chat.chat_identifier
FROM
    chat
    JOIN chat_message_join ON chat. "ROWID" = chat_message_join.chat_id
    JOIN message ON chat_message_join.message_id = message. "ROWID"
WHERE 
 chat.chat_identifier = ':CHAT_ID'
ORDER BY
    message_date DESC;
`;
