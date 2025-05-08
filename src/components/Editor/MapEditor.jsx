import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${colors.background};
  color: ${colors.text};
`;

const TopNavBar = styled.nav`
  background-color: ${colors.primary};
  padding: 1rem;
  border-bottom: 1px solid ${colors.border};
  text-align: center;
  font-size: 1.2rem;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden; /* Prevents scrollbars on the main content if children are too big */
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: ${colors.secondary};
  padding: 1rem;
  border-right: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ToolButton = styled.button`
  background-color: ${colors.accent};
  color: ${colors.text};
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: ${colors.highlight};
    color: ${colors.primary};
  }
`;

const GridPlaceholder = styled.div`
  flex: 1;
  border: 2px dashed ${colors.border};
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
`;

const PropertyPanel = styled.aside`
  width: 300px;
  background-color: ${colors.secondary};
  padding: 1rem;
  border-left: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PropertyGroup = styled.div`
  margin-bottom: 1rem;
  h4 {
    color: ${colors.highlight};
    margin-bottom: 0.5rem;
  }
`;

const PropertyInput = styled.input`
  width: calc(100% - 1rem); /* Account for padding */
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${colors.primary};
  border: 1px solid ${colors.border};
  color: ${colors.text};
  border-radius: 3px;
`;

const MapEditor = () => {
  return (
    <EditorContainer>
      <TopNavBar>HexMap.Online GM Editor</TopNavBar>
      <MainContent>
        <Sidebar>
          <h3>Tools</h3>
          <ToolButton>Select Tool</ToolButton>
          <ToolButton>Paint Terrain</ToolButton>
          <ToolButton>Place Object</ToolButton>
          <ToolButton>Measure Distance</ToolButton>
          <h3>Controls</h3>
          <ToolButton>Zoom In</ToolButton>
          <ToolButton>Zoom Out</ToolButton>
          <ToolButton>Save Map</ToolButton>
        </Sidebar>
        <GridPlaceholder>Hex Grid Placeholder</GridPlaceholder>
        <PropertyPanel>
          <h3>Properties</h3>
          <PropertyGroup>
            <h4>Selected Hex</h4>
            <label htmlFor="hex-terrain">Terrain Type:</label>
            <PropertyInput type="text" id="hex-terrain" defaultValue="Grass" />
            <label htmlFor="hex-notes">Notes:</label>
            <PropertyInput as="textarea" id="hex-notes" rows="3" defaultValue="A grassy plain." />
          </PropertyGroup>
          <PropertyGroup>
            <h4>Map Settings</h4>
            <label htmlFor="map-name">Map Name:</label>
            <PropertyInput type="text" id="map-name" defaultValue="My Awesome Map" />
          </PropertyGroup>
        </PropertyPanel>
      </MainContent>
    </EditorContainer>
  );
};

export default MapEditor; 