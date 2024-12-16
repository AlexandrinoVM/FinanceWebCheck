const categoriesContainer = document.getElementById('categoriesContainer');
        const addCategoryButton = document.getElementById('addCategoryButton');
        let categoryCount = 0;

        addCategoryButton.addEventListener('click', () => {
            categoryCount++;

            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('category');
            categoryDiv.setAttribute('data-category-id', categoryCount);

            categoryDiv.innerHTML = `
                <div class="form-group">
                    <label for="categoryName${categoryCount}">Category Name</label>
                    <input type="text" id="categoryName${categoryCount}" name="categoryName" required>
                </div>

                <div class="items-container" id="itemsContainer${categoryCount}"></div>
                
                <button type="button" class="btn-secondary" onclick="addItem(${categoryCount})">Add Item</button>
                <button type="button" class="btn-danger" onclick="removeCategory(${categoryCount})">Remove Category</button>
            `;

            categoriesContainer.appendChild(categoryDiv);
        });

        function addItem(categoryId) {
            const itemsContainer = document.getElementById(`itemsContainer${categoryId}`);
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            itemDiv.innerHTML = `
                <div class="form-group">
                    <label>Item Name</label>
                    <input type="text" name="itemName" required>
                </div>
                <div class="form-group">
                    <label>Item Price</label>
                    <input type="number" name="itemPrice" required>
                </div>
                <button type="button" class="btn-danger" onclick="removeItem(this)">Remove Item</button>
            `;

            itemsContainer.appendChild(itemDiv);
        }

        function removeItem(button) {
            button.parentElement.remove();
        }

        function removeCategory(categoryId) {
            const categoryDiv = document.querySelector(`.category[data-category-id='${categoryId}']`);
            categoryDiv.remove();
        }

        document.getElementById('financialForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const totalAmount = document.getElementById('totalAmount').value;
            const categories = [];

            document.querySelectorAll('.category').forEach(categoryDiv => {
                const categoryName = categoryDiv.querySelector('input[name="categoryName"]').value;
                const items = [];

                categoryDiv.querySelectorAll('.item').forEach(itemDiv => {
                    const itemName = itemDiv.querySelector('input[name="itemName"]').value;
                    const itemPrice = parseFloat(itemDiv.querySelector('input[name="itemPrice"]').value);
                    items.push({ name: itemName, price: itemPrice });
                });

                categories.push({ name: categoryName, items });
            });

            const financialData = {
                totalAmount: parseFloat(totalAmount),
                categories: categories
            };

            console.log('Financial Data:', financialData);
            alert('Check the console for submitted data.');
        });