import Movie from './models/movies.model.js';

export const movieIndex = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const moviePost = async (req, res) => {
    console.log(req.body);
    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    });

    try {
        const movie = await newMovie.save();
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const moviedetails = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie == null) {
            res.status(404).json({ message: "Cannot find movie" });
        } else {
            res.json(movie);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const movieUpdate = async (req, res) => {
    try {
        const result = await Movie.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            desc: req.body.desc
        }, { new: true }); 

        if (result == null) {
            res.status(404).json({ message: "Cannot find movie" });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const movieDelete = async (req, res) => {

};
