let username = "coalition";
let password = "skills-test";
let auth = btoa(`${username}:${password}`);
let displayJessica = document.getElementById("displayJessica");
let displayPatients = document.getElementById("displayPatients");



// FUNCTIOM TO FETCH JESSICA'S PROFILE
const fetchJessicaData = async () => {
  await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(function (data) {
      if (data.length > 3) {
        let item = data[3];
        console.log(item);
        displayJessica.innerHTML = `
            <img style="width:150px; display:block; margin:auto; padding:20px 0" src="${item.profile_picture}">
            <h3 style="font-size:20px; font-weight:700; text-align:center; padding-bottom:20px">${item.name}</h3>
            <div style="display:flex">
                <div><img src="./Asset/main/BirthIcon.svg"/></div>
                <div style="font-size:14px; margin-left:15px">Date of Birth
                <p style="font-weight:600;">${item.date_of_birth}</p></div>
            </div>
            <div style="display:flex">
                <div><img src="./Asset/main/FemaleIcon.svg"/></div>
                <div style="font-size:14px; margin-left:15px">Gender
                <p style="font-weight:600;">${item.gender}</p></div>
            </div>
            <div style="display:flex">
                <div><img src="./Asset/main/PhoneIcon.svg"/></div>
                <div style="font-size:14px; margin-left:15px">Contact Info
                <p style="font-weight:600;">${item.phone_number}</p></div>
            </div>
            <div style="display:flex">
                <div><img src="./Asset/main/PhoneIcon.svg"/></div>
                <div style="font-size:14px; margin-left:15px">Emergency Contact
                <p style="font-weight:600;">${item.emergency_contact}</p></div>
            </div>
            <div style="display:flex">
                <div><img src="./Asset/main/InsuranceIcon.svg"/></div>
                <div style="font-size:14px; margin-left:15px">Insurance Provider
                <p style="font-weight:600;">${item.insurance_type}</p></div>
            </div>
            <div style='text-align:center; padding-bottom:30px; margin-top:25px;'>
            <span style="inline:block; font-size:14px; padding:5px 30px; background-color:#01F0D0; border-radius:40px; ">Show All Information</span>
            </div>
            
        `;
      }
    })
    .catch(function (error) {
      console.warn(error);
    });
};



// FUNCTION TO FETCH JESSICA'S LAB RESULT
const fetchJessicaLabResult = async () => {
  await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(function (data) {
      if (data.length > 3) {
        const item = data[3];
        const labResults = item.lab_results;
        const displayJessicaLabResult = document.getElementById(
          "displayJessicaLabResult"
        );
        displayJessicaLabResult.innerHTML = "";

        const ul = document.createElement("ul");
        ul.style.listStyleType = "none"; 

        labResults.forEach((result) => {
          const li = document.createElement("li");
          li.textContent = result;
          ul.appendChild(li);
        });

        displayJessicaLabResult.appendChild(ul);
      }
    })
    .catch(function (error) {
      console.warn(error);
    });
};



