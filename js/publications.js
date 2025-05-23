const publications = [
  {
    year: 2025,
    journal: "Int. J. Biol. Macromol.",
    citation: "<b>Wang, Z.</b>†, Zhang, X.†, Fu, J., Huang, J.* & Wang, L.* (2025). Fish collagen mediated alteration of wheat starch thermal properties during multi-species co-fermentation. <i>Int. J. Biol. Macromol.</i> 295, 139987.",
    doi: "https://doi.org/10.1016/j.ijbiomac.2025.139987"
  },
  {
    year: 2024,
    journal: "Trends Food Sci. Tech.",
    citation: "<b>Wang, Z.</b>*, Wang, L., Hou, Y., … Huang, J.* (2024). Precision calories: A promising strategy for personalized health interventions in the precision nutrition framework. <i>Trends Food Sci. Tech.</i> 153, 104727.",
    doi: "https://doi.org/10.1016/j.tifs.2024.104727"
  },
  {
    year: 2024,
    journal: "Int. J. Biol. Macromol.",
    citation: "<b>Wang, Z.</b>, Zhang, S., Wang, H., Huang, J.* & Wang, L.* (2024). Effect of synergistic fermentation of <i>Saccharomyces cerevisiae</i> and <i>Lactobacillus plantarum</i> on thermal properties of hyaluronic acid-wheat starch system. <i>Int. J. Biol. Macromol.</i> 267, 131542.",
    doi: "https://doi.org/10.1016/j.ijbiomac.2024.131542"
  },
  {
    year: 2024,
    journal: "J. Future Foods",
    citation: "<b>Wang, Z.</b>, Zhang, X., Wang, L.*, … Huang, J.* (2024). High Fischer ratio oligopeptides in food: sources, functions and application prospects. <i>J. Future Foods</i> 4(2), 128-134.",
    doi: "https://doi.org/10.1016/j.jfutfo.2023.06.003"
  },
  {
    year: 2022,
    journal: "Food Chem. X",
    citation: "<b>Wang, Z.</b>, Ma, S.*, Li, L. & Huang, J.* (2022). Synergistic fermentation of <i>Lactobacillus plantarum</i> and <i>Saccharomyces cerevisiae</i> to improve the quality of wheat bran dietary fiber-steamed bread. <i>Food Chem. X</i> 16, 100528.",
    doi: "https://doi.org/10.1016/j.fochx.2022.100528"
  },
  {
    year: 2022,
    journal: "Front. Nutr.",
    citation: "<b>Wang, Z.</b>, Ma, S.*, Li, L. & Huang, J.* (2022). Effect of wheat bran dietary fiber on structural properties and hydrolysis behavior of gluten after synergistic fermentation of <i>Lactobacillus plantarum</i> and <i>Saccharomyces cerevisiae</i>. <i>Front. Nutr.</i> 9, 982878.",
    doi: "https://doi.org/10.3389/fnut.2022.982878"
  },
  {
    year: 2021,
    journal: "Int. J. Biol. Macromol.",
    citation: "<b>Wang, Z.</b>, Yan, J., Ma, S*. et al. (2021). Effect of wheat bran dietary fiber on structural properties of wheat starch after synergistic fermentation of <i>Lactobacillus plantarum</i> and <i>Saccharomyces cerevisiae</i>. <i>Int. J. Biol. Macromol.</i> 190, 86-92.",
    doi: "https://doi.org/10.1016/j.ijbiomac.2021.08.179"
  },
  {
    year: 2021,
    journal: "Int. J. Biol. Macromol.",
    citation: "<b>Wang, Z.</b>, Ma, S.*, Sun, B.* et al. (2021). Effects of thermal properties and behavior of wheat starch and gluten on their interaction: A review. <i>Int. J. Biol. Macromol.</i> 177, 474-484.",
    doi: "https://doi.org/10.1016/j.ijbiomac.2021.02.175"
  },
  {
    year: 2021,
    journal: "Int. J. Food Sci. Technol.",
    citation: "<b>Wang, Z.</b>, Ma, S.*, Huang, J., … Wang, X.* (2021). Biochemical properties of type I sourdough affected by wheat bran dietary fiber during fermentation. <i>Int. J. Food Sci. Technol.</i> 57(4), 1995-2002.",
    doi: "https://doi.org/10.1111/ijfs.15327"
  },
  {
    year: 2024,
    journal: "Adv. Mater. Technol.",
    citation: "Wang, L.†, <b>Wang, Z.</b>†, Liu, F., … Huang, J.* & Wang, G.* (2024). Programmable plasmonic hydrogel thermometers actuated by DNA breathing. <i>Adv. Mater. Technol.</i> 9(20), 2400243.",
    doi: "https://doi.org/10.1002/admt.202400243"
  },
  {
    year: 2023,
    journal: "Food Hydrocoll.",
    citation: "Zhang, X.†, <b>Wang, Z.</b>†, Wang, L., … Huang, J.* & Luan, G.* (2023). Structural support of zein network to rice flour gluten-free dough: Rheological, textural and thermal properties. <i>Food Hydrocoll.</i> 141, 108721.",
    doi: "https://doi.org/10.1016/j.foodhyd.2023.108721"
  },
  {
    year: 2022,
    journal: "Trends Food Sci. Tech.",
    citation: "Ma, S.*, <b>Wang, Z.</b>, Liu, H. et al. (2022). Supplementation of wheat flour products with wheat bran dietary fiber: Purpose, mechanisms, and challenges. <i>Trends Food Sci. Tech.</i> 123, 281-289.",
    doi: "https://doi.org/10.1016/j.tifs.2022.03.012"
  },
  {
    year: 2022,
    journal: "Food Chem.",
    citation: "Ma, S.*, <b>Wang, Z.</b>, Tian, X. et al. (2022). Effect of synergistic fermentation of <i>Lactobacillus plantarum</i> and <i>Saccharomyces cerevisiae</i> on thermal properties of wheat bran dietary fiber-wheat starch system. <i>Food Chem.</i> 373, 131417.",
    doi: "https://doi.org/10.1016/j.foodchem.2021.131417"
  },
  {
    year: 2021,
    journal: "Food Chem.",
    citation: "Ma, S.*, <b>Wang, Z.</b>, Guo, X. et al. (2021). Sourdough improves the quality of whole-wheat flour products: Mechanisms and challenges—A review. <i>Food Chem.</i> 360, 130038.",
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