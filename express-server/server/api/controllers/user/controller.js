import storageService from '../../services/storage.service';
import getFolderSize from 'get-folder-size';
import storage from 'node-persist';

export class Controller {
  all(req, res) {
    //pull all data from storage
    storageService.all().then(r =>
      res
        .status(200)
        .send(JSON.stringify(r))
    );
  }

  byId(req, res) {
    //pull a single data by key
    storageService.byId(req.params.id).then(r => {
      if (r.hasOwnProperty('id')) 
        res.json(r);
      else 
        res.status(404).end();
    });
  }

  async create(req, res) {
    //check storage size
    getFolderSize(global.STORAGE_DIR, (err, size) => {
      if((size / 1024 / 1024).toFixed(2) > process.env.STORAGE_SIZE){
        res
          .status(400)
          .send('Storage exceeded');
      }
    });
    if(typeof await storage.get(req.body.id.toString())  == 'string'){  
        res
          .status(409)
          .send('user id already exsist').end();
          return;
    }
    //insert data to storage
    storageService.create(req.body.id,req.body.name,req.body.ttl).then(r =>
      res
        .status(201)
        .location(`/api/user/${r}`).end()
    );
  }
  async delete(req,res){
    if(typeof await storage.get(req.params.id.toString())  != 'string'){  
        res
          .status(404)
          .send('user not found').end();
          return;
    }
   storageService.delete(req.params.id).then(r =>
      res
        .status(200)
    );
  }
}
export default new Controller();
