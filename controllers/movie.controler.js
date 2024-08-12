export const movieIndex = (req, res) => {
    res.send("get all res");
};

export const moviePost = (req, res) => {
    console.log(req.body);
    return res.json(req.body)
    
};

export const movieUpdate = (req, res) => {
    res.send("get all res for update");
};

export const movieDelete = (req, res) => {
    res.send("get all res for delete");
};


