const data = {
  Mathematics: {
    Algebra: {},
    Calculus: {
      Derivatives: {},
      Integrals: {},
    },
  },
  Physics: {
    Thermodynamics: {
      "Heat Transfer": {
        Convection: {},
        Radiation: {},
      },
    },
  },
};

const container = document.getElementById("root");
container.appendChild(renderTree(data, container));

function renderTree(data, container) {
  const ul = document.createElement("ul");

  if (Object.keys(data).length === 0) return ul;

  for (const key in data) {
    console.log('Key: ', key);
    const li = document.createElement("li");
    li.textContent = key;

    if (Object.keys(data[key]).length > 0)
      li.appendChild(renderTree(data[key], container));

    ul.appendChild(li);
  }

  return ul;
}
