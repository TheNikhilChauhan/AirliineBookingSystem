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
