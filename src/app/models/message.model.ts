export interface Message {
  message_id: string;
  thread_id: string;
  sender_id: string;
  user_name: string;
  recipient_id: string;
  timestamp: string; // The backend expects an ISO string
  text: string; // Flattened property from MessageContent

  // Handling Attachments
  // Option 1: Serialize the list of attachments into a single string
  attachments_json?: string;

  // Option 2: Store only the first attachment, if that's sufficient for your use case
  first_attachment_type?: string;
  first_attachment_url?: string;

  // ... other properties from Message
  status: string;
  response_to: string;
}
