import City from "../models/city.js";

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity({ cityId }) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      throw { error };
    }
  }
}

export default CityRepository;
