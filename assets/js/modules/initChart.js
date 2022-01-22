export default function initChart() {
  var options = {
    chart: {
      type: 'area',
      height: 400,
      fontFamily: "'Mulish', sans-serif",
    },
    title: {
      text: "Ganhos",
      align: "left",
      offsetX: 0,
      style: {
        fontSize: '18px',
        color: 'var(--cor--neutra)'
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      offsetY: 0,
      itemMargin: {
        vertical: 8
      },
      onItemClick: {
        toggleDataSeries: true
      },
    },
    colors: ['#33C863', '#F2994A'],
    fill: {
      colors: ['#CCFFDC']
    },

    stroke: {
      curve: 'smooth',
    },

    series: [],
  }

  var chart = new ApexCharts(document.querySelector("#chart--sales"), options)
  chart.render();

  const getJson = async () => {
    const getResponse = await fetch("./assets/js/dados.json")
    const response = await getResponse.json()
    const data = await response;
    console.log(data)
    chart.updateSeries([{
      name: 'Vendas',
      data: data[0],
    }, {
      name: 'Lucros',
      data: data[1],
    }])

  }

  getJson();

}