import styles from './App.module.css';

import { onMount } from 'solid-js';

import SceneView from '@arcgis/core/views/SceneView';
import WebScene from '@arcgis/core/WebScene';

function App() {
  let mapDiv;

  onMount(() => {
    const webscene = new WebScene({
      portalItem: {
        id: 'adfad6ee6c6043238ea64e121bb6429a'
      },
    });

    const sceneView = new SceneView({
      map: webscene,
      container: mapDiv,
      popup: {
        actions: [],
        dockEnabled: true,
        dockOptions: {
          buttonEnabled: true,
          breakpoint: false,
        },
      },
    });

    sceneView.when(() => {
      console.log('scene view ready')
    });
  });

  return (
    <div ref={mapDiv} class={styles.mapDiv}>
    </div>
  );
}

export default App;
