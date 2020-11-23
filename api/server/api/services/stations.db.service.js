import Station from '../models/station';
import Position from '../models/position';
import Marker from '../models/marker';

class StationsDatabase {
  constructor() {
    this.mockData = [];
    this.idCounter = 0;

    const stations = [
      [
        new Position(50.114625, 8.624758), 
        new Position(50.115581, 8.625163),
        new Position(50.115251, 8.626433),
        new Position(50.114668, 8.626218),
      ],
      [
        new Position(50.112148, 8.628355), 
        new Position(50.111979, 8.628265),
        new Position(50.111877, 8.628481),
        new Position(50.111942, 8.628701),
        new Position(50.112086, 8.628563),
      ],
      [
        new Position(50.110978, 8.620388),
        new Position(50.110717, 8.620276),
        new Position(50.110904, 8.621038),
      ],
    ];

    const bicycles = [
      [
        new Marker(new Position(50.115050, 8.625609)), 
        new Marker(new Position(50.115056, 8.626041)),
        new Marker(new Position(50.115073, 8.625684)),
        new Marker(new Position(50.114997, 8.625832)),
      ],
      [
        new Marker(new Position(50.112043, 8.628528)), 
        new Marker(new Position(50.112000, 8.628498)),
        new Marker(new Position(50.111991, 8.628452)),
      ],
      [
        new Marker(new Position(50.110882, 8.620826)), 
        new Marker(new Position(50.110871, 8.620608)),
      ],
    ];

    this.insert(stations[0], bicycles[0]);
    this.insert(stations[1], bicycles[1]);
    this.insert(stations[2], bicycles[2]);
  }

  all() {
    return Promise.resolve(this.mockData);
  }

  insert(stationCoordinates, bicycleCoordinates) {
    const record = new Station(
      this.idCounter,
      stationCoordinates, 
      bicycleCoordinates
    );

    this.idCounter += 1;
    this.mockData.push(record);

    return Promise.resolve(record);
  }
}

export default new StationsDatabase();
