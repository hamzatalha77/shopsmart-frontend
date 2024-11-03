import React, { useEffect, useState, useCallback } from 'react';
import api from '../api';
import { TextField, Button, List, ListItem, Checkbox, IconButton } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

function Products({ shoppingListId }) {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: "", quantity: 1, note: "", is_bought: false });

    // Wrap fetchProducts with useCallback to memoize it
    const fetchProducts = useCallback(() => {
        api.get(`products/?shopping_list=${shoppingListId}`)
            .then((res) => setProducts(res.data))
            .catch((error) => console.error(error));
    }, [shoppingListId]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const addProduct = () => {
        api.post('products/', { ...newProduct, shopping_list: shoppingListId })
            .then(fetchProducts)
            .catch((error) => console.error(error));
        setNewProduct({ name: "", quantity: 1, note: "", is_bought: false });
    };

    const deleteProduct = (id) => {
        api.delete(`products/${id}/`)
            .then(fetchProducts)
            .catch((error) => console.error(error));
    };

    const toggleBoughtStatus = (product) => {
        api.put(`products/${product.id}/`, { ...product, is_bought: !product.is_bought })
            .then(fetchProducts)
            .catch((error) => console.error(error));
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Products</h2>
            <TextField
                label="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                style={{ marginBottom: 20 }}
            />
            <TextField
                label="Quantity"
                type="number"
                value={newProduct.quantity}
                onChange={(e) => setNewProduct({ ...newProduct, quantity: Number(e.target.value) })}
                style={{ marginBottom: 20 }}
            />
            <TextField
                label="Note"
                value={newProduct.note}
                onChange={(e) => setNewProduct({ ...newProduct, note: e.target.value })}
                style={{ marginBottom: 20 }}
            />
            <div>
                <Checkbox
                    checked={newProduct.is_bought}
                    onChange={(e) => setNewProduct({ ...newProduct, is_bought: e.target.checked })}
                />
                <span>Mark as Bought</span>
            </div>
            <Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={addProduct}
                style={{ marginTop: 20 }}
            >
                Add Product
            </Button>

            <List>
                {products.map((product) => (
                    <ListItem key={product.id} style={{ transition: '0.3s ease' }}>
                        <Checkbox
                            checked={product.is_bought}
                            onChange={() => toggleBoughtStatus(product)}
                        />
                        <span style={{ textDecoration: product.is_bought ? "line-through" : "none" }}>
                            {product.name} - Quantity: {product.quantity} - Note: {product.note || "No note"}
                        </span>
                        <IconButton onClick={() => deleteProduct(product.id)} color="error">
                            <Delete />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Products;
