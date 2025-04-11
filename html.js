export const flightCardHTML = `
    <div id="flight-card" class="flight-card">
        <div class="flight-image">
            <img id="imgAvion" src="" alt="">
        </div>
        
        <div class="flight-details">
            <div class="detail-row">
                <div class="detail-item">
                    <h3>Plane Status</h3>
                    <p id="activee">-</p>
                </div>
                <div class="detail-item">
                    <h3>Registration Number</h3>
                    <p id="reg">-</p>
                </div>
            </div>
            
            <div class="detail-row">
                <div class="detail-item">
                    <h3>Production Line</h3>
                    <p id="productionLine">-</p>
                </div>
                <div class="detail-item">
                    <h3>Plane Owner</h3>
                    <p id="airlineName">-</p>
                </div>
            </div>
            
            <div class="detail-row">
                <div class="detail-item">
                    <h3>Engines Count</h3>
                    <p id="numEngines">-</p>
                </div>
                <div class="detail-item">
                    <h3>Engines Type</h3>
                    <p id="engineType">-</p>
                </div>
            </div>
        </div>
    </div>
`;

export const flightRoute = ` 
        <div class="flightRoute" id="flight-Route">
            <div class="route-header">
              <div class="origin">
                <div id="iataDepart" class="code">XXX</div>
                <div id="municipalityNameDepart" class="city">XXXXXX</div>
                <div id="nameDepart" class="airport">XXXXX Airport</div>
              </div>
              
              <div class="destination">
                <div id="iataArrival" class="code">XXX</div>
                <div id="municipalityNameArrival" class="city">XXXXXX</div>
                <div id="nameArrival" class="airport">XXXXX Airport</div>
              </div>
            </div>
            
            <div class="flight-path">
              <div class="dot1 origin-dot"></div>
              <div class="line"></div>
              <div class="airplane-icon-path"></div>
              <div class="line"></div>
              <div class="dot destination-dot"></div>
              
              <div class="duration" id="distance" >Km</div>
            </div>
            
            <div class="times">
              <div class="depart">
                <div class="label">Depart</div>
                <div id="localDateDepart">XXXX XX XX</div>
                <div id="localTimeDepart">XX:XX XX</div>
              </div>
              
              <div class="arrive">
                <div class="label">Arrive</div>
                <div id="localDateArrive" >XXXX XX XX</div>
                <div id="localTimeArrive" >XX:XX XX</div>
              </div>
            </div>
          </div>
`