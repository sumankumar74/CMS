export const formatPrice = (price)=>{
    return new Intl.NumberFormat("en-us",{
        style:"currency",
        currency:"INR",
    }).format(price)
}

export const formatDuration =(duration)=>{
    return `${duration} ${duration == 1 ? "week":"weeks"}`
}   

export const formatSeat = (seat)=>{
    return `${seat} ${seat == 1 ? "seat":"seats"}`
}