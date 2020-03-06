function addLocation(requestBody) {
    let { userName, location } = requestBody;
    let newPrevLocation = requestBody.previousLocation.map().push(location);

    const newLocation = {
        userName: this.userName,
        location: this.location,
        previousLocation = newPrevLocation
    }

    return newLocation;
}

addLocation();

// exports.module = addLocation();