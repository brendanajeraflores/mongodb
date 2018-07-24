
/**
 * Para crear un índice de full text search se implementa la siguiente sintaxis
 *  Dentro de las llaves se introducen los campos sobre los cuales se desean indexar,
 * de igual manera se puede introducir el lenguaje por default, tomar en cuenta que dependiendo de este
 * las palabras de paro y las reducciones cambiaran drasticamente
*/
db.collection.createIndex(
    {
      subject: "text",
      comments: "text"
    },
    { 
        default_language: "none" 
    },
    {
        name: "MyTextIndex"
    }
  );

/**
 * Si se desea indexar todo el contenido de tipo string de una colección puede utilizarce el 
 * un "comodin", qu elo haga automatico.
 */

db.collection.createIndex(
    {
        "$**": "text"
    },
    { 
        default_language: "none" 
    },
    {
        name: "MyTextIndex"
    }
  );

/**
 * Es posible "seccionar" el índice de texto para reducir un poco su tamaño utilizando un índice compuesto
 * La siguiente sintaxis lo ilustra
 */
db.collection.createIndex( 
    { 
        a: 1, 
        "$**": "text" 
    } ,
    { 
        default_language: "none" 
    },
    {
        name: "MyTextIndex"
    }
)

/**
 * Para realizar consultas utilizando los índices de full text search basta con emplear el operador $text
 * por defecto el índice de texto es insesitivo a mayúsculas y diacríticos
 */

db.articles.find( 
    { $text: 
        { 
            $search: "texto",
            $language: "lengiaje",
            $caseSensitive: true or false,
            $diacriticSensitive: true or false
        }
    }
);

/**
 * Un ejemplo es el siguiente
 */

 db.getCollection('records').find({$text:{$search:"susan"}})

 /**
  * Para buscar frases completas en el índice de full text search se pone entre commillas lo que se desea buscar
  */

  db.getCollection('records').find( {
        $text: { $search: "\"susan\"" }
    });