/**
 * round wind direction degree in 8 groups (e.g. 0, 45, 90, 135, 180, 225, 270, 315)
 * @param {number} deg - wind direction degree
 */
export const getRoundedDegree = deg => (Math.round(deg / 45) % 8) * 45;
