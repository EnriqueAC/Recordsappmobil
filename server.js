var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Cat_Usuarios'); 
mobileApp.tables.add('Record_Clasificacion');
mobileApp.tables.add('Record_Firmas');
mobileApp.tables.add('Record_Procedimiento'); 
mobileApp.tables.add('Record_RedimientosMateriales');
mobileApp.tables.add('Record_Rendimientos'); 
mobileApp.tables.add('Record_resultado'); 
mobileApp.tables.add('Record_ResultadoImagenes'); 
mobileApp.tables.add('Records_AspectoSeguridad'); 

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
