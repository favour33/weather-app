import React from "react";
import "../css/index.css";

const Updates = () => {
  return (
    <>
      <div className="appContainer" id="updatesContainer">

          <div id="updatesTitleContainer">
            <div ><h2 id="updatesTitle">Updates</h2></div>
          </div>

          <div className="feed">

            <div className="feedElement">
              <div className="upperFeedElement">
                <h3 className="feedTitle">Rain forecasted throughout the day</h3>
                <h4 className="feedDateTime">16/03/2022 12:20</h4>
              </div>
              <div className="lowerFeedElement">
                <p className="feedDescription">Rain is forecasted for the whole of the day, there will be enough rainfall to water crops for farms today.</p>
              </div>
            </div>

            <div className="feedElement">
              <div className="upperFeedElement">
                <h3 className="feedTitle">Medium speed wind</h3>
                <h4 className="feedDateTime">10/03/2022 09:30</h4>
              </div>
              <div className="lowerFeedElement">
                <p className="feedDescription">This wind shouldn't be an issue for any crops or even newly planted seeds.</p>
              </div>
            </div>

            <div className="feedElement">
              <div className="upperFeedElement">
                <h3 className="feedTitle">Storm Eunice</h3>
                <h4 className="feedDateTime">19/02/2022 10:00</h4>
              </div>
              <div className="lowerFeedElement">
                <p className="feedDescription">There are still severe winds due to the storm, therefore it is best to stay indoors for the moment.</p>
              </div>
            </div>

            <div className="feedElement">
              <div className="upperFeedElement">
                <h3 className="feedTitle">Storm Eunice</h3>
                <h4 className="feedDateTime">18/02/2022 09:00</h4>
              </div>
              <div className="lowerFeedElement">
                <p className="feedDescription">Winds of up to 122MPH will cause damage to farms and  crops. It is recommended to stay indoors, since many large objects can be picked up by the winds, and trees are likely to fall.</p>
              </div>
            </div>


          </div>

      </div>
    </>
  
  );
};

export default Updates;
