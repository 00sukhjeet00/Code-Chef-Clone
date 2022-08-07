export const validation=(schema,payload)=>{
    const result=schema.validate(payload)
    return result
}