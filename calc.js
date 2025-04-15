function calcularEconomia() {
    const faturamentoTrimestral = parseFloat(document.getElementById("faturamento").value);
    const numeroMedicos = parseInt(document.getElementById("medicos").value);
  
    // Validação dos valores
    if (isNaN(faturamentoTrimestral) || faturamentoTrimestral <= 0) {
      alert("Por favor, insira um valor válido para o faturamento.");
      return;
    }
    
    if (isNaN(numeroMedicos) || numeroMedicos <= 0) {
      alert("Por favor, insira um número válido de médicos.");
      return;
    }
  
    // Cálculo do ISS no Regime Percentual
    const issPercentualMensal = (faturamentoTrimestral / 3) * 0.02; // 2% sobre o faturamento mensal
    const issPercentualTrimestral = issPercentualMensal * 3;
  
    // Cálculo do ISS no Regime Fixo
    const issFixoMensal = 46.30; // valor fixo por médico
    const issFixoTrimestral = issFixoMensal * 3 * numeroMedicos;
  
    // Cálculo da economia trimestral
    const Trimestral = issPercentualTrimestral - issFixoTrimestral;
  
    // Cálculo da economia percentual
    const Percentual = ((Trimestral / issPercentualTrimestral) * 100).toFixed(2);
  
    // Cálculo da economia em 5 anos
    const economiaCinco = Trimestral * 20; // 5 * 4 , 5 anos e 4 trimestres por ano
  
    // Resultados
    document.getElementById("issPercentual").textContent = issPercentualTrimestral.toFixed(2);
    document.getElementById("issFixo").textContent = issFixoTrimestral.toFixed(2);
    document.getElementById("Trimestral").textContent = Trimestral.toFixed(2);
    document.getElementById("Percentual").textContent = Percentual;
    document.getElementById("economiaCinco").textContent = economiaCinco.toFixed(2);
  }
  