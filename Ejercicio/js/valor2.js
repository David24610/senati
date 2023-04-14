function algoritmo()
        {
            let bonificacion, comision, descuento, hijos_en_edad_escolar, sueldo_basico;
            let sueldo_bruto, sueldo_neto, total_vendido;
            hijos_en_edad_escolar = parseFloat (document.formulario1.hijos_en_edad_escolar.value);
            total_vendido = parseFloat (document.formulario1.total_vendido.value);
            sueldo_basico=600;
            bonificacion=50*hijos_en_edad_escolar;
            comision=total_vendido*0.075;
            sueldo_bruto=sueldo_basico+comision+bonificacion;
            descuento=sueldo_bruto*0.11;
            sueldo_neto=sueldo_bruto-descuento;
            document.formulario1.bonificacion.value = bonificacion;
            document.formulario1.comision.value = comision;
            document.formulario1.descuento.value = descuento;
            document.formulario1.sueldo_basico.value = sueldo_basico;
            document.formulario1.sueldo_bruto.value = sueldo_bruto;
            document.formulario1.sueldo_neto.value = sueldo_neto;
        }