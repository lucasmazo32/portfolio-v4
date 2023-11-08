import type { Meta, StoryObj } from '@storybook/react'
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg'
import { userEvent } from '@storybook/testing-library'
import { Button } from './Button'

const meta = {
  title: 'Pykex/Button',
  component: Button,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [undefined, 'ghost', 'primary'],
      },
    },
  },
} as Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: <span>Hello world</span>,
    color: 'primary',
  },
}

export const Ghost: Story = {
  args: {
    children: <span>Hello world</span>,
    color: 'ghost',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span>Hello world</span>
        <EmailIcon />
      </>
    ),
  },
}

export const Tests: Story = {
  args: {
    children: 'click me',
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button')

    if (!button) {
      throw new Error('Button not found')
    }

    await userEvent.click(button)
  },
}
