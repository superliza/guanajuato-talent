const ready = () => {
    getAPI();
}

const getAPI = () => {
    let date = new Date();
    // console.log(date);
    
    let year = date.getFullYear();
    // console.log(year);
    
    let month = date.getMonth() + 1;
    // console.log(month);
    
    let day = date.getDay() + 1;
    // console.log(day);

    if (month < 10) {
        month = "0" + month;
    }

    if (day < 10) {
        day = "0" + day;
    }
    
    fetch(`https://api.foursquare.com/v2/venues/explore?ll=21.0185800,-101.2591000&client_id=BOBTTT04CAQHPKSQIWSQZVNI12QIBDRRZJ3FJ151BPVFXGQK&client_secret=OQTL0MPVUGC14F52B0EKPYLSXBXLB5YK04MJHY2HEPYLV4RM&v=${year}${month}${day}`)
    .then(status)
    .then(json)
    .then(data)
    .catch(error)
}

const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

const json = response => {
    return response.json();
}

const data = places => {
    let placesRecomended = places.response.groups[0].items;

    for (item of placesRecomended) {
        let name = item.venue.name;
        let category = item.venue.categories[0].name;
        let commits = item.tips[0].text;
        
    }
    
//    let venues = places.response.venues;
//    let template = ``;
//     for (item of venues) {
//         let venuesId = item.id;
//         let venuesName = item.name;

//         template += `<h4> ${venuesName} </h4>`

        // console.log(item.location.city);
        // console.log(item.location.address);
        // console.log(item.location);
    // }

//    let divName = document.getElementById('name');
//    divName.innerHTML = template;
}

const error = failed => {
    console.log('Request failed', error);
}

window.onload = ready;
