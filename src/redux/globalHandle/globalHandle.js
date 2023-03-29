export const EditData = (data, id, product) => {
    const newData = data.map(item =>
        (item.id === id ? product : item)
    )
    return newData;
}

export const DeleteData = (data, id) => {
    const newData = data.filter(item => item.id !== id)
    return newData;
}