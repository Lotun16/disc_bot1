module.exports = {
    name: 'search',
    description: "this is a search command",
    execute(message, args, search){
        const full = message.content.substring(1);
        const point = full.indexOf('search') + 7;
        const temp = full.slice(point, full.length);

        message.channel.send(`Google Search Results: [${temp}]`);

        const params = {
            q: temp,
            location: "Austin, Texas, United States",
            hl: "en",
            gl: "us",
            google_domain: "google.com"
        };
    
        const callback = function(data) {
            const ray = [];
            const daty = data['organic_results'];
            daty.forEach(item => {
                ray.push(item.link);
            })
            const temper = ray.slice(0,5);
            console.log(temper);
            temper.forEach(item => {
                message.channel.send(item);
            })
           
        };
        search.json(params, callback);
    }
}