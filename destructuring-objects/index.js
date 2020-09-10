const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles',
        province: {
            street: {
                road: 'Los Angeles road',
            }
        }
    }
};

const { name, club, address: { city }, address: { province: { street: { road } } } } = player;

console.log(`name: ${name} and club: ${club} and city:${city} and road: ${road}`);