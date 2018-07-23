//Búsqueda general
db.getCollection('etiquetas').find({})

//Búsqueda en un dato en especifico
db.getCollection('etiquetas').find({field:'recid'})

//Búsqueda en un dato especifico y sensible a mayusculas y minusculas
db.getCollection('records').find({nombre: {$regex: 'jane', $options:"i"}})

/*
    Búsquedas con expresiones regulares 
*/
//Búsqueda en un dato especifico y que el nombre empiece con j (sensible a mayusculas y minusculas)
db.getCollection('records').find({nombre: {$regex: '^j', $options:"i"}})

//Búsqueda en un dato especifico y que el nombre empiece termine con e (sensible a mayusculas y minusculas)
db.getCollection('records').find({nombre: {$regex: 'e$', $options:"i"}})