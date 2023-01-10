import styles from './message-list.module.scss';

/* eslint-disable-next-line */
export interface MessageListProps {}

export function MessageList(props: MessageListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MessageList!</h1>
    </div>
  );
}

export default MessageList;
