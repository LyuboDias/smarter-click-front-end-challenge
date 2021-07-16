import { React, Component } from "react";
import { Bar } from "react-chartjs-2";

const state = {
  labels: [
    "User impressions",
    "Overlays shown",
    "Overlays Clicked",
    "Revenue £",
  ],
  datasets: [
    {
      label: "Smarter click",
      backgroundColor: "#ec6952",
      borderColor: "rgba(0,0,0,0.6)",
      borderWidth: 2,
      data: [42300, 70000, 50000, 110000],
    },
  ],
};

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-wrap mt-0">
          <br />
          <h2>Dashboard</h2>
          <Bar
            data={state}
            options={{
              title: {
                display: true,
                text: "Smarter click",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </div>
    );
  }
}
