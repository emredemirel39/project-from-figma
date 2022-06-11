import { FC } from 'react';
import videoCallIcon from '../../assets/icons/video-call-icon.png';
import styles from './VideoCallBtn.module.scss';

interface Iprops {
  text: string;
};

const VideoCallBtn:FC<Iprops> = ({text}) => {
  return (
    <div className={styles.videoCallBtn}>
        <div>
            <img src={videoCallIcon} alt="video-call-icon" />
            <p>{text}</p>
        </div>     
    </div>
  )
}

export default VideoCallBtn;