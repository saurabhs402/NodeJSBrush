const fs = require('fs')

// convert JSON to js object
let movies = JSON.parse(fs.readFileSync('./Data/movies.json', 'utf-8'));

const getAllMovies = (req, res) => {

    res.status(200).json(
        {
            status: "success",
            requestedAt: req.requestedAt,
            count: movies.length,
            data: {
                movies: movies
            }
        }
    );

}
const getMovie = function (req, res) {
    console.log(req.params + " Controller");
    let id = Number(req.params.id);


    let movie = movies.find(function (value) {
        return value.id === id;
    })

    // if (!movie){
    //     return res.status(404).json({
    //         status: "Fail",
    //         message: `Movie with that id=${id} not exist`

    //     }
    //     )
    // }


    res.status(200).json({
        status: "success",
        data: {
            movie: movie
        }

    }
    )

}

const validateBody = function (req, res, next) {
    if (!req.body.name || !req.body.releaseYear) {
        return res.status(400).json({
            status: "Fail",
            message: "Not a valid movie data"

        })
    }
    next()
}
const createMovie = function (req, res) {
    // MongoDB automatically handles id it but here we are dealing with json file so we 
    // need to do this manually
    let newId = movies[movies.length - 1].id + 1;
    let newMovie = Object.assign({ id: newId }, req.body);

    movies.push(newMovie);

    // fs.writeFileSync('./Data/movie.json',movies);
    //-- to avoid blocking rules we can't place sync or blocking code inside callback which is executed by eventLoop

    fs.writeFile('./Data/movies.json', JSON.stringify(movies), function (err) {
        // err="error"
        if (!err) {
            console.log('New movie added');
            res.status(201).send(
                {
                    status: "success",
                    data: {
                        movie: newMovie
                    }

                }
            );
        }
        else {
            console.log(err);
            res.status(400).send(
                {
                    status: "error",
                    data: {
                        movie: {}
                    }

                }
            )
        }
    });


    // console.log(req.body)

}

const updateMovie = function (req, res) {

    let id = Number(req.params.id);
    let x = 12;
    let movieToUpdate = movies.find(function (value, index) {
        if (value.id === id) x = index;
        return value.id === id;
    })

    // if (!movieToUpdate) {
    //     return res.status(404).json(
    //         {
    //             status: "Fail",
    //             message: `No movie with id ${id} is found`
    //         }

    //     )

    // }
    // let releaseYear = req.body.releaseYear;
    // movieToUpdate.releaseYear = releaseYear;--work only for release year
    Object.assign(movieToUpdate, req.body);

    let index = movies.indexOf(movieToUpdate);

    movies[index] = movieToUpdate
    console.log(x); //working because of lexical scope and closure( it can even after scope dies of parent)

    fs.writeFile('./Data/movies.json', JSON.stringify(movies), function (err) {

        res.status(200).json(
            {
                status: "success",
                data: {
                    movie: movieToUpdate
                }
            }

        )

    })

}

const deleteMovie = function (req, res) {

    let id = Number(req.params.id);
    let ind = -1;
    let movieToDelete = movies.find(function (value, index) {

        if (value.id === id) {
            ind = index
            return true
        }
    })

    if (movieToDelete) {
        movies.splice(ind, 1);

        fs.writeFile('./Data/movies.json', JSON.stringify(movies), function (err) {
            res.status(204).json(
                {
                    status: "success",
                    data: {
                        movie: null
                    }
                }

            )
        })

    } else {
        res.status(404).json(
            {
                status: "Fail",
                message: `movie wit id=${id} not found`
            }

        )


    }
}

const checkId = function (req, res, next, value) {
    let movie = movies.find(function (ele) {
        return ele.id === Number(value);
    })

    if (!movie) {
        return res.status(404).json({
            status: "Fail",
            message: `Movie with that id=${value} not exist`

        }
        )
    }

    next();


}

module.exports = {
    getAllMovies, getMovie, createMovie,
    updateMovie, deleteMovie, checkId,
    validateBody
};
// // alternative--wrong way
// exports.validateBody