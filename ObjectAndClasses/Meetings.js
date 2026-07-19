function meetings(arr) {
    let meetings = []

    for (let meeting of arr) {
        let [weekDay, person] = meeting.split(' ')

        if (weekDay in meetings) {
            console.log(`Conflict on ${weekDay}!`);

        } else {
            meetings[weekDay] = person
            console.log(`Scheduled for ${weekDay}`)
        }

    }

    let entries = Object.entries(meetings)

    for (let [weekDay, person] of entries) {

        console.log(`${weekDay} -> ${person}`)

    }

}

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])