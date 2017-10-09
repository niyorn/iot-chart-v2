//variable
var ctx = document.getElementById("myChart").getContext('2d');
Chart.defaults.global.defaultFontFamily = "Ubuntu";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.deFaultColor = 'black';
Chart.defaults.global.animation = {
  // Animation easing to use
  easing: 'easeInOutQuart',
  duration: 1200
}

//Chart options
var options = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    display: false
  },
  scale: {
    ticks: {
      fontColor: "red",
      fontSize: 13,
      beginAtZero: true,
      min: 0,
      max: 5,
      fixedStepSize: 1
    },
      pointLabels: {
            fontSize: 13
    },
  }
};

/*the catagorie of the chart*/
/*use [] for long words*/
var labels = ['Network providing', ['Installatie en beheer', 'van hardware'], ['Productie','van hardware'], ['Ontwerp en', 'Prototyping', 'van hardware'], ['Embedded', 'systems'],
  'Apps (software)', 'Web (Software)', ['Ai/Machine learning','(software)'], ['Visualisatie','van data'], ['Analyse','van data'], ['Opslag','van data',], ['Data platform', 'aanbieder'], 'Detachering', ['Advies en', 'procesbegeleiding']
];

/*data for the chart*/
var datasets = [{
    label: "RDM-Makerspace",
    backgroundColor: 'rgba(244,67,54, 0.5)',
    borderColor: "rgba(244,67,54, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(244,67,54, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "KPN",
    backgroundColor: 'rgba(233,30,99, 0.5)',
    borderColor: "rgba(233,30,99, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(233,30,99, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Accenture",
    backgroundColor: 'rgba(156,39,176, 0.5)',
    borderColor: "rgba(156,39,176, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(156,39,176, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Premium",
    backgroundColor: 'rgba(103,58,183, 0.5)',
    borderColor: "rgba(103,58,183, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(103,58,183, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Alliander",
    backgroundColor: 'rgba(63,81,181, 0.5)',
    borderColor: "rgba(63,81,181, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(63,81,181, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "IBM",
    backgroundColor: 'rgba(33,150,243, 0.5)',
    borderColor: "rgba(33,150,243, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(33,150,243, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Prodapt-Consulting",
    backgroundColor: 'rgba(3,169,244, 0.5)',
    borderColor: "rgba(3,169,244, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(3,169,244, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Quistor",
    backgroundColor: 'rgba(0,188,212, 0.5)',
    borderColor: "rgba(0,188,212, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(0,188,212, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Arlanet",
    backgroundColor: 'rgba(0,150,136, 0.5)',
    borderColor: "rgba(0,150,136, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(0,150,136, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "sTn-Telefact",
    backgroundColor: 'rgba(76,175,80, 0.5)',
    borderColor: "rgba(76,175,80, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(76,175,80, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Batenburg",
    backgroundColor: 'rgba(139,195,74, 0.5)',
    borderColor: "rgba(139,195,74, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(139,195,74, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Unreason",
    backgroundColor: 'rgba(205,220,57, 0.5)',
    borderColor: "rgba(205,220,57, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(205,220,57, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Mansystems",
    backgroundColor: 'rgba(255,235,59, 0.5)',
    borderColor: "rgba(255,235,59, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(255,235,59, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Redsalt",
    backgroundColor: 'rgba(255,193,7, 0.5)',
    borderColor: "rgba(255,193,7, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(255,193,7, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Ziut",
    backgroundColor: 'rgba(255,152,0, 0.5)',
    borderColor: "rgba(255,152,0, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(255,152,0, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Conneqtech",
    backgroundColor: 'rgba(255,87,34, 0.5)',
    borderColor: "rgba(255,87,34, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(255,87,34, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
  {
    label: "Conrad",
    backgroundColor: 'rgba(121,85,72, 0.5)',
    borderColor: "rgba(121,85,72, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(121,85,72, 1)',
    data: [ //Voor de test worden er random data gegenereerd
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
      dataGenerator(),
    ]
  },
];

//Create the data for companies
var bedrijfData = {
  labels: labels,
  datasets: [],
};

//Random data generator
function dataGenerator() {
  var randomNumber = Math.floor(Math.random() * 5) + 1;
  return randomNumber;
}

//CREATE CHART
var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: bedrijfData,
  options: options
});

//Controle if the company exist
function findCompany(bedrijfNaam) {
  let foundIndex;
  let unneededvar = datasets.map(function(obj, index) {

    if (obj.label.toUpperCase() == bedrijfNaam.toUpperCase() && obj.label !== '') {
      foundIndex = index;
      return foundIndex;
    }
  });
  return foundIndex;
}

//Add Data to Chart
function addData() {
  let bedrijfNaam = this.id;
  let index = findCompany(bedrijfNaam);//Check if the company exist
  let checkbox = document.querySelector('#' + bedrijfNaam + " input").checked;
  let checkboxIndicator = document.querySelector('#' + bedrijfNaam + " span");
  let lowestIndex = 0;

  if (index >= lowestIndex) {
    if (checkbox == false) {
      let newData = datasets[index];
      myRadarChart.data.datasets.push(newData);
      myRadarChart.update();
      checkboxIndicator.style.backgroundColor = datasets[index].backgroundColor;
      checkboxIndicator.classList.remove('inactive');
    } else if (checkbox == true) {
      removeData(bedrijfNaam, index);
    }
  }
};

//------------------------Remove data---------------------------
function removeData(bedrijfNaam, index) {
  let unneededvar = myRadarChart.data.datasets.map(function(obj, index) {
    if (obj.label.toUpperCase() == bedrijfNaam.toUpperCase() && obj.label !== '') {
      myRadarChart.data.datasets.splice(index, 1);
      myRadarChart.update();
      checkboxIndicator = document.querySelector('#' + bedrijfNaam + " span").classList.add('inactive');
    }
  });
};

//---------------------------Event Listener -------------------------------
/*document.querySelectorAll('.bedrijven__bedrijven-selectie li').forEach(
  function(item, index, arr) {
    item.addEventListener('mouseup', addData)
  }, this);*/

var company = document.querySelectorAll('.bedrijven__bedrijven-selectie li'), i;

for(let i = 0; i < company.length; i++){
  company[i].addEventListener('mouseup', addData);
}
