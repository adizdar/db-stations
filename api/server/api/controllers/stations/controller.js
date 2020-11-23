import StationsService from '../../services/stations.service';

export class Stations {
  all(req, res) {
    StationsService.all().then((result) => res.json(result));
  }
}

export default new Stations();
