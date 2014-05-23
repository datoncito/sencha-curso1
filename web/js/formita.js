Ext.application({
    name:'formita',
    launch:function(){
        Ext.create('Ext.form.Panel',{
            fullscreen:true,
            items:[
                {
                    xtype:'textfield',
                    id:'nombre',
                    label:'nombre',
                    placeHolder:'ingresa tu nombre'
                },
                {
                    xtype:'button',
                    ui:'confirm',
                    text:'oprimir',
                    handler:function(){
                        Ext.Msg.alert('Me haz oprimido');
                    }
                },
                {
                    html:'<center><h2>Hola mundo</h2></center>'
                }
            ]
            
        });
    }
});
