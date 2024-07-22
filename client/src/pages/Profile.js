// src/pages/Profile.js

import React, { useContext } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <Box p={4}>
            <Heading>Profile</Heading>
            {user ? (
                <>
                    <Text>Username: {user.username}</Text>
                    <Text>Email: {user.email}</Text>
                    <Button onClick={logout}>Logout</Button>
                </>
            ) : (
                <Text>You are not logged in.</Text>
            )}
        </Box>
    );
};

export default Profile;
