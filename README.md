<!--
Model based architecture

    -src/
        index.js //server
        models/
        controllers/
        middlewars/
        services/
        utils/
        config/
        repository/
    -tests/ [later]
    -static/
    -temp/
 -->

# DB Design

    - Airplane Table
    - Flight Table
    - Airport Table
    - City Table

    - A flight belongs to an airplane but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city.
    - One airport can have many flights but a flight belongs to one airport.

## Tables

### City -> id, name, created_at, updated_at

### Airport -> id, name, address, city_id, created_at, updated_at

    Relationship -> City has many airports and Airport belongs to a city (one to many relation)

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId
:integer
```
