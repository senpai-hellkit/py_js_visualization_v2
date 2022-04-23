let ourCanvas = $("#ourChart");
let ourCanvas2 = $("#ourChart2");
let ourCanvas3 = $("#ourChart3");


new Chart(ourCanvas, {
    type: 'bar',
    data: {
        labels: labelsNames,
        datasets: [
            {
                label: labels[0],
                data: data[0],
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(54, 162, 235, 0.9)',
            },
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 50,
                    color: "black",
                }
            },
        },
    }
});

new Chart(ourCanvas2, {
    type: 'bar',
    data: {
        labels: labelsNames,
        datasets: [
            {
                label: labels[1],
                data: data[1],
                backgroundColor: 'rgba(255, 206, 86, 0.3)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(255, 206, 86, 1)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 50,
                    color: "black",
                }
            },
        },
    }
});

new Chart(ourCanvas3, {
    type: 'bar',
    data: {
        labels: labelsNames,
        datasets: [
            {
                label: labels[0],
                data: data[0],
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(54, 162, 235, 0.9)',
            },
            {
                label: labels[1],
                data: data[1],
                backgroundColor: 'rgba(255, 206, 86, 0.3)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(255, 206, 86, 1)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 50,
                    color: "black",
                }
            },
        },
    }
});
