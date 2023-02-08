window.addEventListener("load", () => {
  newsData = [
    {},
    {
      page: 1,
      news: [
        {
          title: "Need More Foreign Investment ",
          content:
            "Lorem ipsum dolor  laudantium ipsa? Eaque eos, magni tempore voluptas laudantium quidem maiores perferendis. Voluptas sapiente accusantium repellendus possimus, totam, veniam rerum laudantium placeat omnis officia enim repellat molestias quia esse quod? Facilis quisquam, natus ratione corrupti aperiam placeat eveniet minima est sit dolorem tempora veritatis qui, non id necessitatibus eligendi numquam nesciunt corporis asperiores distinctio nihil et ad esse doloremque! Quis itaque aperiam, inventore reiciendis ex ipsum. Repellat veniam reiciendis dolorem natus aperiam sunt sed maiores, nihil laudantium explicabo. Quisquam voluptate exercitationem vel! Odio adipisci earum nostrum est. sit amet consectetur adipisicing elit. Quia minima consectetur quaerat quos corporis voluptatum debitis sit rem, magni nisi hic, dolorem doloremque, repellendus ratione dolorum tempore illo? Veritatis, eveniet beatae ex provident, saepe veniam tempora dolorum dolorem incidunt magni ab quas modi fuga laudantium aliquam expedita odio harum! Harum molestias, labore eos corrupti tempora illum accusantium minima non! Culpa dignissimos non sit quam, a magnam fugiat, consectetur hic aperiam nam autem ipsam architecto alias commodi, ea nulla nemo deleniti. Ipsum beatae earum sequi, veniam soluta quo! Placeat magni eveniet itaque laudantium ipsa? Eaque eos, magni tempore voluptas laudantium quidem maiores perferendis. Voluptas sapiente accusantium repellendus possimus, totam, veniam rerum laudantium placeat omnis officia enim repellat molestias quia esse quod? Facilis quisquam, natus ratione corrupti aperiam placeat eveniet minima est sit dolorem tempora veritatis qui, non id necessitatibus eligendi numquam nesciunt corporis asperiores distinctio nihil et ad esse doloremque! Quis itaque aperiam, inventore reiciendis ex ipsum. Repellat veniam reiciendis dolorem natus aperiam sunt sed maiores, nihil laudantium explicabo. Quisquam voluptate exercitationem vel! Odio adipisci earum nostrum est. Ab inventore accusamus dolor voluptas blanditiis. Maxime ea, beatae magni libero quidem qui, sed iste illo labore laborum neque facilis velit quod ex? ",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 2",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima consectetur quaerat quos corporis voluptatum debitis sit rem, magni nisi hic, dolorem doloremque, repellendus ratione dolorum tempore illo? Veritatis, eveniet beatae ex provident, saepe veniam tempora dolorum dolorem incidunt magni ab quas modi fuga laudantium aliquam expedita odio harum! Harum molestias, labore eos corrupti tempora illum accusantium minima non! Culpa dignissimos non sit quam, a magnam fugiat, consectetur hic aperiam nam autem ipsam architecto alias commodi, ea nulla nemo deleniti. Ipsum beatae earum sequi, veniam soluta quo! Placeat magni eveniet itaque laudantium ipsa? Eaque eos, magni tempore voluptas laudantium quidem maiores perferendis. Voluptas sapiente accusantium repellendus possimus, totam, veniam rerum laudantium placeat omnis officia enim repellat molestias quia esse quod? Facilis quisquam, natus ratione corrupti aperiam placeat eveniet minima est sit dolorem tempora veritatis qui, non id necessitatibus eligendi numquam nesciunt corporis asperiores distinctio nihil et ad esse doloremque! Quis itaque aperiam, inventore reiciendis ex ipsum. Repellat veniam reiciendis dolorem natus aperiam sunt sed maiores, nihil laudantium explicabo. Quisquam voluptate exercitationem vel! Odio adipisci earum nostrum est. Ab inventore accusamus dolor voluptas blanditiis. Maxime ea, beatae magni libero quidem qui, sed iste illo labore laborum neque facilis velit quod ex? ",

          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 3",
          content: "Content 3",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 4",
          content: "Content 4",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 5",
          content: "Content 5",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
      ],
    },
    {
      page: 2,
      title: "Sports",
      news: [
        {
          title: "India vs Australia",
          content: "Content 1",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 2",
          content: "Content 2",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 3",
          content: "Content 3",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 4",
          content: "Content 4",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 5",
          content: "Content 5",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
      ],
    },
    {
      page: 3,
      title: "Sports",
      news: [
        {
          title: "News 1",
          content: "Content 1",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 2",
          content: "Content 2",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 3",
          content: "Content 3",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 4",
          content: "Content 4",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
        {
          title: "News 5",
          content: "Content 5",
          imgURL: "https://wallpapercave.com/dwp2x/wp7342177.jpg",
        },
      ],
    },
  ];

  currentPage = 2;

  if (currentPage !== 1) {
    document.getElementById("header-main-page").style.display = "none";
    document.getElementById("alt-header").style.display = "flex";
  } else {
    document.getElementById("header-main-page").style.display = "block";
    document.getElementById("alt-header").style.display = "none";
  }

  const newsContainer = document.getElementById("news-section");

  const pageID = document.getElementById("page-id");
  const pageTitle = document.getElementById("page-title");
  const renderHeader = () => {
    pageID.innerHTML = "";
    pageTitle.innerHTML = "";
    pageID.innerHTML = newsData[currentPage].page;
    pageTitle.innerHTML = newsData[currentPage].title;
  };
  renderHeader();
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  prevButton.addEventListener("click", () => {
    if (currentPage - 1 > 0) {
      currentPage -= 1;
    }

    renderHeader();

    if (currentPage !== 1) {
      document.getElementById("header-main-page").style.display = "none";
      document.getElementById("alt-header").style.display = "flex";
    } else {
      document.getElementById("header-main-page").style.display = "block";
      document.getElementById("alt-header").style.display = "none";
    }
    newsContainer.innerHTML = "";

    renderNews();
  });

  nextButton.addEventListener("click", () => {
    if (currentPage + 1 < newsData.length) {
      currentPage += 1;
    }
    renderHeader();
    if (currentPage !== 1) {
      document.getElementById("header-main-page").style.display = "none";
      document.getElementById("alt-header").style.display = "flex";
    } else {
      document.getElementById("header-main-page").style.display = "block";
      document.getElementById("alt-header").style.display = "none";
    }
    newsContainer.innerHTML = "";
    renderNews();
  });

  const createNews = (title, content, imgURL) => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");
    newsItem.innerHTML = `
    <div class="news-item-content">

      <div style='font-size:2rem;margin-bottom:5px;font-weight:bold'>${title}</div>
      <img class="news-item-img"  src="${imgURL}" alt=''}">
  
      <p>${content}</p>
    </div>
  `;
    newsContainer.appendChild(newsItem);
  };

  renderNews = () => {
    newsContainer.innerHTML = "";
    for (
      let iterator = 0;
      iterator < newsData[currentPage].news.length;
      iterator++
    ) {
      createNews(
        newsData[currentPage].news[iterator].title,
        newsData[currentPage].news[iterator].content,
        newsData[currentPage].news[iterator].imgURL
      );
    }
  };
  renderNews();
});
