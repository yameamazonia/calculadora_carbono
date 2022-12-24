function gado() {
    let x = document.getElementById('inputgado').value;
    let bovino = x //entrada de dados
    // Total de degetos 
    let degeto = 45 //Kg/dia
    let total_degeto = bovino * degeto
    //Total de Urina
    let urina = 40
    let total_urina = bovino * urina
    //CH4 por M3/ dia por animal
    let ch4 = 0.54
    let ch4_total = bovino * ch4
    //M3 de CH4 em Kwh
    let m3_kwh = 9.97
    let m3_kwh_total = ch4_total * m3_kwh
    //Custo rural em Kwh em Reais
    let custo_rural_kwh = 0.43097
    //Total de economia
    let economia_dia = m3_kwh_total * custo_rural_kwh
    economia_mes = economia_dia * 30

    let total_ch4_em_co2 = ch4_total / 1529
    let numeros_de_arvores = (total_ch4_em_co2 * 7)

    //Preços
    let humus_preco = 2.0 // Por KG
    let minhocas_preco = 15.0 //por KG 
    let bio_fert_preco = 5.0 //por Litro


    // Processamento

    let humus_qtdd = total_degeto * 0.6
    let humus_preco_total = humus_preco * humus_qtdd

    var minhocas_qtdd = total_degeto * 0.01
    let minhocas_preco_total = minhocas_preco * minhocas_qtdd

    let bio_fert_qtdd = total_urina
    let bio_fert_preco_total = bio_fert_preco * bio_fert_qtdd



    //Resultado 

    document.getElementById("CH4_total").innerHTML = `${ch4_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} CH4/T`;

    document.getElementById("total_ch4_em_co2").innerHTML = `${total_ch4_em_co2.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} CO2/T`;

    document.getElementById("CH4").innerHTML = `${m3_kwh_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} Kwh/dia`;

    document.getElementById("Diaria").innerHTML = `R$ ${economia_dia.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    document.getElementById("Mensal").innerHTML = `R$ ${economia_mes.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    document.getElementById("numeros_de_arvores").innerHTML = `${numeros_de_arvores.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })} Árvores`;

    document.getElementById("degeto").innerHTML = `${total_degeto.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;
    document.getElementById("urina").innerHTML = `${total_urina.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} L`;

    document.getElementById("humus_qtdd").innerHTML = `${humus_qtdd.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;

    document.getElementById("humus_preco_total").innerHTML = `R$ ${humus_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;

    document.getElementById("minhocas_qtdd").innerHTML = `${minhocas_qtdd.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;

    document.getElementById("minhocas_preco_total").innerHTML = `R$ ${minhocas_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;

    document.getElementById("bio_fert_qtdd").innerHTML = `${bio_fert_qtdd} L`;

    document.getElementById("bio_fert_preco_total").innerHTML = `R$ ${bio_fert_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;
}

function suino() {
    let x = document.getElementById('inputsuino').value
    let suino = x //entrada de dados
    //Total de degetos 
    let degeto = 16 //Kg/dia
    let total_degeto = suino * degeto
    //Total de Urina
    let urina = 10
    let total_urina = suino * urina
    //CH4 por M3/ dia por animal
    let ch4 = 0.19
    let ch4_total = suino * ch4
    //M3 de CH4 em Kwh
    let m3_kwh = 9.97
    let m3_kwh_total = ch4_total * m3_kwh
    //Custo rural em Kwh em Reais
    let custo_rural_kwh = 0.43097
    //Total de economia
    let economia_dia = m3_kwh_total * custo_rural_kwh
    economia_mes = economia_dia * 30

    let total_ch4_em_co2 = ch4_total / 1529
    let numeros_de_arvores = (total_ch4_em_co2 * 7)

    //Preços
    let humus_preco = 2.0 // Por KG
    let minhocas_preco = 15.0 //por KG 
    let bio_fert_preco = 5.0 //por Litro


    // Processamento

    let humus_qtdd = total_degeto * 0.6
    let humus_preco_total = humus_preco * humus_qtdd

    var minhocas_qtdd = total_degeto * 0.01
    let minhocas_preco_total = minhocas_preco * minhocas_qtdd

    let bio_fert_qtdd = total_urina
    let bio_fert_preco_total = bio_fert_preco * bio_fert_qtdd



    //Resultado 

    document.getElementById("CH4_total").innerHTML = `${ch4_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} CH4/T`;

    document.getElementById("total_ch4_em_co2").innerHTML = `${total_ch4_em_co2.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} CO2/T`;

    document.getElementById("CH4").innerHTML = `${m3_kwh_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} Kwh/dia`;

    document.getElementById("Diaria").innerHTML = `R$ ${economia_dia.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    document.getElementById("Mensal").innerHTML = `R$ ${economia_mes.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    document.getElementById("numeros_de_arvores").innerHTML = `${numeros_de_arvores.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })} Árvores`;

    document.getElementById("degeto").innerHTML = `${total_degeto.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;
    document.getElementById("urina").innerHTML = `${total_urina.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} L`;

    document.getElementById("humus_qtdd").innerHTML = `${humus_qtdd.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;

    document.getElementById("humus_preco_total").innerHTML = `R$ ${humus_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;

    document.getElementById("minhocas_qtdd").innerHTML = `${minhocas_qtdd.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;

    document.getElementById("minhocas_preco_total").innerHTML = `R$ ${minhocas_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;

    document.getElementById("bio_fert_qtdd").innerHTML = `${bio_fert_qtdd} L`;

    document.getElementById("bio_fert_preco_total").innerHTML = `R$ ${bio_fert_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;
}

function galinhas() {
    let x = document.getElementById('inputgalinhas').value
    let galinha = x //entrada de dados
    //Total de degetos 
    let degeto =  0.54//Kg/dia
    let total_degeto = galinha * degeto
    //Total de Urina
    let urina = 1
    let total_urina = galinha * urina
    //CH4 por M3/ dia por animal
    let ch4 = 0.19
    let ch4_total = galinha * ch4
    //M3 de CH4 em Kwh
    let m3_kwh = 9.97
    let m3_kwh_total = ch4_total * m3_kwh
    //Custo rural em Kwh em Reais
    let custo_rural_kwh = 0.43097
    //Total de economia
    let economia_dia = m3_kwh_total * custo_rural_kwh
    economia_mes = economia_dia * 30

    let total_ch4_em_co2 = ch4_total / 1529
    let numeros_de_arvores = (total_ch4_em_co2 * 7)

    //Preços
    let humus_preco = 2.0 // Por KG
    let minhocas_preco = 15.0 //por KG 
    let bio_fert_preco = 5.0 //por Litro


    // Processamento

    let humus_qtdd = total_degeto * 0.6
    let humus_preco_total = humus_preco * humus_qtdd

    var minhocas_qtdd = total_degeto * 0.01
    let minhocas_preco_total = minhocas_preco * minhocas_qtdd

    let bio_fert_qtdd = total_urina
    let bio_fert_preco_total = bio_fert_preco * bio_fert_qtdd



    //Resultado 

    document.getElementById("CH4_total").innerHTML = `${ch4_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} CH4/T`;

    document.getElementById("total_ch4_em_co2").innerHTML = `${total_ch4_em_co2.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} CO2/T`;

    document.getElementById("CH4").innerHTML = `${m3_kwh_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} Kwh/dia`;

    document.getElementById("Diaria").innerHTML = `R$ ${economia_dia.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    document.getElementById("Mensal").innerHTML = `R$ ${economia_mes.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    document.getElementById("numeros_de_arvores").innerHTML = `${numeros_de_arvores.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })} Árvores`;

    document.getElementById("degeto").innerHTML = `${total_degeto.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;
    document.getElementById("urina").innerHTML = `${total_urina.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} L`;

    document.getElementById("humus_qtdd").innerHTML = `${humus_qtdd.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;

    document.getElementById("humus_preco_total").innerHTML = `R$ ${humus_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;

    document.getElementById("minhocas_qtdd").innerHTML = `${minhocas_qtdd.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;

    document.getElementById("minhocas_preco_total").innerHTML = `R$ ${minhocas_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;

    document.getElementById("bio_fert_qtdd").innerHTML = `${bio_fert_qtdd} L`;

    document.getElementById("bio_fert_preco_total").innerHTML = `R$ ${bio_fert_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;
}

function humanos() {
    let x = document.getElementById('inputhumanos').value
    let galinha = x //entrada de dados
    //Total de degetos 
    let degeto = 0.24 //Kg/dia
    let total_degeto = galinha * degeto
    //Total de Urina
    let urina = 1
    let total_urina = galinha * urina
    //CH4 por M3/ dia por animal
    let ch4 = 0.01
    let ch4_total = galinha * ch4
    //M3 de CH4 em Kwh
    let m3_kwh = 9.97
    let m3_kwh_total = ch4_total * m3_kwh
    //Custo rural em Kwh em Reais
    let custo_rural_kwh = 0.43097
    //Total de economia
    let economia_dia = m3_kwh_total * custo_rural_kwh
    economia_mes = economia_dia * 30

    let total_ch4_em_co2 = ch4_total / 1529
    let numeros_de_arvores = (total_ch4_em_co2 * 7)

    //Preços
    let humus_preco = 2.0 // Por KG
    let minhocas_preco = 15.0 //por KG 
    let bio_fert_preco = 5.0 //por Litro


    // Processamento

    let humus_qtdd = total_degeto * 0.6
    let humus_preco_total = humus_preco * humus_qtdd

    var minhocas_qtdd = total_degeto * 0.01
    let minhocas_preco_total = minhocas_preco * minhocas_qtdd

    let bio_fert_qtdd = total_urina
    let bio_fert_preco_total = bio_fert_preco * bio_fert_qtdd



    //Resultado 

    document.getElementById("CH4_total").innerHTML = `${ch4_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} CH4/T`;

    document.getElementById("total_ch4_em_co2").innerHTML = `${total_ch4_em_co2.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} CO2/T`;

    document.getElementById("CH4").innerHTML = `${m3_kwh_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })} Kwh/dia`;

    document.getElementById("Diaria").innerHTML = `R$ ${economia_dia.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    document.getElementById("Mensal").innerHTML = `R$ ${economia_mes.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    document.getElementById("numeros_de_arvores").innerHTML = `${numeros_de_arvores.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })} Árvores`;

    document.getElementById("degeto").innerHTML = `${total_degeto.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;
    document.getElementById("urina").innerHTML = `${total_urina.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} L`;

    document.getElementById("humus_qtdd").innerHTML = `${humus_qtdd.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;

    document.getElementById("humus_preco_total").innerHTML = `R$ ${humus_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;

    document.getElementById("minhocas_qtdd").innerHTML = `${minhocas_qtdd.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} KG`;

    document.getElementById("minhocas_preco_total").innerHTML = `R$ ${minhocas_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;

    document.getElementById("bio_fert_qtdd").innerHTML = `${bio_fert_qtdd} L`;

    document.getElementById("bio_fert_preco_total").innerHTML = `R$ ${bio_fert_preco_total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}`;
}


