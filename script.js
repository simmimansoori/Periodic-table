    // Function to create a periodic table element
    const createPeriodicElement = (symbol, atomicNumber, name) => {
        const element = document.createElement("div");
        element.classList.add("element");
        element.innerHTML = symbol;

        element.setAttribute("data-atomic-number", atomicNumber);
        element.setAttribute("data-element-name", name);

        return element;
      };

      // Event handler for periodic table element click
      const handleElementClick = (event) => {
        const target = event.target;

        if (target.classList.contains("element")) {
          const atomicNumber = target.getAttribute("data-atomic-number");
          const elementName = target.getAttribute("data-element-name");
          alert(`Atomic Number: ${atomicNumber}\nElement Name: ${elementName}`);
        }
      };

      // Function to initialize the periodic table
      function initializePeriodicTable() {
        const mainBody = document.querySelector(".mainBody");

        // Create 50 periodic table elements
        for (let i = 1; i <= 50; i++) {
          const element = createPeriodicElement(`Elem${i}`, i, `Element ${i}`);
          mainBody.append(element);
        }

        // Add event delegation to the container
        mainBody.addEventListener("click", handleElementClick);
      }

      // Initialize the periodic table
      initializePeriodicTable();