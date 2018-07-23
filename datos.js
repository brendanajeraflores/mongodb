//Etiquetas
[
   { field: 'recid', caption: 'ID', size: '50px', sortable: true, attr: 'align=center', type: 'text', searchable:false },
   { field: 'apellido', caption: 'Primer apellido', size: '10%', sortable: true, type: 'text', searchable:true },
   { field: 'nombre', caption: 'nombre', size: '10%', sortable: true, type: 'text', searchable:true},
   { field: 'email', caption: 'Email', size: '10%', type: 'text', searchable:true },
   { field: 'monto', caption: 'Monto', render:'money', size: '10%', type: 'money', searchable:true, sortable: true},
   { field: 'fechaini', caption: 'Fecha inicio', render: 'date:mm/dd/yyyy', type: 'date', searchable:false, size: '110px' },
]

//Records
[
   { recid: 1, nombre: 'Jane', apellido: 'Pérez', email: 'jdoe@gmail.com', monto: 2500, fechaini: ISODate("2018-02-02T21:27:35.783Z")},
   { recid: 2, nombre: 'Stuart', apellido: 'Motzart', email: 'jdoe@gmail.com', monto: 1004, fechaini: ISODate("2018-02-27T21:27:35.783Z") },
   { recid: 3, nombre: 'Jin', apellido: 'Franson', email: 'peter@gmail.com', monto: 473, fechaini: ISODate("2018-01-01T21:27:35.783Z") },
   { recid: 4, nombre: 'Susan', apellido: 'Ottie', email: 'jim@gmail.com', monto: 304.12, fechaini: ISODate("2018-11-13T21:27:35.783Z") },
   { recid: 5, nombre: 'Kelly', apellido: 'Vázquez', email: 'peter@gmail.com', monto: 9300.23, fechaini: ISODate("2018-10-19T21:27:35.783Z") },
   { recid: 6, nombre: 'Francis', apellido: 'Gatos', email: 'jdoe@gmail.com', monto: 3400, fechaini: ISODate("2018-05-12T21:27:35.783Z") },
   { recid: 7, nombre: 'Mark', apellido: 'Welldo', email: 'jim@gmail.com', monto: 2030, fechaini: ISODate("2018-06-04T21:27:35.783Z") },
   { recid: 8, nombre: 'Thomas', apellido: 'Bahh', email: 'jdoe@gmail.com', monto: 13004, fechaini: ISODate("2018-07-05T21:27:35.783Z") },
   { recid: 9, nombre: 'Sergei', apellido: 'Rachmaninov', email: 'jdoe@gmail.com', monto: 4043, fechaini: ISODate("2018-12-16T21:27:35.783Z")},
   { recid: 20, nombre: 'Jill', apellido: 'Doe', email: 'jdoe@gmail.com', monto: 474, fechaini: ISODate("2018-06-30T21:27:35.783Z") },
   { recid: 21, nombre: 'Frank', apellido: 'Motzart', email: 'jdoe@gmail.com', monto: 1704.25, fechaini: ISODate("2018-02-02T21:27:35.783Z") },
   { recid: 22, nombre: 'Peter', apellido: 'Franson', email: 'jdoe@gmail.com', monto: 7065, fechaini:ISODate("2018-02-27T21:27:35.783Z") },
   { recid: 23, nombre: 'Andrew', apellido: 'Ottie', email: 'jdoe@gmail.com', fechaini: ISODate("2018-01-01T21:27:35.783Z") },
   { recid: 24, nombre: 'Manny', apellido: 'Silver', email: 'jdoe@gmail.com', fechaini: ISODate("2018-02-02T21:27:35.783Z") },
   { recid: 25, nombre: 'Ben', apellido: 'Gatos', email: 'peter@gmail.com', fechaini: ISODate("2018-02-02T21:27:35.783Z") },
   { recid: 26, nombre: 'Doer', apellido: 'Welldo', email: 'jdoe@gmail.com', fechaini: ISODate("2018-02-27T21:27:35.783Z") },
   { recid: 27, nombre: 'Shashi', apellido: 'Bahh', email: 'jim@gmail.com', fechaini: ISODate("2018-02-27T21:27:35.783Z") },
   { recid: 28, nombre: 'Av', apellido: 'Rachmaninov', email: 'jim@gmail.com', fechaini: ISODate("2018-02-27T21:27:35.783Z") }
]

//searches
[
   { field: 'apellido', caption: 'Primer apellido', type: 'text' },
   { field: 'nombre', caption: 'Nombre', type: 'text' },
   { field: 'email', caption: 'Email', type: 'list', options: { items: ['peter@gmail.com', 'jim@gmail.com', 'jdoe@gmail.com']} },
   { field: 'fechaini', caption: 'Fecha inicio', type: 'date' }

]
