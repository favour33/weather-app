import TopBar from './topBar'
import MiddleImage from './Middle-Image'
import ConditionsBar from './conditionsBar'
import BottomBar from './BottomBar'


function App() {
  return (
    <div class="appContainer">
      <div class="topContainerParent">
        <TopBar />
      </div>
      <div class="middleContainerParent">
        <MiddleImage />
      </div>
      <div class="conditionsContainerParent">
        <ConditionsBar />
      </div>
        <div class="bottomContainerParent">
          <BottomBar />
        </div>
    </div>
  );
}

export default App;