//var email = Ext.getCmp('email').getValue();


Ext.application({
    
name: 'HolaMundo',
launch: function () {
 
//Ext.Msg.alert('Bienvenidos la suma es '+z);

 Ext.create('Ext.form.Panel', {
    fullscreen: true,
    items: [
        {
            xtype: 'fieldset',
            id:'formulario',
            title: 'Cálculo de tu I.M.C.',
            instructions: 'Proporcionanos los siguientes datos',
            items: [
                {
                    xtype: 'textfield',
                    name : 'peso',
                    id:'peso',
                    label: 'Peso:'
                },
                {
                    xtype: 'textfield',
                    name : 'altura',
                    id:'altura',
                    label: 'Altura:'
                },
                {
                    xtype:'button',
                    text:'calcular imc',
                    ui:'confirm',
                    handler:function(){
                        var peso=Ext.getCmp('peso').getValue();
                        var altura=Ext.getCmp('altura').getValue();
                        var imc=peso/(altura*altura);
                     // Ext.getCmp('altura').setValue(peso);
                    
                      Ext.getCmp('formulario').setInstructions('Tu imc es:'+imc);
                        //Ext.Msg.alert("El peso ingresado es:"+peso);
                    }
                }
                
                
            ]
        },
        {
            
                  html:'<center><img src="img/modelo.jpg" width="60% height="60%"  /></center>'
                    
                
        }
        
    ]
});

    }
});