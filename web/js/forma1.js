Ext.application({
    name:'forma1',
    launch:function(){
        
        Ext.create('Ext.form.Panel',{
         fullscreen:true,
         items:[
             {
                 xtype:'textfield',
                 label:'Nombre:',
                 placeHolder:'Escribe tu nombre'
             }
         ]
        })  ;      
    }
});

