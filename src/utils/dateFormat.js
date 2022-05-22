

const dateFormat = (date)=> {
    const d = new Date(date).toString().split(' ');
    return `${d[0]}.${d[2]}${d[1]}`;
}

export default dateFormat;