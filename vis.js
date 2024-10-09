const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title":{
        "text": "Existing green assets in major area in NSW and VIC",
        "fontSize": 20,
        "color": "green"
    },
    "width": 1000,
    "height": 600,
    "params": [
        {
            "name": "zoom_level",
            "value": 2000,
            "bind": {
                "input": "range",
                "min": 500,
                "max": 30000,
                "step": 100,
                "name": "Zoom: "
            }
        },
        {
            "name": "center_to",
            "value": [144.9631, -37.8136],
            "bind": {
                "input": "select",
                "options": [
                    [144.9631, -37.8136],
                    [151.2093, -33.8688]
                ],
                "labels": ["Victoria", "New South Wales"],
                "name": "Map Centre: "
            }
        }
    ],
    "projection": {
        "type": "mercator",
        "scale": {"expr": "zoom_level"},
        "center": {"expr": "center_to"}
    },
    "layer": [
        {
            "data": {
                "url": "https://raw.githubusercontent.com/Xuancheng-Alan/FIT3179/refs/heads/main/Datasets/VIC_NSW_MAP.json",
                "format": {
                    "type": "topojson",
                    "feature": "VIC_NSW_MAP"
                }
            },
            "mark": {
                "type": "geoshape",
                "fill": "#b5f9fc",
                "stroke": "gray",
                "strokeWidth": 1
            },
            "encoding": {
                "tooltip": [
                    { "field": "properties.STATE_NAME", "type": "nominal", "title": "State Name" }
                ]
            }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/Xuancheng-Alan/FIT3179/refs/heads/main/Datasets/Existing_Green_Assets.json",
                "format": {
                    "type": "topojson",
                    "feature": "Existing_Green_Assets"
                }
            },
            "mark": {
                "type": "geoshape",
                "fill": "green"
            },
            "encoding": {
                "tooltip": [
                    { "field": "properties.ASSET_NAME", "type": "nominal", "title": "Asset Name" },
                    { "field": "properties.LAY_CLASS", "type": "nominal", "title": "Layer Class" },
                    { "field": "properties.OBJECTID", "type": "quantitative", "title": "Object ID" },
                    { "field": "properties.SIGNIFICAN", "type": "nominal", "title": "Significance" },
                    { "field": "properties.LAND_STATU", "type": "nominal", "title": "Land Status" }
                ]
            }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/Xuancheng-Alan/FIT3179/refs/heads/main/Datasets/VPA_Open_Space%20.json",
                "format": {
                    "type": "topojson",
                    "feature": "VPA_Open_Space"
                }
            },
            "mark": {
                "type": "geoshape",
                "fill": "green"
            },
            "encoding": {
                "tooltip": [
                    { "field": "properties.OWNER_TYPE", "type": "nominal", "title": "Owner Type" },
                    { "field": "properties.PARK_NAME", "type": "nominal", "title": "Park Name" },
                    { "field": "properties.OS_STATUS", "type": "nominal", "title": "Status" },
                    { "field": "properties.OS_ACCESS", "type": "nominal", "title": "Access" },
                    { "field": "properties.HA", "type": "nominal", "title": "Area(Ha)" }
                ]
            }
        },
        {
            "data": {
                "values": [
                    { "state": "New South Wales", "lat": -33.8688, "lon": 151.2093 },
                    { "state": "Victoria", "lat": -37.8136, "lon": 144.9631 }
                ]
            },
            "mark": {
                "type": "text",
                "fontSize": 15,
                "dy": -60,
                "dx": -30
            },
            "encoding": {
                "longitude": { "field": "lon", "type": "quantitative" },
                "latitude": { "field": "lat", "type": "quantitative" },
                "text": { "field": "state" },
                "color": { "value": "darkblue" }
            }
        }
    ]
};
vegaEmbed('#vis', spec).then(result => {
    console.log("Visualization successfully rendered", result);
}).catch(error => {
    console.error("Error rendering visualization:", error);
    alert("Failed to render the visualization. Check console for details.");
});

