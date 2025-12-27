// Faturamento Mensal
new Chart(document.getElementById("graficoFaturamento"), {
  type: "line",
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [{
      label: "Faturamento (R$)",
      data: [5200, 7800, 6900, 8400, 9100, 10800],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37,99,235,0.2)",
      fill: true
    }]
  }
});

// Origem dos Clientes
new Chart(document.getElementById("graficoOrigem"), {
  type: "doughnut",
  data: {
    labels: ["Instagram", "Google", "Indicação", "Outros"],
    datasets: [{
      data: [45, 30, 15, 10],
      backgroundColor: [
        "#2563eb",
        "#22c55e",
        "#f97316",
        "#9ca3af"
      ]
    }]
  }
});
