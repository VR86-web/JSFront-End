function vacation(group_of_people, type_of_group, day_of_week) {
    let total_price = 0;

    switch (type_of_group) {
        case 'Students':
            if (day_of_week === 'Friday') {
                total_price = group_of_people * 8.45
            } else if (day_of_week === 'Saturday') {
                total_price = group_of_people * 9.8
            } else if (day_of_week === 'Sunday') {
                total_price = group_of_people * 10.46
            }

            if (group_of_people >= 30) {
                total_price *= 0.85
            }
            break;
        case 'Business':
            if (group_of_people >= 100) {
                group_of_people -= 10
            }

            if (day_of_week === 'Friday') {
                total_price = group_of_people * 10.9
            } else if (day_of_week === 'Saturday') {
                total_price = group_of_people * 15.6
            } else if (day_of_week === 'Sunday') {
                total_price = group_of_people * 16
            }
            break;
        case 'Regular':
            if (day_of_week === 'Friday') {
                total_price = group_of_people * 15
            } else if (day_of_week === 'Saturday') {
                total_price = group_of_people * 20
            } else if (day_of_week === 'Sunday') {
                total_price = group_of_people * 22.5
            }

            if (group_of_people >= 10 && group_of_people <= 20) {
                total_price *= 0.95
            }
            break;
    }

    console.log(`Total price: ${total_price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday")