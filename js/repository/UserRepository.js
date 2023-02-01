export const saveUserLS =  () => {
    fetch('./js/data/users.json')
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('users', JSON.stringify(data))
        })
        .catch((error) => {
            console.log(error)
        })
}