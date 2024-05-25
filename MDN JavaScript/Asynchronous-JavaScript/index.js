const primeNumber = () => {
  const MAX_PRIME = 1000000;

  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  const random = (max) => Math.floor(Math.random() * max);

  function generatePrimes(quota) {
    const primes = [];
    while (primes.length < quota) {
      const candidate = random(MAX_PRIME);
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
    return primes;
  }

  const quota = document.querySelector("#quota");
  const output = document.querySelector("#output");

  document.querySelector("#generate").addEventListener("click", () => {
    const primes = generatePrimes(quota.value);
    output.textContent = `Finished generating ${quota.value} primes!`;
  });

  document.querySelector("#reload").addEventListener("click", () => {
    document.location.reload();
  });
};

const XMLHTTPrequest = () => {
  const log = document.querySelector(".event-log");

  document.querySelector("#xhr").addEventListener("click", () => {
    log.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () => {
      log.textContent = `${log.textContent} Finished with status: ${xhr.status}`;
    });
    xhr.open(
      "GET",
      "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
    );

    xhr.send();
    log.textContent = `${log.textContent} Started XHR request\n`;
  });
  document.querySelector("#reload").addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
  });
};

const callBacks = () => {
  const doStep1 = (init) => {
    return init + 1;
  };

  const doStep2 = (init) => {
    return init + 2;
  };

  const doStep3 = (init) => {
    return init + 3;
  };

  const doOperation = () => {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);

    console.log(`Result: ${result}`);
  };

  doOperation();

  // DOING THE SAME EXAMPLE WITH THE CALLBACK

  function doStepOne(init, callBack) {
    const result = init + 1;
    callBack(result);
  }

  function doStepTwo(init, callBack) {
    const result = init + 2;
    callBack(result);
  }

  function doStepThree(init, callBack) {
    const result = init + 3;
    callBack(result);
  }

  function doOperations() {
    doStepOne(0, (result1) => {
      doStepTwo(result1, (result2) => {
        doStepThree(result2, (result3) => {
          console.log(`Value of Result : ${result3}`);
        });
      });
    });
  }
  doOperations();
};

// FETCHING JASON DATA PROMISES
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Recieved response ${response.status}`);
// });
// console.log("Started Request : ");

// fetchPromise.then((response) => {
//   const jsonResponse = response.json();
//   jsonResponse.then((data) => {
//     console.log(data[0].name);
//   });
// });
// const show = document.querySelector(".json");
const showingTheWholeApiData = () => {
  fetchPromise
    .then((resp) => resp.json())
    .then((jsonData) => {
      console.log(jsonData[1].name);
      const jsonDataString = JSON.stringify(jsonData);
      show.textContent = jsonDataString;
    })
    .catch((error) => console.error(`Error Fetching Data : ${error}`));
};
const callingApiThroughAsyncFun = () => {
  let jsonData;

  async function fetchData() {
    try {
      const response = await fetchPromise;
      jsonData = await response.json();
      // JSON.stringify(jsonData);
      console.log(jsonData);
      show.textContent = jsonData[0].name;
    } catch (error) {
      console.error("Error Fetching Data:", error);
    }
  }
  fetchData();
};

const throwErrorInFetch = () => {
  fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      jsonData = data;
      show.textContent = jsonData[3].name;
    });
};

const ErrorWhileFetchingData = () => {
  const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );

  fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });
};
// ErrorWhileFetchingData();

// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
// );
// const fetchPromise3 = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// );

// it will only show the data if all the Api keys are correct
const callingAllApis = () => {
  Promise.all(fetchPromise1, fetchPromise2, fetchPromise3)
    .then((responses) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => console.log(`Error Fetching Data: ${error}`));

  Promise.any(fetchPromise1, fetchPromise2, fetchPromise3).then((response) => {
    console.log(`${response.url} : ${respnse.status}`).catch();
  });
};

const promiseAny = () => {
  Promise.any(fetchPromise1, fetchPromise2, fetchPromise3)
    .then((response) => {
      console.log(`${response.url} : ${response.status}`);
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });
};

// Async Await Function ///////////////////////////

const fetchProduction = async () => {
  try {
    const response = await fetchPromise;
    if (!response.ok) {
      throw new Error(`HTTP error : ${response.status}`);
    }
    const data = await response.json();
    console.log(data[0]);
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    li1.textContent = data[0].name;
    li2.textContent = data[0].type;
    li3.textContent = data[0].price;
    li4.textContent = data[0].type;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    document.body.appendChild(ul);
  } catch (error) {
    console.error(`Error While Fetching Data : ${error}`);
  }
};
// fetchProduction();

const fetchDataP = () => {
  const fetchApi = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );

  const fetchApiData = async () => {
    try {
      const response = await fetchApi;

      if (!response.ok) {
        throw new Error(`Error Fetching Data ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error(`Catched Error : ${error}`);
    }
  };
  const promise = fetchApiData();
  promise.then((data) => console.log(data[3]));
};

const alarmButton = document.querySelector("#set-alarm");

const firstAlarmFunction = () => {
  let alarm;
  const setAlaram = () => {
    if (alarm) {
      clearTimeout(alarm);
      outPut.textContent = "";
    }
    alarm = setTimeout(() => {
      outPut.textContent = "Wake up!";
    }, 2000);
  };

  alarmButton.addEventListener("click", setAlaram);
};

const alaramFunctin = () => {
  const alarmSecondFun = (person, delay) => {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up ! ${person}`);
      }, delay);
    });
  };

  alarmButton.addEventListener("click", () => {
    alarmSecondFun("Ali", 1000).then((message) => {
      outPut.textContent = message;
    });
  });
};

const nameInput = document.querySelector("#name");
const delayInput = document.querySelector("#delay");
const alarmBtn = document.querySelector("#alarm-button");
const outPut = document.querySelector("#output");

const setAlarm = (person, delay) => {
  return new Promise((resolve) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wakup ! ${person}`);
    }, delay);
  });
};

alarmBtn.addEventListener("click", () => {
  setAlarm(nameInput.value, delayInput.value)
    .then((message) => (outPut.textContent = message))
    .catch((error) => (output.textContent = `Couldn't set alarm ${error}`));
});

const setAlarmAgain = (person, delay) => {
  return new Promise((resolve) => {
    if (delay < 0) {
      throw new Error(`Alarm delay must not be negative`);
    }
    setTimeout(() => {
      resolve = `Wakeup ${person}`;
    }, delay);
  });
};
alarmButton.addEventListener("click", async () => {
  try {
    const message = await setAlarmAgain(nameInput.value, delayInput.value);
    outPut.textContent = message;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});
