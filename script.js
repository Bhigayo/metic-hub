const hour =
new Date().getHours();

let greeting =
"Welcome Back";

if(hour < 12){

    greeting =
    "Good Morning";

}
else if(hour < 18){

    greeting =
    "Good Afternoon";

}
else{

    greeting =
    "Good Evening";

}

const greetingText =
document.getElementById(
    "dashboardGreeting"
);

if(greetingText){

    greetingText.textContent =
    `${greeting} 👋`;

}

const products = JSON.parse(

    localStorage.getItem(
        "meticProducts"
    )

) || [];

const suppliers = JSON.parse(

    localStorage.getItem(
        "meticSuppliers"
    )

) || [];

const content = JSON.parse(

    localStorage.getItem(
        "meticContent"
    )

) || [];

let revenue = 0;
let expenses = 0;

products.forEach(product => {

    revenue += parseFloat(

        product.price.replace(
            "£",
            ""
        )

    ) || 0;

    expenses += parseFloat(

        product.cost.replace(
            "£",
            ""
        )

    ) || 0;

});

const profit =
revenue - expenses;

document.getElementById(
    "productCount"
).textContent =
products.length;

document.getElementById(
    "supplierCount"
).textContent =
suppliers.length;

document.getElementById(
    "revenueCount"
).textContent =
`£${revenue}`;

document.getElementById(
    "profitCount"
).textContent =
`£${profit}`;

const chartCanvas =
document.getElementById(
    "profitChart"
);

if(chartCanvas){

    const ctx =
    chartCanvas.getContext("2d");

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: [

                "Revenue",
                "Expenses",
                "Profit"

            ],

            datasets: [{

                label: "Brand Finance",

                data: [

                    revenue,
                    expenses,
                    profit

                ]

            }]

        },

        options: {

            responsive:true,

            maintainAspectRatio:false

        }

    });

}

const savedTheme =
localStorage.getItem(
    "theme"
);

if(savedTheme){

    document.body.classList.add(
        savedTheme
    );

}

const assistantMessage =
document.getElementById(
    "assistantMessage"
);

if(assistantMessage){

    let bestProduct =
    null;

    let highestProfit =
    0;

    products.forEach(product => {

        const profit =

        parseFloat(
            product.price.replace(
                "£",
                ""
            )
        )

        -

        parseFloat(
            product.cost.replace(
                "£",
                ""
            )
        );

        if(
            profit >
            highestProfit
        ){

            highestProfit =
            profit;

            bestProduct =
            product.name;

        }

    });

    assistantMessage.textContent =

    bestProduct

    ?

    `${bestProduct} is currently your most profitable product with £${highestProfit} profit.`

    :

    "Add products to receive insights.";

}

let highestProfit = 0;
let topProduct = "-";

products.forEach(product => {

    const profit =

    parseFloat(
        product.price.replace(
            "£",
            ""
        )
    )

    -

    parseFloat(
        product.cost.replace(
            "£",
            ""
        )
    );

    if(profit > highestProfit){

        highestProfit =
        profit;

        topProduct =
        product.name;

    }

});

const avgProfit =

products.length

?

Math.round(
    profit /
    products.length
)

:

0;

document.getElementById(
    "topProduct"
).textContent =
topProduct;

document.getElementById(
    "avgProfit"
).textContent =
`£${avgProfit}`;

document.getElementById(
    "inventoryValue"
).textContent =
`£${revenue}`;