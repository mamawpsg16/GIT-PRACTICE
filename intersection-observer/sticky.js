
document.addEventListener("DOMContentLoaded", () => {
    const tableContainer = document.getElementById('table-container');
    const tableHeader = document.getElementById('table-header');
    const tableBody = document.getElementById('table-body');
    const stickyHeader = document.getElementById('sticky-header');
    const stickyHeaderTable = document.getElementById('sticky-table');

    // Populate the table with 50 rows of data
    for (let i = 1; i <= 50; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="frozen">Name ${i}</td>
            <td class="frozen">${20 + i}</td>
            <td class="frozen">Occupation ${i}</td>
            <td>Birth Date ${i}</td>
            <td>Nickname ${i}</td>
            <td>Address ${i}</td>
            <td>Civil Status ${i}</td>
            <td>Is Married ${i}</td>
            <td>SSS # ${i}</td>
            <td>Philhealth # ${i}</td>
            <td>Name ${i}</td>
            <td>${20 + i}</td>
            <td>Occupation ${i}</td>
            <td>Birth Date ${i}</td>
            <td>Nickname ${i}</td>
            <td>Address ${i}</td>
            <td>Civil Status ${i}</td>
            <td>Is Married ${i}</td>
            <td>SSS # ${i}</td>
            <td>Philhealth # ${i}</td>
        `;
        tableBody.appendChild(row);
    }

    // Clone the original thead and append to the sticky header table
    const clonedThead = tableHeader.cloneNode(true);
    stickyHeaderTable.appendChild(clonedThead);

    // Function to update sticky header column widths
    function updateStickyHeaderWidths() {
        const originalThs = tableHeader.querySelectorAll('th');
        const stickyThs = stickyHeaderTable.querySelectorAll('th');
        originalThs.forEach((th, index) => {
            const width = th.getBoundingClientRect().width;
            stickyThs[index].style.width = `${width}px`;
        });
        stickyHeaderTable.style.width = `${tableHeader.getBoundingClientRect().width}px`;
    }

    // Update column widths on load and resize
    updateStickyHeaderWidths();
    window.addEventListener('resize', updateStickyHeaderWidths);

    // Synchronize horizontal scroll
    tableContainer.addEventListener('scroll', () => {
        stickyHeaderTable.style.transform = `translateX(${-tableContainer.scrollLeft}px)`;
    });

    // Intersection Observer to show/hide sticky header
    let options = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0, // Trigger the callback when any part of the header is visible
    };

    let callback = (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                stickyHeader.style.display = 'block';
            } else {
                stickyHeader.style.display = 'none';
            }
        });
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(tableHeader);
});