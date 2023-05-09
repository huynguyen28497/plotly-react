import moment from "moment";
import { useEffect } from "react";
import Plot from "react-plotly.js";
import "./App.css";
import { Tooltip } from "react-tooltip";

function App() {
  const xValues = ["Timestamp", "ack", "appeui", "chan", "rfch", "rssi"];

  const yValues = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];

  const timeNow = (n: number) => {
    return moment().add(n, "day").format("DD-MM-YYYY");
  };

  const zValues = [
    [timeNow(0), null, "00-08-00-ff-fe-4a-85-0e", null, 0.1, 73],
    [timeNow(1), null, "00-08-00-ff-fe-4a-85-0e", null, -10, 34],
    [timeNow(2), null, "00-08-00-ff-fe-4a-85-0e", null, 10, 37],
    [timeNow(3), null, "00-08-00-ff-fe-4a-85-0e", null, 5, 26],
    [timeNow(4), null, "00-08-00-ff-fe-4a-85-0e", null, 15, 56],
    [timeNow(5), null, "00-08-00-ff-fe-4a-85-0e", null, 20, 83],
    [timeNow(6), null, "00-08-00-ff-fe-4a-85-0e", null, 25, 95],
    [timeNow(7), null, "00-08-00-ff-fe-4a-85-0e", null, null, 36],
    [timeNow(8), null, "00-08-00-ff-fe-4a-85-0e", null, null, 81],
    [timeNow(9), null, "00-08-00-ff-fe-4a-85-0e", null, null, 35],
    [timeNow(10), null, "00-08-00-ff-fe-4a-85-0e", null, null, 50],
    [timeNow(11), null, "00-08-00-ff-fe-4a-85-0e", null, null, 36],
    [timeNow(12), null, "00-08-00-ff-fe-4a-85-0e", null, null, 96],
    [timeNow(13), null, "00-08-00-ff-fe-4a-85-0e", null, null, 32],
    [timeNow(14), null, "00-08-00-ff-fe-4a-85-0e", null, null, 52],
    [timeNow(15), null, "00-08-00-ff-fe-4a-85-0e", null, null, 89],
    [timeNow(16), null, "00-08-00-ff-fe-4a-85-0e", null, null, 2],
    [timeNow(17), null, "00-08-00-ff-fe-4a-85-0e", null, null, 83],
    [timeNow(18), null, "00-08-00-ff-fe-4a-85-0e", null, null, 3],
    [timeNow(19), null, "00-08-00-ff-fe-4a-85-0e", null, null, 90],
  ];

  const colorscaleValue = [
    [0, "#FF0000"],
    [30, "#FFFF00"],
    [50, "#0CC70C"],
  ];

  const data: any = [
    {
      x: xValues,
      y: yValues,
      z: zValues,
      type: "heatmap",
      xgap: -1,
      ygap: -1,
      showscale: false,
      colorscale: [
        [0, "#0B0B0B"],
        [1, "#0B0B0B"],
      ],
    },
    {
      x: xValues,
      y: yValues,
      z: zValues,
      type: "heatmap",
      colorscale: colorscaleValue,
      showscale: false,
      xgap: 2,
      ygap: 2,
    },
  ];

  const layout: Partial<Plotly.Layout> = {
    title: "Annotated Heatmap",
    width: 1200,
    height: 700,
    annotations: [],
    xaxis: {
      ticks: "",
      side: "top",
      showgrid: false,
      showline: true,
      linecolor: "#0B0B0B",
      linewidth: 2,
      mirror: true,
    },
    yaxis: {
      ticks: "",
      ticksuffix: "",
      showticklabels: false,
      showgrid: false,
      showline: true,
      linecolor: "#0B0B0B",
      linewidth: 2,
      mirror: true,
    },
  };

  useEffect(() => {
    for (var i = 0; i < yValues.length; i++) {
      for (let j = 0; j < xValues.length; j++) {
        const currentValue = zValues[i][j];
        let textColor = "";
        if (currentValue != 0.0 && j !== 0) {
          textColor = "white";
        }
        const result: Partial<Plotly.Annotations> = {
          x: xValues[j],
          y: yValues[i],
          text: zValues[i][j]?.toString(),
          font: {
            family: "Arial",
            size: 12,
            color: textColor,
          },
          showarrow: false,
        };
        layout?.annotations?.push(result);
      }
    }
  }, []);

  return (
    <>
      <Plot
        data={data}
        layout={layout}
        config={{
          displayModeBar: false,
        }}
      />
    </>
  );
}

export default App;
