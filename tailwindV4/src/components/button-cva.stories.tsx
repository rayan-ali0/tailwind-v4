import type { Meta, StoryObj } from '@storybook/react';
import ButtonCVA from './button-cva';
import '../components/button.css'
// Meta configuration - tells Storybook about your component
const meta: Meta<typeof ButtonCVA> = {
  title: 'Components/ButtonCVA',  // Where it appears in sidebar
  component: ButtonCVA,
  parameters: {
    layout: 'centered',  // Center the button in canvas
  },
  tags: ['autodocs'],  // Auto-generate documentation
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interaction',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonCVA>;

// Default story
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
    onClick: () => console.log('Primary clicked'),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button',
    onClick: () => console.log('Secondary clicked'),
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    children: 'Delete',
    onClick: () => console.log('Danger clicked'),
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Ghost Button',
    onClick: () => console.log('Ghost clicked'),
  },
};

// Size variants
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button',
    onClick: () => console.log('Small clicked'),
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium Button',
    onClick: () => console.log('Medium clicked'),
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button',
    onClick: () => console.log('Large clicked'),
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Disabled Button',
    disabled: true,
    onClick: () => console.log('Should not fire'),
  },
};

// Showcase: All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <ButtonCVA variant="primary" onClick={() => console.log('Primary')}>
        Primary
      </ButtonCVA>
      <ButtonCVA variant="secondary" onClick={() => console.log('Secondary')}>
        Secondary
      </ButtonCVA>
      <ButtonCVA variant="danger" onClick={() => console.log('Danger')}>
        Danger
      </ButtonCVA>
      <ButtonCVA variant="ghost" onClick={() => console.log('Ghost')}>
        Ghost
      </ButtonCVA>
    </div>
  ),
};

// Showcase: All Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <ButtonCVA variant="primary" size="sm" onClick={() => console.log('Small')}>
        Small
      </ButtonCVA>
      <ButtonCVA variant="primary" size="md" onClick={() => console.log('Medium')}>
        Medium
      </ButtonCVA>
      <ButtonCVA variant="primary" size="lg" onClick={() => console.log('Large')}>
        Large
      </ButtonCVA>
    </div>
  ),
};

// Showcase: All States
export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <ButtonCVA variant="primary" onClick={() => console.log('Normal')}>
          Normal
        </ButtonCVA>
        <ButtonCVA variant="primary" disabled onClick={() => console.log('Disabled')}>
          Disabled
        </ButtonCVA>
      </div>
      <div className="flex gap-4">
        <ButtonCVA variant="secondary" onClick={() => console.log('Normal')}>
          Normal
        </ButtonCVA>
        <ButtonCVA variant="secondary" disabled onClick={() => console.log('Disabled')}>
          Disabled
        </ButtonCVA>
      </div>
    </div>
  ),
};