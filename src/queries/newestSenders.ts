export const NEWEST_SENDERS_QUERY = `
SELECT
DISTINCT
  datetime (message.date / 1000000000 + strftime ("%s", "2001-01-01"), "unixepoch", "localtime") AS message_date,
  chat.chat_identifier
FROM
  chat 
  JOIN chat_message_join ON chat."ROWID" = chat_message_join.chat_id
  JOIN message ON chat_message_join.message_id = message. "ROWID"
WHERE 
  message.is_from_me = 0
GROUP BY
  chat_identifier
ORDER BY
    message_date DESC
LIMIT 10;
`;
