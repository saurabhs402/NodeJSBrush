// app.get('/', function (req, res) {

//     // res.status(200).send("<h1> Hello World </h1>"); // default text/html
//     res.status(200).json([
//         {
//             "message": "Hello-World",
//             "Status": 200
//         },
//         {
//             "message": "Hello-Universe",
//             "Status": 200

//         }
//     ]
//     ); // here can pass json as well as js object


// })

/** Method-1  */

// // GET - api/v1/movies
// app.get('/api/v1/movies', getAllMovies);

// // GET - api/v1/movies/:id -- colon specify route parameter
// app.get('/api/v1/movies/:id/:name?/:x?', getMovie);

// // POST - api/v1/movies
// app.post('/api/v1/movies', createMovie);

// // PATCH - api/v1/movies
// app.patch('/api/v1/movies/:id', updateMovie);

// // DELETE - api/v1/movies
// app.delete('/api/v1/movies/:id', deleteMovie);



/** Method-2 Merge using common routes as one using route method */


// app.route('/api/v1/movies/')
//     .get(getAllMovies)
//     .post(createMovie)

// app.route('/api/v1/movies/:id')
//     .get(getMovie)
//     .patch(updateMovie)
//     .delete(deleteMovie)


/** Method-3
 * Use Middleware to create diff. routes for diff. resources and 
 * take out common route and pass when applying middleware using use method
*/



const moviesRouter = express.Router();

// Mounting routes in express
app.use('/api/v1/movies/', moviesRouter)



moviesRouter.route('/')
    .get(getAllMovies)
    .post(createMovie)
moviesRouter.route('/:id')
    .get(getMovie)
    .patch(updateMovie)
    .delete(deleteMovie)
