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