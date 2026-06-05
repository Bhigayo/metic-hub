let contentIdeas = JSON.parse(

    localStorage.getItem(
        "meticContent"
    )

) || [

{
    title:"Gym Tee Reel",
    day:"Monday"
},

{
    title:"Product Mockup",
    day:"Wednesday"
},

{
    title:"Drop Announcement",
    day:"Friday"
}

];

const grid =
document.getElementById(
    "contentGrid"
);

function renderContent(){

    grid.innerHTML = "";

    contentIdeas.forEach(

        (idea,index) => {

            const card =
            document.createElement(
                "div"
            );

            card.classList.add(
                "product-card"
            );

            card.innerHTML = `

                <h2>

                    ${idea.title}

                </h2>

                <p>

                    📅 ${idea.day}

                </p>

                <button
                class="delete-btn"
                onclick="deleteContent(${index})">

                    Delete

                </button>

            `;

            grid.appendChild(
                card
            );

        }

    );

}

renderContent();

const addBtn =
document.getElementById(
    "addContentBtn"
);

const modal =
document.getElementById(
    "contentModal"
);

addBtn.addEventListener(
    "click",
    () => {

        modal.style.display =
        "flex";

    }
);

function addContent(){

    const title =
    document.getElementById(
        "contentTitle"
    ).value;

    const day =
    document.getElementById(
        "contentDay"
    ).value;

    contentIdeas.push({

        title,
        day

    });

    localStorage.setItem(

        "meticContent",

        JSON.stringify(
            contentIdeas
        )

    );

    modal.style.display =
    "none";

    renderContent();

}

function deleteContent(index){

    contentIdeas.splice(
        index,
        1
    );

    localStorage.setItem(

        "meticContent",

        JSON.stringify(
            contentIdeas
        )

    );

    renderContent();

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