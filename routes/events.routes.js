const { Router } = require('express')
const router = Router()
const { Event } = require('../modules/events.model')

let events = []
router.get("/", async (req, res) => {
    try {
        const events = await Event.find({})
        res.send({ events })
    }catch (err) {
        res.status(400).send('error')
    }
})

router.post("/",async (req, res) => {
    const body = req.body
    try{
        const newEvent = new Event(body)
        await newEvent.save()
        res.send({message:'Added event', data:body})
    }catch(err){
        res.status(400).send('error')
    }
})

router.delete("/:id",async (req, res) => {
    const id = req.params.id
    try{
        await Event.findByIdAndDelete(id)
        res.send({message:'Deleted event'})
    }catch(err){
        console.log(err);
        res.status(400).send('error')
    }
    // const eventToDelete = events.find(event => event.id == id);
    // console.log(eventToDelete);
    // if (!eventToDelete) {
    //     return res.status(404).send({ message: 'Event not found' });
    // }
    // const index = events.indexOf(eventToDelete);
    // events.splice(index, 1);
    // res.send({ message: 'delete' });
});

router.patch("/:id", async(req, res) => {
    const id = req.params.id
    const updateFields = req.body;
    try{
        await Event.findByIdAndUpdate(id, updateFields)
        res.send({message:'update event'})
    }catch(err){
        console.log(err);
        res.status(400).send('error')
    }
    // const eventToUpdate = events.find(event => event.id == id);
    // if (!eventToUpdate) {
    //     return res.status(404).send({ message: 'Event not found' });
    // }
    // console.log(req.body);
    // events = events.map(event => {
    //     if (event.id == id) {
    //         return { ...event, ...updateFields }
    //     }
    //     return event;
    // })
    // res.send({ message: 'update', data: eventToUpdate });
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

module.exports = router 