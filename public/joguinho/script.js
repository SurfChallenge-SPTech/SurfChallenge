function verificar() {
    var palavra = (input_palavra.value.toUpperCase());

    if (palavra == "PRANCHA") {
        p_prancha.innerHTML = `P`
        r_prancha.innerHTML = `R`
        a_mastro.innerHTML = `A`
        n_prancha.innerHTML = `N`
        c_prancha.innerHTML = `C`
        h_prancha.innerHTML = `H`
        a1_retranca.innerHTML = `A`

    } else if (palavra == "QUILHA") {
        q_quilha.innerHTML = `Q`
        u_quilha.innerHTML = `U`
        i_quilha.innerHTML = `I`
        l_quilha.innerHTML = `L`
        h_quilha.innerHTML = `H`
        a_quilha.innerHTML = `A`

    } else if (palavra == "MASTRO") {
        m_mastro.innerHTML = `M`
        a_mastro.innerHTML = `A`
        s_mastro.innerHTML = `S`
        t_mastro.innerHTML = `T`
        r_mastro.innerHTML = `R`
        o_mastro.innerHTML = `O`

    }  else if (palavra == "CAMBADA") {
        c_prancha.innerHTML = `C`
        a1_cambada.innerHTML = `A`
        m_cambada.innerHTML = `M`
        b_cambada.innerHTML = `B`
        a2_cambada.innerHTML = `A`
        d_cambada.innerHTML = `D`
        a_quilha.innerHTML = `A`

    } else if (palavra == "RETRANCA") {
        r1_retranca.innerHTML = `R`
        e_retranca.innerHTML = `E`
        t_retranca.innerHTML = `T`
        r2_retranca.innerHTML = `R`
        a1_retranca.innerHTML = `A`
        n_retranca.innerHTML = `N`
        c_retranca.innerHTML = `C`
        a2_retranca.innerHTML = `A`

    } else if (palavra == ""){
        alert("Coloque uma palavra!")
    } else {
        alert("Verifique se a palavra que você colocou está escrito da forma correta!")
    }
}

function mostrarPergunta() {
    var selectPergunta = document.getElementById('pergunta');
    var dica_atual = document.getElementById('Lista_dicas');
  
    var lista_dicas = [
      "1- Quem foi o primeiro chefe do kanima.",
      "2- Quem ajudou scott a controlar seus poderes.",
      "3- Ao ser mordido ele teve que aprender a lidar com as mudanças <br> hormonais e usar seus poderes para salvar a sua cidade natal",
      "4- Quem mordeu o scott.",
      "5- Qual é o nome do primeiro episódio da primeira temporada.",
      "6- Esse poder tem a capacidade <br> de matar apenas com um grito.",
      "7- Scott se torna o único e verdadeiro...",
      "8- Stiles é conhecido pelo seu... ",
      "9- Quem foi o primeiro amor de scott",
      "10- Uma caracteristica desse poder é o seus olhos azuis"];
  
    var valor_atual = parseInt(selectDicas.value);
  
    if (valor_atual >= 1 && valor_atual <= lista_dicas.length) {
      // Exibe a dica correspondente
      exibir.innerHTML = lista_dicas[valor_atual - 1];
      divDica.style.display = 'block';
  
    } else {
      exibir.innerHTML = '';
      divDica.style.display = 'none';
    }
  
    lista_dicas.slice[valor_atual -1];
  
  }