const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
]);
let next = first.move("Alice's House");

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};
const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

function runSingleRobot(robot, task, memory) {
  let robotCounter = 0;
  while (task.parcels.length != 0) {
    let robot1Result = robot(task, memory);
    memory = robot1Result.memory;
    task = task.move(robot1Result.direction);
    robotCounter++;
  }
  return robotCounter;
}

function goalOrientedRobot2({ place, parcels }, route) {
  if (route.length == 0) {
    let ownedParcels = parcels.filter((p) => p.place == place);
    let unOwnedParcels = parcels.filter((p) => p.place != place);

    let routes = ownedParcels
      .map((t) => findRoute(roadGraph, place, t.address))
      .concat(unOwnedParcels.map((t) => findRoute(roadGraph, place, t.place)));
    for (let array of routes) {
      if (route.length == 0 || route.length > array.length) {
        route = array;
      }
    }
  }

  return { direction: route[0], memory: route.slice(1) };
}

/*
Za parcele koje su kod tebe provjeri koliko su ti daleko odredišta
Za parcele koje nisu kod tebe provjeri koliko su ti daleko
  Dostavi ili pokupi najbližu parcelu
*/
function compareRobots(robot1, memory1, robot2, memory2) {
  let robot1Counter = 0;
  let robot2Counter = 0;
  for (i = 0; i < 100; i++) {
    let task = VillageState.random();
    robot1Counter += runSingleRobot(robot1, task, memory1);
    robot2Counter += runSingleRobot(robot2, task, memory2);
  }

  return console.log(robot1Counter / 100, robot2Counter / 100);
}

compareRobots(goalOrientedRobot2, [], goalOrientedRobot, []);
