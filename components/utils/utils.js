export const findCategory=(allcat, selectedCat)=>{
    let obj={}
    if(allcat && selectedCat){
        allcat.map(e=>{
            obj[e._id]=e.title
        })

        let Cat=[]
        selectedCat.map(e=>{
            if(obj[e._ref]){
                Cat.push(obj[e._ref])
            }
        })

        return Cat
    }
    return false
}