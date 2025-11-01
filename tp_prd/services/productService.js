
function Delay(ms){
    new Promise(res => setTimeout(res, ms));
}

export async function AddProduct(list, newP){
    await Delay(300)
    const id = Math.max(...list.map(p => p.id)) + 1;
    return [...list, { id, ...newP }];
}