const spec2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "NSW PM10 levels from 2010 to 2024 across multiple locations",
    "title":{
        "text": "Air quality of PM10 in NSW from 2010 to 2024",
        "fontSize": 20,
        "color": "green"
    },
    "width": 600,
    "height": 400,
    "data": {
        "url": "https://raw.githubusercontent.com/Xuancheng-Alan/FIT3179/refs/heads/main/Datasets/NSW%20Air.csv",
        "format": {
            "type": "csv"
        }
    },
    "transform": [
        {
            "fold": ["RANDWICK", "EARLWOOD", "NEWCASTLE","TAMWORTH","BERESFIELD","KEMBLA_GRANGE","BARGO","BATHURST","OAKDALE","ALBION_PARK_SOUTH","PROSPECT"],
            "as": ["Location", "PM10"]
        }
    ],
    "mark": "line",
    "encoding": {
        "x": {
            "field": "DATE",
            "type": "ordinal",
            "title": "Date"
        },
        "y": {
            "field": "PM10",
            "type": "quantitative",
            "title": "PM 10"
        },
        "color": {
            "field": "Location",
            "type": "nominal",
            "title": "Location"
        },
        "tooltip": [
            {"field": "DATE", "type": "ordinal", "title": "Year"},
            {"field": "Location", "type": "nominal", "title": "Location"},
            {"field": "PM10", "type": "quantitative", "title": "PM10 (µg/m³)"}
        ]
    }
};
vegaEmbed('#vis2', spec2).then(result => {
    console.log("Visualization successfully rendered", result);
}).catch(error => {
    console.error("Error rendering visualization:", error);
    alert("Failed to render the visualization. Check console for details.");
});

const spec3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "NSW PM10 levels from 2010 to 2024 across multiple locations",
    "title":{
        "text": "Air quality of PM2.5 in NSW from 2010 to 2024",
        "fontSize": 20,
        "color": "green"
    },
    "width": 600,
    "height": 400,
    "data": {
        "url": "https://raw.githubusercontent.com/Xuancheng-Alan/FIT3179/refs/heads/main/Datasets/NSW%20AIR%20PM2.5.csv",
        "format": {
            "type": "csv"
        }
    },
    "transform": [
        {
            "fold": ["LIVERPOOL", "EARLWOOD", "WALLSEND","BERESFIELD","WOLLONGONG","RICHMOND"],
            "as": ["Location", "PM10"]
        }
    ],
    "mark": "line",
    "encoding": {
        "x": {
            "field": "Date",
            "type": "ordinal",
            "title": "Date"
        },
        "y": {
            "field": "PM10",
            "type": "quantitative",
            "title": "PM 2.5"
        },
        "color": {
            "field": "Location",
            "type": "nominal",
            "title": "Location"
        },
        "tooltip": [
            {"field": "Date", "type": "ordinal", "title": "Year"},
            {"field": "Location", "type": "nominal", "title": "Location"},
            {"field": "PM10", "type": "quantitative", "title": "PM10 (µg/m³)"}
        ]
    }
};
vegaEmbed('#vis3', spec3).then(result => {
    console.log("Visualization successfully rendered", result);
}).catch(error => {
    console.error("Error rendering visualization:", error);
    alert("Failed to render the visualization. Check console for details.");
});

const spec4 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "NSW PM10 levels from 2010 to 2024 across multiple locations",
    "title":{
        "text": "Air quality of PM2.5 in NSW from 2010 to 2024",
        "fontSize": 20,
        "color": "green"
    },
    "width": 600,
    "height": 400,
    "data": {
        "url": "https://raw.githubusercontent.com/Xuancheng-Alan/FIT3179/refs/heads/main/Datasets/weatherAUS.csv",
        "format": {
            "type": "csv"
        }
    },
    "mark": "bar",
    "encoding": {
        "x": {
            "field": "Date",
            "type": "ordinal",
            "title": "Date"
        },
        "y": {
            "field": "MinTemp",
            "type": "quantitative",
            "title": "MinTemp"
        },
        "color": {
            "field": "Location",
            "type": "nominal",
            "title": "Location"
        },
        "tooltip": [
            {"field": "Date", "type": "ordinal", "title": "Year"},
            {"field": "Location", "type": "nominal", "title": "Location"},
            {"field": "PM10", "type": "quantitative", "title": "PM10 (µg/m³)"}
        ]
    }
};
vegaEmbed('#vis4', spec4).then(result => {
    console.log("Visualization successfully rendered", result);
}).catch(error => {
    console.error("Error rendering visualization:", error);
    alert("Failed to render the visualization. Check console for details.");
});