// Add ARRAYS name / price / occupation
const names = ["Alice", "Bob", "Carol", "Rob", "Leia","Mich", "John","Alie"];
const occupations = ["Writer", "Teacher", "Programmer", "Driver"]
const maxFreelancers = 8;
const freelancers = [
    { 
        name: "Alice", price: 30, occupation: "Writer"
    },
    {
         name: "Bob", price: 50, occupation: "Teacher" 
    },
    {
        name: "Carol", price: 70, occupation: "Programmer"
    }
  ];

// setInterval to call addFreelancer every 3 seconds.
  const addFreelancerIntervalId = setInterval(addRandFreelancer, 3000);

  render(); 

  function render() { 
    const nameList = document.querySelector("#names ul");
    const occupationList = document.querySelector("#occupations ul");
    const startPriceList = document.querySelector("#start-prices ul");

  freelancers.forEach((freelancer) => {
    const nameElement = document.createElement("li");
    const occupationElement = document.createElement("li");
    const startPriceElement = document.createElement("li");
    
    nameElement.textContent = freelancer.name;
    occupationElement.textContent = freelancer.occupation;
    startPriceElement.textContent = `$${freelancer.startPrice}`;

    nameList.appendChild(nameElement);
    occupationList.appendChild(occupationElement);
    startPriceList.appendChild(startPriceElement);

  });
  
    // render average-price
    const averageStartPrice = calculateAverageStartPrice();
    document.getElementById("average-price").textContent = `$${averageStartPrice}`;

  }

  function calculateAverageStartPrice() {
    let totalStartPrice = 0; 

    for(let i = 0; i < freelancers.length; i++) {
        totalStartPrice += freelancers[i].startPrice;

    }

    const averageStartPrice = totalStartPrice / freelancers.length;
    return averageStartPrice

  }

  function addRandFreelancer() {
    const randName = names[Math.floor(Math.random() * names.length)];
    const randOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randStartPrice = [Math.floor(Math.random() * 41) + 30]; // random price 30 to 70

    const newFreelancer = {
        name: randName,
        occupation: randOccupation,
        startPrice: randStartPrice

    }
    freelancers.push(newFreelancer);
    
    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerIntervalId);
    }

    render();
  }
