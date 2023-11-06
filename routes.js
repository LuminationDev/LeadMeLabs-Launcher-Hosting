module.exports = (app) => {
    //Hosting the launcher
    app.get('/program-launcher-version', (req, res) => {
        res.send(`1.0.1 ${baseURL(req.hostname, 'program-launcher')} 8e619a0ea8c776bff9d8bb3c34a68bed11ff6e65`);
    });

    app.get('/program-launcher', (req, res) => {
        var file = __dirname + '/applications/Launcher.zip';
        res.download(file);
    });
};

//Get the base URL of the current hosting site and return the program route (the queried minus the version string)
let baseURL = (host, path) => {
    let fullUrl = 'https://' + host + "/" + path;
    return baseUrl = fullUrl.replace("-version", "");
}