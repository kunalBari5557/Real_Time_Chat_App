import Chart from "react-apexcharts";

const AdminLineCharts = ({data}:any) => {

    
    let months = data?.map((month:any)=> {
        return month.monthly;
    })

    let monthsCount = data?.map((monthCount:any)=> {
        return monthCount.candidateCount;
    })

    const state = {
        options: {
            chart: {
                id: "basic-bar",
                toolbar:{
                    show:false // <== line to add
                },
                zoom:{
                    enabled: false,
                },
            },
            colors:['#F44336'],
            xaxis: {
                categories: months
            },
            stroke: {
                width: 3
            },
        },
        series: [
          {
            name: "Candidate",
            data: monthsCount
          }
        ]
      };

  return (
        <Chart
            options={state.options}
            series={state.series}
            type="line"
            height="500"
        />
  )
}
export default AdminLineCharts