// FUNCTION TO FETCH JESSICA'S DIAGNOSTIC DETAILS
const fetchJessicaDiagnosticList = async () => {
  await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(function (data) {
      if (data.length > 3) {
        const item = data[3];
        const diagnostic_list = item.diagnostic_list;
        const displayJessicaDiagnosticList = document.getElementById(
          "displayJessicaDiagnosticList"
        );

        displayJessicaDiagnosticList.innerHTML = "";

        const table = document.createElement("table");
        table.className = "diagnostic-table"; 
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        const headerRow = document.createElement("tr");
        const headerName = document.createElement("th");
        headerName.textContent = "Name";
        const headerDescription = document.createElement("th");
        headerDescription.textContent = "Description";
        const headerStatus = document.createElement("th");
        headerStatus.textContent = "Status";

        headerRow.appendChild(headerName);
        headerRow.appendChild(headerDescription);
        headerRow.appendChild(headerStatus);
        thead.appendChild(headerRow);

        diagnostic_list.forEach((diagnostic) => {
          const row = document.createElement("tr");

          const nameCell = document.createElement("td");
          nameCell.textContent = diagnostic.name;
          const descriptionCell = document.createElement("td");
          descriptionCell.textContent = diagnostic.description;
          const statusCell = document.createElement("td");
          statusCell.textContent = diagnostic.status;

          row.appendChild(nameCell);
          row.appendChild(descriptionCell);
          row.appendChild(statusCell);
          tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);

        displayJessicaDiagnosticList.appendChild(table);
      }
    })
    .catch(function (error) {
      console.warn(error);
    });
};



// FUNTION TO FETCH PATIENTS DATA
const fetchPatientsData = async () => {
  await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(function (data) {
      console.log(data);
      data.map((eachItem) => {
        console.log(eachItem.name);
        displayPatients.innerHTML += `
        <div class="row mb-2">
        <div class="col-md-3"><img style="width:40px; margin-bottom:10px;" src="${eachItem.profile_picture}"></div>
        <div class="col-md-6" style="font-size:14px"><span style="font-weight:600">${eachItem.name}</span> <br> <span>${eachItem.gender}</span>, <span>${eachItem.age}</span></div>
        <div class="col-md-3"><i class="bi bi-three-dots"></i></div>
        </div>
    `;
      });
    })
    .catch(function (error) {
      console.warn(error);
    });
};



// FETCH JESSICAL DIAGNOSIS HISTORY
const fetchJessicaDiagnosisHistory = async () => {
    await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(function (data) {
        if (data.length > 3) {
          const item = data[3];
          const diagnosisHistory = item.diagnosis_history;
          const displayJessicaDiagnosisHistory = document.getElementById("displayJessicaDiagnosisHistory");
  
          displayJessicaDiagnosisHistory.innerHTML = "";
  
          const history = diagnosisHistory.find(entry => entry.month === "March" && entry.year === 2024);
  
          if (history) {
            const div = document.createElement("div");
            div.style.marginBottom = "20px"; 
            
            const systolic = document.createElement("p");
            systolic.textContent = `
            Systolic`;
            systolic.style.marginTop = "-42px"
            div.appendChild(systolic);

            const systolicValue = document.createElement("h5");
            systolicValue.textContent = `
            ${history.blood_pressure.systolic.value}`;
            systolicValue.style.marginTop = "-10px"
            div.appendChild(systolicValue);

            const systolicLevel = document.createElement("p");
            systolicLevel.textContent = `
            ${history.blood_pressure.systolic.levels}`;
            systolicLevel.style.fontSize = "12px"
            div.appendChild(systolicLevel);

            const diastolic = document.createElement("p");
            diastolic.textContent = `
            Diastolic`;
            div.appendChild(diastolic);

            const diastolicValue = document.createElement("h5");
            diastolicValue.textContent = `
            ${history.blood_pressure.diastolic.value}`;
            diastolicValue.style.marginTop = "-10px"
            div.appendChild(diastolicValue);

            const diastolicLevel = document.createElement("p");
            diastolicLevel.textContent = `
            ${history.blood_pressure.diastolic.levels}`;
            diastolicLevel.style.fontSize = "12px"
            div.appendChild(diastolicLevel);
  
            displayJessicaDiagnosisHistory.appendChild(div);
          } else {
            const noDataMessage = document.createElement("p");
            noDataMessage.textContent = "No data available for March 2024.";
            displayJessicaDiagnosisHistory.appendChild(noDataMessage);
          }
        }
      })
      .catch(function (error) {
        console.warn(error);
      });
  };
  

//   

const fetchJessicaDiagnosisCard1 = async () => {
  
    await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(function (data) {
        if (data.length > 3) {
          const item = data[3];
          const diagnosisHistory = item.diagnosis_history.filter(
            (history) => history.month === "March" && history.year === 2024
          );
          const displayJessicaDiagnosisCard1 = document.getElementById(
            "displayJessicaDiagnosisCard1"
          );
  
          displayJessicaDiagnosisCard1.innerHTML = "";
  
          diagnosisHistory.forEach((history) => {
            const card1 = document.createElement("div");
            card1.className = "card1";
  
           
            const img = document.createElement("img");
            img.src = "./Asset/main/respiratory rate.png";
            img.alt = "Profile Picture";
            img.style.width = "80px";
            img.style.height = "80px";
            img.style.borderRadius = "50%";
            img.style.display = "block";
            img.style.margin = "10px";
  
            card1.appendChild(img);

            const respiratoryRate = document.createElement("p");
            respiratoryRate.textContent = `Respiratory Rate`;
            card1.appendChild(respiratoryRate);

            const respiratoryRateValue = document.createElement("h5");
            respiratoryRateValue.textContent = `${history.respiratory_rate.value} bpm`;
            card1.appendChild(respiratoryRateValue);
            const respiratoryRateLevel = document.createElement("p");
            respiratoryRateLevel.textContent = `${history.respiratory_rate.levels} `;
            card1.appendChild(respiratoryRateLevel);
  
            displayJessicaDiagnosisCard1.appendChild(card1);
          });
        }
      })
      .catch(function (error) {
        console.warn(error);
      });
  };
const fetchJessicaDiagnosisCard2 = async () => {
  
    await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(function (data) {
        if (data.length > 3) {
          const item = data[3];
          const diagnosisHistory = item.diagnosis_history.filter(
            (history) => history.month === "March" && history.year === 2024
          );
          const displayJessicaDiagnosisCard2 = document.getElementById(
            "displayJessicaDiagnosisCard2"
          );
  
          displayJessicaDiagnosisCard2.innerHTML = "";
  
          diagnosisHistory.forEach((history) => {
            const card2 = document.createElement("div");
            card2.className = "card2";
  
            const img = document.createElement("img");
            img.src = "./Asset/main/temperature.png";
            img.alt = "Profile Picture";
            img.style.width = "80px";
            img.style.height = "80px";
            img.style.borderRadius = "50%";
            img.style.display = "block";
            img.style.margin = "10px";
  
            card2.appendChild(img);

            const temperature = document.createElement("p");
            temperature.textContent = `Temperature`;
            card2.appendChild(temperature);
            const temperatureValue = document.createElement("h5");
            temperatureValue.textContent = `${history.temperature.value}°F `;
            card2.appendChild(temperatureValue);
            const temperatureLevel = document.createElement("p");
            temperatureLevel.textContent = `${history.temperature.levels}`;
            card2.appendChild(temperatureLevel);
  
            displayJessicaDiagnosisCard2.appendChild(card2);
          });
        }
      })
      .catch(function (error) {
        console.warn(error);
      });
  };
const fetchJessicaDiagnosisCard3 = async () => {
  
    await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(function (data) {
        if (data.length > 3) {
          const item = data[3];
          const diagnosisHistory = item.diagnosis_history.filter(
            (history) => history.month === "March" && history.year === 2024
          );
          const displayJessicaDiagnosisCard3 = document.getElementById(
            "displayJessicaDiagnosisCard3"
          );
  
          displayJessicaDiagnosisCard3.innerHTML = "";
  
          diagnosisHistory.forEach((history) => {
            const card3 = document.createElement("div");
            card3.className = "card3";
            
            const img = document.createElement("img");
            img.src = "./Asset/main/heart rate.png";
            img.alt = "Profile Picture";
            img.style.width = "80px";
            img.style.height = "80px";
            img.style.borderRadius = "50%";
            img.style.display = "block";
            img.style.margin = "10px";
  
            card3.appendChild(img);

            const heartRate = document.createElement("p");
            heartRate.textContent = `Heart Rate`;
            card3.appendChild(heartRate);
            const heartRateValue = document.createElement("h5");
            heartRateValue.textContent = `${history.heart_rate.value} bpm`;
            card3.appendChild(heartRateValue);
            const heartRateLevel = document.createElement("p");
            heartRateLevel.textContent = `${history.heart_rate.levels}`;
            card3.appendChild(heartRateLevel);
  
          
            displayJessicaDiagnosisCard3.appendChild(card3);
          });
        }
      })
      .catch(function (error) {
        console.warn(error);
      });
  };
  
// FETCH JESSICA CHART
  const fetchJessicaChart = async () => {

    await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        if (data.length > 3) {
          const item = data[3];
          const diagnosisHistory = item.diagnosis_history;
  
          diagnosisHistory.sort((a, b) => {
            const dateA = new Date(`${a.month} 1, ${a.year}`);
            const dateB = new Date(`${b.month} 1, ${b.year}`);
            return dateB - dateA;
          });
          const lastSixMonths = diagnosisHistory.slice(0, 6).reverse();
  
          const labels = lastSixMonths.map(entry => `${entry.month} ${entry.year}`);
          const systolicData = lastSixMonths.map(entry => entry.blood_pressure.systolic.value);
          const diastolicData = lastSixMonths.map(entry => entry.blood_pressure.diastolic.value);
  
          const ctx = document.getElementById('diagnosisChart').getContext('2d');
          const diagnosisChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Systolic Blood Pressure',
                  data: systolicData,
                  borderColor: '#E66FD2', 
                  fill: false,
                },
                {
                  label: 'Diastolic Blood Pressure',
                  data: diastolicData,
                  borderColor: '#7E6CAB',
                  fill: false,
                }
              ]
            },
            options: {
              responsive: true,
              scales: {
                x: {
                  display: true,
                  title: {
                    display: false,
                  }
                },
                y: {
                  display: true,
                  title: {
                    display: false,
                    // text: 'Blood Pressure'
                  }
                }
              }
            }
          });
        }
      })
      .catch(error => {
        console.warn(error);
      });
  };
  
  fetchJessicaChart();
  


  