import Vimeo_Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo_Player(iframe);
function callBack(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}
player.on('timeupdate', throttle(callBack, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') ?? '0');
