import { store } from '../../index.js';

export default class VideoSearchResult {
  constructor($target) {
    this.$target = $target;
    this.initRender();
    this.selectDOM();
    this.setup();
  }

  setup() {
    store.subscribe(this.render.bind(this));
  }

  selectDOM() {
    this.$searchedVideoWrapper = document.querySelector(
      '#searched-video-wrapper'
    );
  }

  render(preStates, states) {
    console.log('PreState : ', preStates.searchedVideos);
    console.log('State: ', states.searchedVideos);
    if (preStates.searchedVideos !== states.searchedVideos) {
      let template = '';
      states.searchedVideos.forEach((video) => {
        template += `${video}`;
      });
      this.$searchedVideoWrapper.innerHTML += template;
    }
  }

  initRender() {
    this.$target.innerHTML = `
        <div class="d-flex justify-end text-gray-700">
          저장된 영상 갯수: <span id="saved-video-count">50</span>개
        </div>
        <section id="searched-video-wrapper" class="video-wrapper">
        </section>
    `;
  }
}