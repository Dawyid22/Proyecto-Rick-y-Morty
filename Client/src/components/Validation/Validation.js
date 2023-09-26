const validation = (userData) => {

    const errors = {}

    if(!/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(userData.email)){
        errors.email = "The email entered is invalid"
    }

    if(!userData.email){
        errors.email = "You must enter an email address"
    }

    if(userData.email.length > 35){
        errors.email = "Username must be less than 35 characters"
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "The password must contain at least one number"
    }

    if(userData.password.length < 6  || userData.password.length > 10){
        errors.password = "Password must be between 6 and 10 characters"
    }

    return errors
}

export default validation