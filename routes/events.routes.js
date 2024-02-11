const { Router } = require('express')
const router = Router()

let events = [
    {
        id: 1,
        title: 'Pool Party ',
        description: 'A pool party',
        date: '2024-02-15',
        time: '21:00:00'
    },
    {
        id: 2,
        title: 'Dinner',
        description: 'A dinner at the restaurant',
        date: '2024-02-17',
        time: '19:00:00'
    }
]
router.get("/", (req, res) => {
    res.send(events)
})

router.post("/", (req, res) => {
    const body = req.body
    events.push(body)
    res.send({ message: 'success', data: body })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    const eventToDelete = events.find(event => event.id == id);
    console.log(eventToDelete);
    if (!eventToDelete) {
        return res.status(404).send({ message: 'Event not found' });
    }
    const index = events.indexOf(eventToDelete);
    events.splice(index, 1);
    res.send({ message: 'delete' });
});

router.patch("/:id", (req, res) => {
    const id = req.params.id
    const updateFields = req.body;
    const eventToUpdate = events.find(event => event.id == id);
    if (!eventToUpdate) {
        return res.status(404).send({ message: 'Event not found' });
    }
    console.log(req.body);
    events = events.map(event => {
        if (event.id == id) {
            return { ...event, ...updateFields }
        }
        return event;
    })
    res.send({ message: 'update', data: eventToUpdate });
});

router.put("/:id", (req, res) => {
    const id = req.params.id
    console.log(id);
    const body = req.body
    console.log(body);
    let eventToUpdate = events.find(event => event.id == id);
    console.log(eventToUpdate);
    if (eventToUpdate) {
        events = events.map(event => {
            if (event.id == id) return { ...event, ...body }

            res.send({ message: 'update', data: eventToUpdate })
            return event
        })
    }
    else events.push(body)

    res.send({ message: 'create', data: eventToUpdate })

})

module.exports =  router 