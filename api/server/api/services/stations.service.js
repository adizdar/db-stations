import l from '../../common/logger';
import db from './stations.db.service';

class StationsService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return db.all();
  }
}

export default new StationsService();
