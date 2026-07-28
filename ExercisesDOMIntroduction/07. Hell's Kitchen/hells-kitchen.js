function solve() {
    const input = document.querySelector('#inputs textarea').value;
    const bestRestaurantOutput = document.querySelector('#bestRestaurant p');
    const workersOutput = document.querySelector('#workers p');

    const restaurantsInput = JSON.parse(input);

    const restaurants = {};

    for (let restaurantInfo of restaurantsInput) {

        let [restaurantName, workersInfo] = restaurantInfo.split(' - ');

        if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {
                workers: [],
                avgSalary: 0,
                bestSalary: 0
            };
        }

        let workers = workersInfo.split(', ');

        for (let worker of workers) {
            let [workerName, salary] = worker.split(' ');

            restaurants[restaurantName].workers.push({
                name: workerName,
                salary: Number(salary)
            });
        }

        let totalSalary = 0;
        let bestSalary = 0;

        for (let worker of restaurants[restaurantName].workers) {
            totalSalary += worker.salary;

            if (worker.salary > bestSalary) {
                bestSalary = worker.salary;
            }
        }

        restaurants[restaurantName].avgSalary =
            totalSalary / restaurants[restaurantName].workers.length;

        restaurants[restaurantName].bestSalary = bestSalary;
    }

    let bestRestaurantName = '';
    let highestAverageSalary = 0;

    for (let restaurantName in restaurants) {

        if (restaurants[restaurantName].avgSalary > highestAverageSalary) {

            highestAverageSalary = restaurants[restaurantName].avgSalary;
            bestRestaurantName = restaurantName;
        }
    }

    let bestRestaurant = restaurants[bestRestaurantName];

    bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

    bestRestaurantOutput.textContent =
        `Name: ${bestRestaurantName} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

    let workersText = '';

    for (let worker of bestRestaurant.workers) {
        workersText += `Name: ${worker.name} With Salary: ${worker.salary} `;
    }

    workersOutput.textContent = workersText.trim();
}