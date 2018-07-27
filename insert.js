//Sentencia para insertar documentos en la colección etiquetas
db.etiquetas.insert({ field: 'recid', caption: 'ID', size: '50px', sortable: true, attr: 'align=center', type: 'text', searchable:false })

 db.getCollection('etiquetas').insert([{ field: 'apellido', caption: 'Primer apellido', size: '10%', sortable: true, type: 'text', searchable:true },
			 { field: 'nombre', caption: 'nombre', size: '10%', sortable: true, type: 'text', searchable:true},
			 { field: 'email', caption: 'Email', size: '10%', type: 'text', searchable:true },
			 { field: 'monto', caption: 'Monto', render:'money', size: '10%', type: 'money', searchable:true, sortable: true},
			 { field: 'fechaini', caption: 'Fecha inicio', render: 'date:mm/dd/yyyy', type: 'date', searchable:false, size: '110px' },
			 { field: 'fechafin', caption: 'Fecha fin', render: 'date:mm/dd/yyyy', type: 'date', searchable:false, size: '110px' }
])

//Sentencia para insertar documentos en la colección records
db.records.insert({ recid: 1, nombre: 'Jane', apellido: 'Pérez', email: 'jdoe@gmail.com', monto: 2500, fechaini: "2/2/2018")})

db.getCollection('records').insert([{ recid: 2, nombre: 'Stuart', apellido: 'Motzart', email: 'jdoe@gmail.com', monto: 1004, fechaini: "2/27/2018" },
{ recid: 3, nombre: 'Jin', apellido: 'Franson', email: 'peter@gmail.com', monto: 473, fechaini: "1/1/2018" },
{ recid: 4, nombre: 'Susan', apellido: 'Ottie', email: 'jim@gmail.com', monto: 304.12, fechaini: "11/13/2018" },
{ recid: 5, nombre: 'Kelly', apellido: 'Vázquez', email: 'peter@gmail.com', monto: 9300.23, fechaini: "10/19/2018" },
{ recid: 6, nombre: 'Francis', apellido: 'Gatos', email: 'jdoe@gmail.com', monto: 3400, fechaini: "5/12/2018" },
{ recid: 7, nombre: 'Mark', apellido: 'Welldo', email: 'jim@gmail.com', monto: 2030, fechaini: "6/4/2018" },
{ recid: 8, nombre: 'Thomas', apellido: 'Bahh', email: 'jdoe@gmail.com', monto: 13004, fechaini: "7/5/2018" },
{ recid: 9, nombre: 'Sergei', apellido: 'Rachmaninov', email: 'jdoe@gmail.com', monto: 4043, fechaini: "12/16/18"},
{ recid: 20, nombre: 'Jill', apellido: 'Doe', email: 'jdoe@gmail.com', monto: 474, fechaini: "6/30/2018" },
{ recid: 21, nombre: 'Frank', apellido: 'Motzart', email: 'jdoe@gmail.com', monto: 1704.25, fechaini: "2/2/2018" },
{ recid: 22, nombre: 'Peter', apellido: 'Franson', email: 'jdoe@gmail.com', monto: 7065, fechaini:"2/27/2018" },
{ recid: 23, nombre: 'Andrew', apellido: 'Ottie', email: 'jdoe@gmail.com', fechaini: "1/1/2018" },
{ recid: 24, nombre: 'Manny', apellido: 'Silver', email: 'jdoe@gmail.com', fechaini: "2/2/2018" },
{ recid: 25, nombre: 'Ben', apellido: 'Gatos', email: 'peter@gmail.com', fechaini: "2/2/2018"},
{ recid: 26, nombre: 'Doer', apellido: 'Welldo', email: 'jdoe@gmail.com', fechaini: "2/27/2018" },
{ recid: 27, nombre: 'Shashi', apellido: 'Bahh', email: 'jim@gmail.com', fechaini: "2/27/2018" },
{ recid: 28, nombre: 'Av', apellido: 'Rachmaninov', email: 'jim@gmail.com', fechaini: "2/27/2018" }
])

//Sentencia para insertar documentos en la colección searches
db.searches.insert({ field: 'apellido', caption: 'Primer apellido', type: 'text' })

db.getCollection('searches').insert([{ field: 'nombre', caption: 'Nombre', type: 'text' },
            { field: 'email', caption: 'Email', type: 'list', options: { items: ['peter@gmail.com', 'jim@gmail.com', 'jdoe@gmail.com']} },
            { field: 'fechaini', caption: 'Fecha inicio', type: 'date' }
])

