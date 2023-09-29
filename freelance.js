// Add ARRAYS name / price / occupation
const names = ["Alice", "Bob", "Carol", "Rob", "Leia","Mich", "John","Alie"];
const occupation = ["Writer", "Teacher", "Programmer", "Driver"]
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
  const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

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
    document.getElementById("average-price").textContent = `$${freelancer.startPrice}`;

  }

  function calculateAverageStartPrice() {
    let totalStartPrice = 0; 

    for(let i = 0; i < freelancers.length; i++) {
        totalStartPrice += freelancers[i].startPrice;
    }
    const averageStartPrice = totalStartPrice / freelancers.length;
    return averageStartPrice

  }



