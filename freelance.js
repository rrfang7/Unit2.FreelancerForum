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
  }

  