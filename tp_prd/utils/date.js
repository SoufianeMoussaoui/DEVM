

// More readable version "to me" : 
/*
export function isExp(dt)
{
    return new Date() > new Date(dt);
}

*/


export const isExpired = (isoDate, ref = new Date()) =>
new Date(isoDate) < ref;

