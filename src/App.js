import React from 'react'
import {TimelineProvider} from "./components/timelineContext/TimelineContext";
import {Timeline} from "./components/Timeline";
import {Description} from "./components/Description";
import {MapPlane} from "./components/MapPlane";

function App() {

    // Description info
    let descriptionMap = new Map();

    descriptionMap.set(700, {header: '1941 год', text: 'Текст о 1941 очень тяжелом году в нашей истории.'});
    descriptionMap.set(1700, {header: '1942 год', text: 'Текст о 1942 очень тяжелом году в нашей истории.'});
    descriptionMap.set(2700, {header: '1943 год', text: 'Текст о 1943 очень тяжелом году в нашей истории.'});
    descriptionMap.set(3700, {header: '1944 год', text: 'Текст о 1944 очень тяжелом году в нашей истории.'});
    descriptionMap.set(4000, {header: '1945 год', text: 'Текст о 1945 очень тяжелом году в нашей истории.'});

    // MapDate info

    let posMap = new Map();

    posMap.set(1,  {pos:{x:50, y:40}, name:'1 госпиталь'});
    posMap.set(4,  {pos:{x:49, y:31}, name:'4 госпиталь'});

    // PointsDateArray info
    let pointsDateMap = new Map()

    pointsDateMap.set(1, new Map([[700, 21],[1700,7],[2700,33]]));
    pointsDateMap.set(4, new Map([[1700,7],[2700,18],[3700,11],[4000,30]]));

  return (
      <TimelineProvider>
        <div className="App">
          <Timeline/>
          <MapPlane posMap={posMap} pointsDateMap={pointsDateMap}/>
          <Description descriptionMap={descriptionMap}/>
        </div>
      </TimelineProvider>
  );
}

export default App;


