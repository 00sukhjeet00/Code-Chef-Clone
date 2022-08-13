import joi from 'joi'
export const contest=joi.object({
    name: joi.string().required(),
    startTime: joi.date().required(),
    endTime: joi.date().required()
})