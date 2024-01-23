import type { Meta, StoryObj } from '@storybook/react'
import { Image } from './Image'

const meta = {
  title: 'Pykex/Image',
  component: Image,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  argTypes: {},
} as Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'w-40 h-40',
    overridePadding: 'p-2',
    src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
  },
}
