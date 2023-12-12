export const formatChartData = () => {
  return {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 60, 75, 30, 50, 70, 90],
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      },
    ],
  };
};
  export const getHealthServices = () => {
    return [
      { name: 'Hospital Regional Fernando Bezerra', address: 'Av. Teobaldo Gonçalves Torres, 510', phone: '(87) 3874.4857' },
      { name: 'UPAE Ouricuri-Pe', address: 'Av Manoel Irineu Araujo - Centro', phone: '(87) 3874-4600' },
    ];
  };

  
  