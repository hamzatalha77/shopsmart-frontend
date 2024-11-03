import React, { useEffect, useState } from 'react';
import api from '../api';
import { TextField, Button, List, ListItem, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Add } from '@mui/icons-material';

function ShoppingLists() {
    const [shoppingLists, setShoppingLists] = useState([]);
    const [newListName, setNewListName] = useState("");
    const [newProducts, setNewProducts] = useState([{ name: "", quantity: 1, note: "" }]);
    const [selectedList, setSelectedList] = useState(null);

    useEffect(() => {
        fetchShoppingLists();
    }, []);

    const fetchShoppingLists = () => {
        api.get('shoppinglists/')
            .then((res) => setShoppingLists(res.data))
            .catch((error) => console.error(error));
    };

    const handleProductChange = (index, field, value) => {
        const updatedProducts = [...newProducts];
        updatedProducts[index][field] = value;
        setNewProducts(updatedProducts);
    };

    const addNewProductField = () => {
        setNewProducts([...newProducts, { name: "", quantity: 1, note: "" }]);
    };

    const addShoppingList = () => {
        api.post('shoppinglists/', { name: newListName })
            .then((res) => {
                const listId = res.data.id;
                const productsWithListId = newProducts.map(product => ({ ...product, shopping_list: listId }));
                return Promise.all(productsWithListId.map(product => api.post('products/', product)));
            })
            .then(() => {
                fetchShoppingLists();
                setNewListName("");
                setNewProducts([{ name: "", quantity: 1, note: "" }]);
            })
            .catch((error) => console.error(error));
    };

    const viewProducts = (list) => {
        setSelectedList(list);
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Create a Shopping List with Products</h1>
            <TextField
                label="List Name"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                style={{ marginBottom: 20 }}
            />
            
            <h2>Products for this List</h2>
            {newProducts.map((product, index) => (
                <div key={index} style={{ marginBottom: 10 }}>
                    <TextField
                        label="Product Name"
                        value={product.name}
                        onChange={(e) => handleProductChange(index, "name", e.target.value)}
                        style={{ marginRight: 10 }}
                    />
                    <TextField
                        label="Quantity"
                        type="number"
                        value={product.quantity}
                        onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
                        style={{ marginRight: 10 }}
                    />
                    <TextField
                        label="Note"
                        value={product.note}
                        onChange={(e) => handleProductChange(index, "note", e.target.value)}
                    />
                </div>
            ))}
            <Button
                onClick={addNewProductField}
                style={{ marginBottom: 20 }}
                variant="outlined"
            >
                Add Another Product
            </Button>

            <Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={addShoppingList}
            >
                Create Shopping List
            </Button>

            <h2>Available Shopping Lists</h2>
            <List>
                {shoppingLists.map((list) => (
                    <ListItem key={list.id} button onClick={() => viewProducts(list)}>
                        {list.name}
                    </ListItem>
                ))}
            </List>

            {selectedList && (
                <div>
                    <h2>Products in {selectedList.name}</h2>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Note</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {selectedList.products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.quantity}</TableCell>
                                    <TableCell>{product.note}</TableCell>
                                    <TableCell>{product.is_bought ? "Bought" : "Pending"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}

export default ShoppingLists;
