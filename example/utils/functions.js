const compareName = (name, surname) => {

    return ` ${name} ${surname}`;
}

const getInitialNameSurname = (name, surname) => {
    const nameInitial = name[0].toUpperCase();
    const surnameInitial = surname[0].toUpperCase();
    return nameInitial + surnameInitial;


}

const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    return randomColor;
};




export { compareName, getInitialNameSurname, getRandomColor }; 