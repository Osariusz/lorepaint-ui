import React from "react";
import {ComposableMap, ZoomableGroup, Marker} from "react-simple-maps";
import Place from "../place/Place";

// url to a valid topojson file
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";


const LorePage = () => {
    return (

        <div style={{width: "100", height: "100"}}>
            <ComposableMap projection="geoMercator">
                <ZoomableGroup center={[0, 0]} zoom={10} maxZoom={20} minZoom={0}>
                    <image
                        href={"https://cdn.discordapp.com/attachments/436214161077436426/1215728818174697513/image.png?ex=65fdceb1&is=65eb59b1&hm=b43de10d49dc3ef3bc227ff0c541b10642d10d83accc15ff85e46c3ff016f506&"}/>

                    <Place link={"data:image/jpeg;base64,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"}
                    position={[495, -15]}
                    size={[60,60]}
                    />
                </ZoomableGroup>
            </ComposableMap>
        </div>

    );
};

export default LorePage;