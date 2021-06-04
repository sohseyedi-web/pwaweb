// No API is used in this project and only these codes are for example

const URL_SERVER_V1 = '';

const getAll = () => {
    return fetch(URL_SERVER_V1)
}
const getbyId = (id) => {
    return fetch(URL_SERVER_V1 + id)
}
const postData = (dataFile) => {
    return fetch(URL_SERVER_V1, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(dataFile)
    })
}
const updateData = (dataFile) => {
    return fetch(URL_SERVER_V1 + dataFile.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(dataFile)
    })
}
const deleteData = (id) => {
    return fetch(URL_SERVER_V1 + id, {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            id: id
        })
    })
}