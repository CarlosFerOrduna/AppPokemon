import {User} from '../model/User.js'

const login = () => {
    const users = JSON.parse(localStorage.getItem('users'))
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const user = users.find((u) => (u.email === email && u.password === password))

    if (typeof user === "object") {
        sessionStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('pokedex', JSON.stringify([]))
        window.location.href = './pages/home.html'
    } else {
        window.location.href = './index.html'
    }
}

export const reloadLogin = () => {
    setTimeout(() => {
        let btnLogin = document.querySelector('#login')
        if (!btnLogin) {
            return reloadLogin
        } else {
            btnLogin.addEventListener('click', login)
            return btnLogin
        }
    }, 1000)
}

const register = () => {
    const firstName = document.querySelector('#first-name').value
    const lastName = document.querySelector('#last-name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const confirmPasword = document.querySelector('#confirms-password').value

    if (password === confirmPasword && firstName && lastName && email && password && confirmPasword) {
        const users = JSON.parse(localStorage.getItem('users'))
        const user = new User(1, firstName, lastName, email, password)
        users.push(user)
        console.log(password, confirmPasword, firstName, lastName, email, password, confirmPasword)

        localStorage.setItem('users', JSON.stringify(users))
        sessionStorage.setItem('user', JSON.stringify(users))
        localStorage.setItem('pokedex', JSON.stringify([]))
        window.location.href = './pages/home.html'
    } else {
        window.location.href = './register.html'
    }
}

export const reloadRegister = () => {
    setTimeout(() => {
        let btnRegsiter = document.querySelector('#register')
        if (!btnRegsiter) {
            return reloadRegister
        } else {
            btnRegsiter.addEventListener('click', register)
            return btnRegsiter
        }
    }, 1000)
}

export const btnLogout = () => {
    const btnLogout = document.querySelector('.btn-logout')

    btnLogout.addEventListener('click', () => {
        sessionStorage.setItem('user', JSON.stringify([]))
    })
}