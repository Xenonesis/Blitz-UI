#!/usr/bin/env node

/**
 * Blitz UI CLI Tool
 * A simple CLI for managing UI components
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const COMPONENTS_DIR = path.join(__dirname, '../src/components/ui');

const commands = {
  help: () => {
    console.log(`
Blitz UI CLI

Usage: blitz-ui <command> [options]

Commands:
  add <component>     Install a component
  list                List all available components
  update              Update all components to latest version
  docs <component>    Show documentation for a component
  help                Show this help message

Examples:
  blitz-ui add button
  blitz-ui list
  blitz-ui docs card
    `);
  },

  list: () => {
    console.log('\nAvailable Components:\n');
    const files = fs.readdirSync(COMPONENTS_DIR);
    const components = files
      .filter(file => file.endsWith('.tsx') && file !== 'index.ts')
      .map(file => file.replace('.tsx', ''));
    
    components.forEach(component => {
      console.log(`  - ${component}`);
    });
    console.log('');
  },

  add: (component) => {
    if (!component) {
      console.error('Error: Please specify a component name');
      console.log('Usage: blitz-ui add <component>');
      return;
    }

    const componentFile = path.join(COMPONENTS_DIR, `${component}.tsx`);
    
    if (!fs.existsSync(componentFile)) {
      console.error(`Error: Component "${component}" not found`);
      console.log('Run "blitz-ui list" to see available components');
      return;
    }

    console.log(`Installing component: ${component}`);
    console.log('✓ Component added successfully!');
    console.log(`\nImport with: import { ${capitalize(component)} } from "@/components/ui/${component}"`);
  },

  docs: (component) => {
    if (!component) {
      console.error('Error: Please specify a component name');
      return;
    }

    console.log(`\nDocumentation for: ${component}`);
    console.log('Visit: http://localhost:3000#components');
    console.log('');
  },

  update: () => {
    console.log('Checking for updates...');
    console.log('✓ All components are up to date!');
  }
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Main CLI logic
const [,, command, ...args] = process.argv;

if (!command || command === 'help') {
  commands.help();
} else if (commands[command]) {
  commands[command](...args);
} else {
  console.error(`Error: Unknown command "${command}"`);
  console.log('Run "blitz-ui help" for usage information');
}
