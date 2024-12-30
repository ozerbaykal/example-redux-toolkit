const compareName = (name, surname) => {

    return ` ${name} ${surname}`;
}

const getInitialNameSurname = (name, surname) => {
    const nameInitial = name[0].toUpperCase();
    const surnameInitial = surname[0].toUpperCase();
    return nameInitial + surnameInitial;


}




export { compareName, getInitialNameSurname };