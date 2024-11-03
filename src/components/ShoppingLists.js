import React, { useEffect, useState } from 'react';
import api from '../api';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import Products from './Products';

function ShoppingLists() {
    const [shoppingLists, setShoppingLists] = useState([]);
    const [newListName, setNewListName] = useState("");
    const [selectedListId, setSelectedListId] = useState(null);
    const [selectedListName, setSelectedListName] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingName, setEditingName] = useState("");

    useEffect(() => {
        fetchShoppingLists();
    }, []);

    const fetchShoppingLists = () => {
        api.get('shoppinglists/')
            .then((res) => setShoppingLists(res.data))
            .catch((error) => console.error(error));
    };

    const addShoppingList = () => {
        if (!newListName) return; // Avoid empty names
        api.post('shoppinglists/', { name: newListName })
            .then(() => {
                fetchShoppingLists();
                setNewListName("");
            })
            .catch((error) => console.error(error));
    };

    const deleteShoppingList = (id) => {
        api.delete(`shoppinglists/${id}/`)
            .then(fetchShoppingLists)
            .catch((error) => console.error(error));
    };

    const startEditing = (id, name) => {
        setEditingId(id);
        setEditingName(name);
    };

    const updateShoppingList = () => {
        api.put(`shoppinglists/${editingId}/`, { name: editingName })
            .then(fetchShoppingLists)
            .catch((error) => console.error(error));
        setEditingId(null);
        setEditingName("");
    };

    const handleListClick = (id, name) => {
        setSelectedListId(id);
        setSelectedListName(name);
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Shopping Lists</h1>
            <TextField
                label="New List Name"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                style={{ marginBottom: 20 }}
            />
            <Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={addShoppingList}
                style={{ marginBottom: 20 }}
            >
                Add List
            </Button>

            <List>
                {shoppingLists.map((list) => (
                    <ListItem key={list.id} style={{ transition: '0.3s ease' }}>
                        {editingId === list.id ? (
                            <>
                                <TextField
                                    value={editingName}
                                    onChange={(e) => setEditingName(e.target.value)}
                                    style={{ marginRight: 10 }}
                                />
                                <Button onClick={updateShoppingList}>Save</Button>
                            </>
                        ) : (
                            <>
                                <ListItemText
                                    primary={list.name}
                                    onClick={() => handleListClick(list.id, list.name)}
                                    style={{ cursor: 'pointer' }}
                                />
                                <IconButton onClick={() => startEditing(list.id, list.name)}>
                                    <Edit />
                                </IconButton>
                                <IconButton onClick={() => deleteShoppingList(list.id)} color="error">
                                    <Delete />
                                </IconButton>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>

            {/* Display products for the selected list */}
            {selectedListId && (
                <div style={{ marginTop: 30 }}>
                    <h2>Products in {selectedListName}</h2>
                    <Products shoppingListId={selectedListId} />
                </div>
            )}
        </div>
    );
}

export default ShoppingLists;
