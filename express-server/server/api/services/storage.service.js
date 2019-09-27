import storage from 'node-persist';

class StorageService {

  async all() {
    var data = [];
    await storage.forEach(async function(datum) {
        data.push({"id"   : parseInt(datum.key),
                   "name" : datum.value,
                 });
    });
    return data;
  }

  async byId(id){
  	let datum = await storage.get(id.toString());
	let data = (typeof datum != 'undefined') ? {"id"   : id,"name" : datum} : {};
    return data;
  }

  async create(id,name,ttl) {
  	ttl *= 1000;
    let data = await storage.set(id.toString(), name, {ttl:  ttl.toString() });
    return data.content.key;
  }
  async delete (id){
    await storage.removeItem(id);
    return true;
  }
}

export default new StorageService();
