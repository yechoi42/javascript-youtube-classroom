import { getToWatchVideoWrapper } from './main-page.js';
import { model, VideoModel } from '../model/index.js';
import { getVideoHTML } from './index.js';
import { $ } from '../@shared/utils.js';

export const renderLikedPage = () => {
  const videosWatched: VideoModel[] = (<VideoModel[]>model.getLocalStorageItem('videos')).filter((x: VideoModel) => x.checkLike === true);
  const mainVideoSection: HTMLElement | null = $('#main-videos');
  if (mainVideoSection) {
    mainVideoSection.innerHTML = getVideoHTML(videosWatched, getToWatchVideoWrapper);
  }
};