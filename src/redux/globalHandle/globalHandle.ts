export const EditData = (data: any, id: any, product: any) => {
    const newData = data.map((item: any) =>
        (item.id === id ? product : item)
    )
    return newData;
}

export const DeleteData = (data: any, id: any) => {
    const newData = data.filter((item: any) => item.id !== id)
    return newData;
}