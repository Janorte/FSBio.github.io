const publications = [
  {
    year: 2024,
    journal: "Adv. Mater. Technol.",
    citation: "Wang, L., Wang, Z., Liu, F., ... Huang, J.* & Wang, G.* (2024). Programmable plasmonic hydrogel thermometers actuated by DNA breathing. <i>Adv. Mater. Technol.</i>, 9(20), 2400243.",
    doi: "https://doi.org/10.1002/admt.202400243"
  },
  {
    year: 2023,
    journal: "Food Hydrocoll.",
    citation: "Zhang, X., Wang, Z., Wang, L., ... Huang, J.* & Luan, G.* (2023). Structural support of zein network to rice flour gluten-free dough: Rheological, textural and thermal properties. <i>Food Hydrocoll.</i>, 141, 108721.",
    doi: "https://doi.org/10.1016/j.foodhyd.2023.108721"
  },
  {
    year: 2022,
    journal: "Trends Food Sci. Tech.",
    citation: "Ma, S.*, Wang, Z., Liu, H. et al. (2022). Supplementation of wheat flour products with wheat bran dietary fiber: Purpose, mechanisms, and challenges. <i>Trends Food Sci. Tech.</i>, 123, 281-289.",
    doi: "https://doi.org/10.1016/j.tifs.2022.03.006"
  },
  {
    year: 2022,
    journal: "Food Chem.",
    citation: "Ma, S.*, Wang, Z., Tian, X. et al. (2022). Effect of synergistic fermentation of <i>Lactobacillus plantarum</i> and <i>Saccharomyces cerevisiae</i> on thermal properties of wheat bran dietary fiber-wheat starch system. <i>Food Chem.</i>, 373, 131417.",
    doi: "https://doi.org/10.1016/j.foodchem.2021.131417"
  },
  {
    year: 2021,
    journal: "Int. J. Food Sci. Technol.",
    citation: "Wang, Z., Ma, S.*, Huang, J., ... Wang, X.* (2021). Biochemical properties of type I sourdough affected by wheat bran dietary fiber during fermentation. <i>Int. J. Food Sci. Technol.</i>, 57(4), 1995-2002.",
    doi: "https://doi.org/10.1111/ijfs.15260"
  },
  {
    year: 2021,
    journal: "Food Chem.",
    citation: "Ma, S.*, Wang, Z., Guo, X. et al. (2021). Sourdough improves the quality of whole-wheat flour products: Mechanisms and challenges-A review. <i>Food Chem.</i>, 360, 130038.",
    doi: "https://doi.org/10.1016/j.foodchem.2021.130038"
  }
];

function renderPublications(filterYear = "All") {
  const publicationList = document.getElementById("publication-list");
  publicationList.innerHTML = "";

  const filteredPublications = filterYear === "All" 
    ? publications 
    : publications.filter(pub => pub.year === parseInt(filterYear));

  filteredPublications.forEach(pub => {
    const li = document.createElement("li");
    li.className = "mb-2";
    li.innerHTML = `${pub.citation} <a href="${pub.doi}" class="text-blue-600 hover:underline" target="_blank">DOI</a>`;
    publicationList.appendChild(li);
  });
}

function setupFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const year = button.dataset.year;
      filterButtons.forEach(btn => btn.classList.remove("bg-blue-600", "text-white"));
      button.classList.add("bg-blue-600", "text-white");
      renderPublications(year);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPublications();
  setupFilters();
});