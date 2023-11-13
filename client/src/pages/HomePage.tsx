import React, { useState, useEffect } from 'react';
import Project from '../types/ProjectType';
import { Typography, Box, Button, IconButton } from '@mui/material';

type Props = {};

const HomePage = (props: Props) => {
    const [data, setData] = useState<Project[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h4">Products:</Typography>
            </Box>

            {data.map((project: Project) => (
                <Box key={project.id} sx={{ background: "silver", width: 150, height: 250 }}>
                    <Typography variant="h6">Name: {project.name}</Typography>
                    <Typography variant="h6">Category: {project.category}</Typography>

                </Box>
            ))}
        </>
    );
};

export default HomePage;