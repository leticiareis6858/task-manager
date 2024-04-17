const asyncWrapper=(fn) =>{
    return async(req,res,next) => {
        try {
            await fn(req,res,next)
            
        } catch (error) {
            next(error) //passing a next middleware
        }
    }
}

module.exports=asyncWrapper