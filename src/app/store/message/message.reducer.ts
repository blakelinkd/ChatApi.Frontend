import { createReducer, on } from '@ngrx/store';
import { Message } from '../../models/message.model'; // Adjust the path according to your project structure
import * as MessageActions from './message.actions';

export const initialState: Message[] = [];

export const messageReducer = createReducer(
  initialState,
  on(MessageActions.loadMessages, (state, { messages }) => messages),
  on(MessageActions.createMessage, (state, { message }) => [...state, message]),
  on(MessageActions.updateMessage, (state, { message }) => state.map(m => m.message_id === message.message_id ? message : m)),
  on(MessageActions.deleteMessage, (state, { message_id }) => state.filter(m => m.message_id !== message_id))
);