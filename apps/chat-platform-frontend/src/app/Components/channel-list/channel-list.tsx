import styles from './channel-list.module.scss';

/* eslint-disable-next-line */
export interface ChannelListProps {}

export function ChannelList(props: ChannelListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ChannelList!</h1>
    </div>
  );
}

export default ChannelList;
